import { repositoryClient } from "../repository-client";

import { REPOSITORIES_ROUTES } from "../routes";

export const getPublicRepositories = async (): Promise<Repository[]> => {
  const { data } = await repositoryClient.get<Repository[]>(REPOSITORIES_ROUTES.repositories);
  return data;
};

export const getPublicRepositories = async (): Promise<> => {
  const { data } = await repositoryClient.get<Lesson[]>(`${REPOSITORIES_ROUTES.repositories}/`);

  return;
};
