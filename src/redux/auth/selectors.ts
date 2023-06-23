import { IAuthState } from "./slice";
export const selectIsLoggedIn = (state: { auth: IAuthState }) =>
  state.auth.isLoggedIn;

export const selectIsLoading = (state: { auth: IAuthState }) =>
  state.auth.isLoading;

export const selectAuthError = (state: { auth: IAuthState }) =>
  state.auth.authError;
