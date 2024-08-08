import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPublicRepositories } from "@api/repositories-api/repositories";

import type { Repository, RepositoryQueryParams } from "@api/repositories-api/repositories/types";

export type RepositoriesState = {
  repositories: Repository[];
  status: "idle" | "loading" | "failed";
};

const initialState: RepositoriesState = {
  repositories: [],
  status: "idle",
};

export const getRepositoriesThunk = createAsyncThunk(
  "repositories/fetchRepositories",
  async (params: RepositoryQueryParams) => {
    return getPublicRepositories(params);
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
        state.repositories = action.payload;
      })
      .addCase(getRepositoriesThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const repositoriesReducer = repositoriesSlice.reducer;
