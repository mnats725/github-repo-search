import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPublicRepositories } from "@api/repositories-api/repositories";

import type { Repository, RepositoryQueryParams, RepositoryResponse } from "@api/repositories-api/repositories/types";

export type RepositoriesState = {
  items: Repository[];
  status: "idle" | "loading" | "failed";
};

const initialState: RepositoriesState = {
  items: [],
  status: "idle",
};

export const getRepositoriesThunk = createAsyncThunk(
  "repositories/fetchRepositories",
  async (params: RepositoryQueryParams) => {
    const response: RepositoryResponse = await getPublicRepositories(params);

    return response.items;
  }
);

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRepositoriesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRepositoriesThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(getRepositoriesThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const repositoriesReducer = repositoriesSlice.reducer;
