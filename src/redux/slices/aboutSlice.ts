import { storage } from "@/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDownloadURL, listAll, ref } from "firebase/storage";

type AboutSlice = {
  images: [] | null;
  status: "loading" | "loaded";
};

const initialState: AboutSlice = {
  images: null,
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
      });
  },
});

export default aboutSlice.reducer;
