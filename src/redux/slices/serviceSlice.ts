import { db } from "@/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QueryDocumentSnapshot, collection, getDocs } from "firebase/firestore";

type ServiceSlice = {
  hrebet: string[] | null;
  pain: string[] | null;
  sugloby: string[] | null;
  serviceLabel: string;
  status: "loading" | "loaded";
};

const initialState: ServiceSlice = {
  hrebet: null,
  pain: null,
  sugloby: null,
  serviceLabel:
    "Nam sed laoreet est. Fusce a porttitor sapien. Nunc egestas feugiat placerat.Aenean ac bibendum leo, vitae fringilla tellus!!!!!!!.",
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

export const fetchServiceLabel = createAsyncThunk(
  "services/fetchServiceLabel",
  async () => {
    const collectionRef = collection(db, "service-label");
    const querySnapshot = await getDocs(collectionRef);

    if (!querySnapshot.empty) {
      const documentData = querySnapshot.docs[0].data();
      const label = documentData.label;

      return label;
    } else {
      throw new Error("No document found in 'service-label' collection.");
    }
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
      })
      .addCase(fetchServiceLabel.fulfilled, (state, action) => {
        state.serviceLabel = action.payload;
        state.status = "loaded";
      });
  },
});

export default serviceSlice.reducer;
