import { db } from "@/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";

type Disease = {
  image_1: string;
  paragraph_1: string;
  paragraph_2: string;
  image_2?: string;
};

type DiseaseSlice = {
  disease: Disease | null;
  status: "loading" | "loaded";
};

const initialState: DiseaseSlice = {
  disease: null,
  status: "loading",
};

export const fetchDisease = createAsyncThunk(
  "diseases/fetchDisease",
  async (id: string) => {
    const docRef = doc(db, "disease-page", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      const disease: Disease = {
        paragraph_1: data.paragraph_1,
        paragraph_2: data.paragraph_2,
        image_1: data.image_1,
        image_2: data.image_2,
      };

      return disease;
    } else {
      throw new Error(`Document with ID ${id} does not exist`);
    }
  }
);

export const diseasesSlice = createSlice({
  name: "diseases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDisease.pending, (state) => {
        state.disease = null;
        state.status = "loading";
      })
      .addCase(fetchDisease.fulfilled, (state, action) => {
        state.disease = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchDisease.rejected, (state) => {
        state.disease = null;
        state.status = "loading";
      });
  },
});

export default diseasesSlice.reducer;
