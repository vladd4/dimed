import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alertSlice";
import hamburgerSlice from "./slices/hamburgerSlice";
import doctorsSlice from "./slices/doctorsSlice";
import serviceSlice from "./slices/serviceSlice";
import pricingSlice from "./slices/pricingSlice";
import aboutSlice from "./slices/aboutSlice";
import blogSlice from "./slices/blogSlice";
import diseaseSlice from "./slices/diseaseSlice";
import serviceDetailsSlice from "./slices/serviceDetailsSlice";

const store = configureStore({
  reducer: {
    alert: alertSlice,
    hamburger: hamburgerSlice,
    doctors: doctorsSlice,
    services: serviceSlice,
    pricing: pricingSlice,
    about: aboutSlice,
    blog: blogSlice,
    disease: diseaseSlice,
    serviceDetails: serviceDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
