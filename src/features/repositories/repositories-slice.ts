import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPublicRepositories } from "@api/repositories-api/repositories";

import { RepositoriesStatuses } from "../../types/enums/repositories-statuses.enum";

import type { Repository, RepositoryQueryParams, RepositoryResponse } from "@api/repositories-api/repositories/types";

export type RepositoriesState = {
  items: Repository[];
  status: RepositoriesStatuses;
};

const initialState: RepositoriesState = {
  items: [],
  status: RepositoriesStatuses.IDLE,
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
        state.status = RepositoriesStatuses.LOADING;
      })
      .addCase(getRepositoriesThunk.fulfilled, (state, action) => {
        state.status = RepositoriesStatuses.IDLE;
        state.items = action.payload;
      })
      .addCase(getRepositoriesThunk.rejected, (state) => {
        state.status = RepositoriesStatuses.FAILED;
      });
  },
});

export const repositoriesReducer = repositoriesSlice.reducer;
