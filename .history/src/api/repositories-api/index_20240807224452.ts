import { repositoryClient } from "./repository-client";

import { REPOSITORIES_ROUTES } from "./routes";

export const fetchPublicRepositories = async () => {
  try {
    const response = await repositoryClient.get(REPOSITORIES_ROUTES.repositories);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch public repositories", error);
    throw new Error("Failed to fetch public repositories");
  }
};

export const getPublicRepositories = async (): Promise<> => {
  const { data } = await repositoryClient.get<Lesson[]>(`${REPOSITORIES_ROUTES.repositories}/${courseUuid}`);

  return;
};
