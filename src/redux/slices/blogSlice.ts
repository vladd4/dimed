import { db } from "@/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

type BlogItem = {
  heading_1: string;
  heading_2?: string;
  heading_3?: string;
  heading_4?: string;
  heading_5?: string;
  paragraph_1: string;
  paragraph_2?: string;
  paragraph_3?: string;
  paragraph_4?: string;
  paragraph_5?: string;
  image_1: string;
  image_2?: string;
  author: string;
  date: string;
};

type BlogSlice = {
  blogs: BlogItem[] | null;
  status: "loading" | "loaded";
};

const initialState: BlogSlice = {
  blogs: null,
  status: "loading",
};

export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async () => {
  const collectionRef = collection(db, "blog");
  const data = await getDocs(collectionRef);

  const blogs = data.docs.map((doc) => ({
    heading_1: doc.get("heading_1") as string,
    heading_2: doc.get("heading_2") as string,
    heading_3: doc.get("heading_3") as string,
    heading_4: doc.get("heading_4") as string,
    heading_5: doc.get("heading_5") as string,
    paragraph_1: doc.get("paragraph_1") as string,
    paragraph_2: doc.get("paragraph_2") as string,
    paragraph_3: doc.get("paragraph_3") as string,
    paragraph_4: doc.get("paragraph_4") as string,
    paragraph_5: doc.get("paragraph_5") as string,
    image_1: doc.get("image_1") as string,
    image_2: doc.get("image_2") as string,
    author: doc.get("author") as string,
    date: doc.get("date") as string,
  })) as BlogItem[];

  return blogs;
});

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.blogs = null;
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.blogs = null;
        state.status = "loading";
      });
  },
});

export default blogSlice.reducer;
