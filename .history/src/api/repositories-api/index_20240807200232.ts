import {r}

import { REPOSITORIES_ROUTES } from "./routes";

export const fetchPublicRepositories = async () => {
  const response = await fetch(`${import.meta.env.GITHUB_API_REPOSITORIES_BASE_URL}${REPOSITORIES_ROUTES}`);

  if (!response.ok) {
    throw new Error("Failed to fetch public repositories");
  }

  return await response.json();
};
