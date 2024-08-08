import { repositoryClient } from "../repository-client";

import { REPOSITORIES_ROUTES } from "../routes";

import type { RepositoryQueryParams, RepositoryResponse } from "./types";

export const getPublicRepositories = async (params: RepositoryQueryParams): Promise<RepositoryResponse> => {
  const { data } = await repositoryClient.get<RepositoryResponse>(REPOSITORIES_ROUTES.repositories, {
    params: {
      q: params.query,
      page: params.page,
      per_page: params.perPage,
    },
  });

  return data;
};
