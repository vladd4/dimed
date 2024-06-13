import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alertSlice";
import hamburgerSlice from "./slices/hamburgerSlice";

const store = configureStore({
  reducer: {
    alert: alertSlice,
    hamburger: hamburgerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
