import { repositoryClient } from "./repository-client";

import { REPOSITORIES_ROUTES } from "./routes";

export const fetchPublicRepositories = async () => {
  try {
    const response = await repositoryClient.get(REPOSITORIES_ROUTES.repositories);

    console.log("response", response);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch public repositories", error);
    throw new Error("Failed to fetch public repositories");
  }
};
