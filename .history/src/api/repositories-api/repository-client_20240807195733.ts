// api.ts

export const fetchRepositoriesFromApi = async (searchTerm: string) => {
  const response = await fetch(`${import.meta.env.VITE_CES_API_HOST_URL}/search/repositories?q=${searchTerm}`);

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const data = await response.json();
  return data.items;
};

export const fetchPublicRepositories = async () => {
  const response = await fetch(GITHUB_PUBLIC_REPOSITORIES);

  if (!response.ok) {
    throw new Error("Failed to fetch public repositories");
  }

  return await response.json();
};