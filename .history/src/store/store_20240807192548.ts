// src/features/repositories/repositoriesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type Repository = {
  id: number;
  name: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
  description?: string;
  license?: {
    name: string;
  };
};

type RepositoriesState = {
  repositories: Repository[];
  selectedRepository?: Repository;
  status: "idle" | "loading" | "failed";
  sort: {
    column: "stargazers_count" | "forks_count" | "updated_at";
    direction: "asc" | "desc";
  };
};

const initialState: RepositoriesState = {
  repositories: [],
  status: "idle",
  sort: {
    column: "stargazers_count",
    direction: "desc",
  },
};

export const fetchRepositories = createAsyncThunk("repositories/fetchRepositories", async (searchTerm: string) => {
  const response = await axios.get(`https://api.github.com/search/repositories?q=${searchTerm}`);
  return response.data.items as Repository[];
});

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    selectRepository: (state, action: PayloadAction<number>) => {
      state.selectedRepository = state.repositories.find((repo) => repo.id === action.payload);
    },
    setSort: (
      state,
      action: PayloadAction<{ column: "stargazers_count" | "forks_count" | "updated_at"; direction: "asc" | "desc" }>
    ) => {
      state.sort = action.payload;
      state.repositories = [...state.repositories].sort((a, b) => {
        if (state.sort.direction === "asc") {
          return a[state.sort.column] > b[state.sort.column] ? 1 : -1;
        } else {
          return a[state.sort.column] < b[state.sort.column] ? 1 : -1;
        }
      });
    },
  },
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

export const { selectRepository, setSort } = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
