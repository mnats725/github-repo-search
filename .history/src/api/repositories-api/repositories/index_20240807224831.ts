import { repositoryClient } from "../repository-client";

import { REPOSITORIES_ROUTES } from "../routes";

import type {}

export const getPublicRepositories = async (): Promise<Repository[]> => {
  const { data } = await repositoryClient.get<Repository[]>(REPOSITORIES_ROUTES.repositories);
  return data;
};
