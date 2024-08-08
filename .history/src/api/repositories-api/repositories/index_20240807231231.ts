import { repositoryClient } from "../repository-client";

import { REPOSITORIES_ROUTES } from "../routes";

import type { Repository, RepositoryQueryParams } from "./types";

export const getPublicRepositories = async (params: RepositoryQueryParams): Promise<Repository[]> => {
  const { data } = await repositoryClient.get<Repository[]>(REPOSITORIES_ROUTES.repositories, { params });
  return data;
};
