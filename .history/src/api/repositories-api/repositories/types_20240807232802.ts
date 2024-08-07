export type Repository = {
  // Уникальный идентификатор.
  id: number;
  // Название репозитория.
  name: string;

  language: string;  // Язык программирования.

  forks_count: number;  // Количество форков.

  stargazers_count: number; // Количество звезд.

  updated_at: string; // Дата последнего обновления в формате ISO 8601.

  description: string; // Описание репозитория.
  // Лицензия.
  license: {
    name: string; // Название лицензии.
  };
};

export type RepositoryQueryParams = {
  milestone?: string; // Этап (milestone) задачи.
  state?: "open" | "closed" | "all"; // Состояние задачи: "open", "closed" или "all".
  assignee?: string; // Назначенный пользователь.
  creator?: string; // Создатель задачи.
  mentioned?: string; // Упомянутый пользователь.
  labels?: string; // Метки, разделенные запятой.
  sort?: "created" | "updated" | "comments"; // Поле для сортировки: "created", "updated" или "comments".
  direction?: "asc" | "desc"; // Направление сортировки: "asc" или "desc".
  since?: string; // Время последнего обновления в формате ISO 8601.
  per_page?: number; // Количество результатов на страницу (макс 100).
  page?: number; // Номер страницы.
};
