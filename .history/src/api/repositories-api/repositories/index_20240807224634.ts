import { repositoryClient } from "../repository-client";

import { REPOSITORIES_ROUTES } from "../routes";

export const getPublicRepositories = async (): Promise<Repository[]> => {
  try {
    const { data } = await repositoryClient.get<Repository[]>(REPOSITORIES_ROUTES.repositories);
    return data;
  } catch (error) {
    console.error("Failed to fetch public repositories", error);
    throw new Error("Failed to fetch public repositories");
  }
};

export const getPublicRepositories = async (): Promise<> => {
  const { data } = await repositoryClient.get<Lesson[]>(`${REPOSITORIES_ROUTES.repositories}/`);

  return;
};
