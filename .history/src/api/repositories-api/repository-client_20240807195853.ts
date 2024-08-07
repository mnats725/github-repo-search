import { REPOSITORIES_ROUTES } from "./routes";

export const fetchRepositoriesFromApi = async (searchTerm: string) => {
  const response = await fetch(`${import.meta.env.GITHUB_API_REPOSITORIES_BASE_URL}${REPOSITORIES_ROUTES}`);

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const data = await response.json();
  return data.items;
};

export const fetchPublicRepositories = async () => {
  const response = await fetch(`${import.meta.env.GITHUB_API_REPOSITORIES_BASE_URL}${REPOSITORIES_ROUTES}`;

  if (!response.ok) {
    throw new Error("Failed to fetch public repositories");
  }

  return await response.json();
};
