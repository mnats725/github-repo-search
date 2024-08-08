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

export const fetchRepositories = createAsyncThunk(
  "repositories/fetchRepositories",
  async (params: RepositoryQueryParams = {}) =>
    return getPublicRepositories(params);

);

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.status = "idle";
        state.repositories = action.payload;
      })
      .addCase(fetchRepositories.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const repositoriesReducer = repositoriesSlice.reducer;
