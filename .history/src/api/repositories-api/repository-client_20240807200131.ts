
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.GITHUB_API_REPOSITORIES_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
