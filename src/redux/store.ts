import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alertSlice";
import hamburgerSlice from "./slices/hamburgerSlice";
import aboutSlice from "./slices/aboutSlice";
import serviceDetailsSlice from "./slices/serviceDetailsSlice";
import diseaseSlice from "./slices/diseaseSlice";

const store = configureStore({
  reducer: {
    alert: alertSlice,
    hamburger: hamburgerSlice,
    about: aboutSlice,
    disease: diseaseSlice,
    serviceDetails: serviceDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
