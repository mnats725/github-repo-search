import { repositoryClient } from "./repository-client";

import { REPOSITORIES_ROUTES } from "./routes";

export const fetchPublicRepositories = async () => {
  try {
    const response = await apiClient.get(REPOSITORIES_ROUTES.repositories);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch public repositories", error);
    throw new Error("Failed to fetch public repositories");
  }
};
