import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_API_REPOSITORIES_BASE_URL;

export const reposClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
