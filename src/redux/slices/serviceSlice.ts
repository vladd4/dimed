import { db } from "@/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QueryDocumentSnapshot, collection, getDocs } from "firebase/firestore";

type ServiceSlice = {
  hrebet: string[] | null;
  pain: string[] | null;
  sugloby: string[] | null;
  status: "loading" | "loaded";
};

const initialState: ServiceSlice = {
  hrebet: null,
  pain: null,
  sugloby: null,
  status: "loading",
};

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const collectionRef = collection(db, "disease");
    const data = await getDocs(collectionRef);
    let hrebet: string[] = [];
    let pain: string[] = [];
    let sugloby: string[] = [];

    data.docs.forEach((doc: QueryDocumentSnapshot) => {
      const disease = doc;
      console.log(disease);
      if (disease.id === "hrebet") {
        hrebet = disease.data().values as string[];
      }
      if (disease.id === "pain") {
        pain = disease.data().values as string[];
      }
      if (disease.id === "sugloby") {
        sugloby = disease.data().values as string[];
      }
    });

    return { hrebet, pain, sugloby };
  }
);

export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.hrebet = null;
        state.pain = null;
        state.sugloby = null;
        state.status = "loading";
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        const { hrebet, sugloby, pain } = action.payload;
        state.hrebet = hrebet;
        state.pain = pain;
        state.sugloby = sugloby;
        state.status = "loaded";
      })
      .addCase(fetchServices.rejected, (state) => {
        state.hrebet = null;
        state.pain = null;
        state.sugloby = null;
        state.status = "loading";
      });
  },
});

export default serviceSlice.reducer;
