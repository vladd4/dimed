import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type HamburgerSlice = {
  showBurger: boolean;
};

const initialState: HamburgerSlice = {
  showBurger: false,
};

export const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    setShowBurger: (state, action: PayloadAction<boolean>) => {
      state.showBurger = action.payload;
    },
  },
});

export const { setShowBurger } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;
