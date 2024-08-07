import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export type Repo = {
  id: number;
  name: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
  description?: string;
  license?: { name: string };
};

export type ReposState = {
  repos: Repo[];
  loading: boolean;
  error: string | null;
  selectedRepo: Repo | null;
};

const initialState: ReposState = {
  repos: [],
  loading: false,
  error: null,
  selectedRepo: null,
};

export const fetchRepos = createAsyncThunk("repos/fetchRepos", async (searchTerm: string) => {
  const response = await axios.get(`https://api.github.com/search/repositories?q=${searchTerm}`);
  return response.data.items as Repo[];
});

const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    selectRepo(state, action) {
      state.selectedRepo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.loading = false;
        state.repos = action.payload;
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch repositories";
      });
  },
});

export const { selectRepo } = reposSlice.actions;
export default reposSlice.reducer;
