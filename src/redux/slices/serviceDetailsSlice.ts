import { db } from "@/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";

type ServiceItem = {
  image: string;
  images: string[];
  paragraph: string;
  video_id: string;
  pokazania: { name: string; description: string }[];
  anti_pokazania: { name: string; description: string }[];
  benefits: { name: string; description: string }[];
  effects: { name: string; description: string }[];
};

type ServiceDetailsSlice = {
  service_item: ServiceItem | null;
  status: "loading" | "loaded";
};

const initialState: ServiceDetailsSlice = {
  service_item: null,
  status: "loading",
};

export const fetchServiceDetails = createAsyncThunk(
  "serviceDetails/fetchServiceDetails",
  async (id: string) => {
    const docRef = doc(db, "service-page", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      const disease: ServiceItem = {
        paragraph: data.paragraph,
        image: data.image,
        images: data.images,
        video_id: data.video_id,
        pokazania: data.pokazania,
        anti_pokazania: data.anti_pokazania,
        benefits: data.benefits,
        effects: data.effects,
      };

      return disease;
    } else {
      throw new Error(`Document with ID ${id} does not exist`);
    }
  }
);

export const serviceDetailsSlice = createSlice({
  name: "serviceDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceDetails.pending, (state) => {
        state.service_item = null;
        state.status = "loading";
      })
      .addCase(fetchServiceDetails.fulfilled, (state, action) => {
        state.service_item = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchServiceDetails.rejected, (state) => {
        state.service_item = null;
        state.status = "loading";
      });
  },
});

export default serviceDetailsSlice.reducer;