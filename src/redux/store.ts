import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alertSlice";
import hamburgerSlice from "./slices/hamburgerSlice";
import doctorsSlice from "./slices/doctorsSlice";
import serviceSlice from "./slices/serviceSlice";

const store = configureStore({
  reducer: {
    alert: alertSlice,
    hamburger: hamburgerSlice,
    doctors: doctorsSlice,
    services: serviceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
