import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPublicRepositories } from "../api/repositories-api";

export type Repository = {
  id: number;
  name: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
  description: string;
  license: {
    name: string;
  };
};

export type RepositoriesState = {
  repositories: Repository[];
  status: "idle" | "loading" | "failed";
};

const initialState: RepositoriesState = {
  repositories: [],
  status: "idle",
};

export const fetchRepositories = createAsyncThunk("repositories/fetchRepositories", async (searchTerm: string) => {
  // Пример запроса с поисковым термином. Обновите API функцию по необходимости
  return await fetchPublicRepositories();
});

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

export default repositoriesSlice.reducer;
