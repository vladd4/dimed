import { db } from "@/firebase";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
} from "firebase/firestore";

type DoctorCard = {
  name: string;
  position: string;
  image: string;
};

type DoctorsSlice = {
  doctors: DoctorCard[] | null;
  status: "loading" | "loaded";
};

const initialState: DoctorsSlice = {
  doctors: null,
  status: "loading",
};

export const fetchDoctors = createAsyncThunk(
  "doctors/fetchDoctors",
  async () => {
    const collectionRef = collection(db, "doctors");
    const data = await getDocs(collectionRef);
    return data.docs.map((doc: QueryDocumentSnapshot) => ({
      name: doc.get("name"),
      position: doc.get("position"),
      image: doc.get("image"),
    })) as DoctorCard[];
  }
);

export const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.doctors = null;
        state.status = "loading";
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.doctors = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchDoctors.rejected, (state) => {
        state.doctors = null;
        state.status = "loading";
      });
  },
});

export default doctorsSlice.reducer;
