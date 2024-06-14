import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alertSlice";
import hamburgerSlice from "./slices/hamburgerSlice";
import doctorsSlice from "./slices/doctorsSlice";
import serviceSlice from "./slices/serviceSlice";
import pricingSlice from "./slices/pricingSlice";
import aboutSlice from "./slices/aboutSlice";

const store = configureStore({
  reducer: {
    alert: alertSlice,
    hamburger: hamburgerSlice,
    doctors: doctorsSlice,
    services: serviceSlice,
    pricing: pricingSlice,
    about: aboutSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
