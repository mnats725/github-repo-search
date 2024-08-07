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

export const getPublicRepositories = async (courseUuid: string): Promise<LessonModules> => {
  const { data } = await cesClient.get<Lesson[]>(`${CES_ROUTES.lessons}/${courseUuid}`);

  return groupLessonsByModule(data);
};
