import { db, storage } from "@/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";

type NumberCard = {
  heading: string;
  description: string;
  number: string;
};

type AboutSlice = {
  images: [] | null;
  numberCards: NumberCard[] | null;
  status: "loading" | "loaded";
};

const initialState: AboutSlice = {
  images: null,
  numberCards: null,
  status: "loading",
};

export const fetchImages = createAsyncThunk(
  "about/fetchImages",
  async (_, { getState }) => {
    const state = getState() as any;
    const { images } = state.about;
    const partnersListRef = ref(storage, "about-us/");
    try {
      const res = await listAll(partnersListRef);
      const uniqueUrls = new Set(images);

      for (const item of res.items) {
        const url = await getDownloadURL(item);
        uniqueUrls.add(url);
      }

      return Array.from(uniqueUrls) as [];
    } catch (error) {
      console.error("Error in fetchImages async thunk:", error);
      throw error;
    }
  }
);

export const fetchNumbers = createAsyncThunk("about/fetchNumbers", async () => {
  const collectionRef = collection(db, "about-numbers");
  const data = await getDocs(collectionRef);

  const serviceItems = data.docs.map((doc) => ({
    heading: doc.get("heading") as string,
    description: doc.get("description") as string,
    number: doc.get("number") as string,
  })) as NumberCard[];

  serviceItems.sort((a, b) => {
    const numberA = parseInt(a.number);
    const numberB = parseInt(b.number);

    if (numberA < numberB) {
      return -1;
    }
    if (numberA > numberB) {
      return 1;
    }
    return 0;
  });
  return serviceItems;
});

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.images = null;
        state.status = "loading";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.images = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchImages.rejected, (state) => {
        state.images = null;
        state.status = "loading";
      })
      .addCase(fetchNumbers.pending, (state) => {
        state.images = null;
        state.status = "loading";
      })
      .addCase(fetchNumbers.fulfilled, (state, action) => {
        state.numberCards = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchNumbers.rejected, (state) => {
        state.images = null;
        state.status = "loading";
      });
  },
});

export default aboutSlice.reducer;
