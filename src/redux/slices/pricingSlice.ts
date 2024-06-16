import { db } from "@/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  collection, getDocs } from "firebase/firestore";

type ServiceItem = {
  name: string;
  description: string;
  whatDo: string[];
  price: { name: string; price: string }[];
};

type PricingSlice = {
  services: ServiceItem[] | null;
  status: "loading" | "loaded";
};

const initialState: PricingSlice = {
  services: null,
  status: "loading",
};

export const fetchPricingAll = createAsyncThunk(
  "pricing/fetchPricingAll",
  async () => {
    const collectionRef = collection(db, "services");
    const data = await getDocs(collectionRef);

    const serviceItems = data.docs.map((doc) => ({
      name: doc.get("name") as string,
      description: doc.get("description") as string,
      price: doc.get("price") as { name: string; price: string }[],
      whatDo: doc.get("whatDo") as string[],
    })) as ServiceItem[];

    return serviceItems;
  }
);

export const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPricingAll.pending, (state) => {
        state.services = null;
        state.status = "loading";
      })
      .addCase(fetchPricingAll.fulfilled, (state, action) => {
        const serviceItems = action.payload;
        state.services = serviceItems;
        state.status = "loaded";
      })
      .addCase(fetchPricingAll.rejected, (state) => {
        state.services = null;
        state.status = "loading";
      });
  },
});

export default pricingSlice.reducer;
