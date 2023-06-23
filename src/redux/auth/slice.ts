import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshToken } from "./operations";
export interface IAuthState {
  accessToken: null | string;
  refreshToken: null | string;
  isLoggedIn: boolean;
  isLoading: boolean;
  authError: null | string;
}

const initialState: IAuthState = {
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoading: false,
  authError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
      state.authError = null;
    });
    builder.addCase(logIn.pending, (state) => {
      state.isLoading = true;
      state.authError = null;
    });
    builder.addCase(logOut.pending, (state) => {
      state.isLoading = true;
      state.authError = null;
    });
    builder.addCase(refreshToken.pending, (state) => {
      state.isLoading = true;
      state.authError = null;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.authError = action.payload as string;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.isLoading = false;
      state.authError = action.payload as string;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.isLoading = false;
      state.authError = action.payload as string;
    });
    builder.addCase(refreshToken.rejected, (state, action) => {
      state.isLoading = false;
      state.authError = action.payload as string;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
    });
  },
  reducers: {},
});

export const authReducer = authSlice.reducer;
