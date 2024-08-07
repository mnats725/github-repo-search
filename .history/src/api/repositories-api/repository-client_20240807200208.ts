import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_API_REPOSITORIES_BASE_URL;

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
