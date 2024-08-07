import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_API_REPOSITORIES_BASE_URL;

export const repoClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
