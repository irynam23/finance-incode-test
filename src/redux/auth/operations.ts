import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { IAuthState } from "./slice";

axios.defaults.baseURL = "https://expa.fly.dev";

const createAuthAsyncThunk = createAsyncThunk.withTypes<{
  state: { auth: IAuthState };
  dispatch: Dispatch;
  rejectValue: string;
  extra: { s: string; n: number };
}>();

// Utility to add JWT
const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAuthAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res: AxiosResponse<{
        id: number;
        username: string;
        displayName: string;
        admin: boolean;
      }> = await axios.post("/auth/register", credentials);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAuthAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res: AxiosResponse<{
        accessToken: string;
        refreshToken: string;
      }> = await axios.post("/auth/login", credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAuthAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.get("/auth/logout");
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshToken = createAuthAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const refreshToken = state.auth.refreshToken;

    if (refreshToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request

      const res: AxiosResponse<{
        accessToken: string;
      }> = await axios.post("/auth/refresh", { refreshToken });
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
