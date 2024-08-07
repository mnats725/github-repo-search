import { REPOSITORIES_ROUTES } from "./routes";
import axios from "axios";
export const fetchPublicRepositories = async () => {
  const response = await fetch(`${import.meta.env.GITHUB_API_REPOSITORIES_BASE_URL}${REPOSITORIES_ROUTES}`);

  if (!response.ok) {
    throw new Error("Failed to fetch public repositories");
  }

  return await response.json();
};
const apiClient = axios.create({
  baseURL: import.meta.env.GITHUB_API_REPOSITORIES_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
