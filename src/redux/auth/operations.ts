import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthState } from "./slice";

axios.defaults.baseURL = "https://expa.fly.dev";

const createAuthAsyncThunk = createAsyncThunk.withTypes<{
  state: { auth: IAuthState };
  rejectValue: string;
}>();

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAuthAsyncThunk(
  "auth/register",
  async (
    credentials: {
      password: string;
      username: string;
      displayName: string;
    },
    thunkAPI
  ) => {
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

export const logIn = createAuthAsyncThunk(
  "auth/login",
  async (
    credentials: {
      username: string;
      password: string;
    },
    thunkAPI
  ) => {
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
