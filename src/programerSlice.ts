import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CookieState {
  cookies: number;
}

const initialState: CookieState = {
  cookies: 0,
};

const cookieSlice = createSlice({
  name: "cookie",
  initialState,
  reducers: {
    clickCookie: (state) => {
      state.cookies += 1;
    },
  },
});

export const { clickCookie } = cookieSlice.actions;

export default cookieSlice.reducer;
