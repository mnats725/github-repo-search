export type Repository = {
  id: number; // Уникальный идентификатор.
  name: string; // Название репозитория.
  full_name: string; // Полное имя репозитория.
  private: boolean; // Приватный ли репозиторий.
  html_url: string; // URL страницы репозитория на GitHub.
  description: string | null; // Описание репозитория.
  language: string | null; // Язык программирования.
  forks_count: number; // Количество форков.
  stargazers_count: number; // Количество звезд.
  watchers_count: number; // Количество наблюдателей.
  open_issues_count: number; // Количество открытых проблем.
  created_at: string; // Дата создания в формате ISO 8601.
  updated_at: string; // Дата последнего обновления в формате ISO 8601.
  pushed_at: string; // Дата последнего коммита в формате ISO 8601.
  default_branch: string; // Имя основной ветки.
  license: {
    name: string; // Название лицензии.
  };
  topics: string[]; // Темы, связанные с репозиторием.
};

export type RepositoryResponse = {
  items: Repository[];
};

export type RepositoryQueryParams = {
  query?: string; // Этап (milestone) задачи.
  state?: "open" | "closed" | "all"; // Состояние задачи: "open", "closed" или "all".
  assignee?: string; // Назначенный пользователь.
  creator?: string; // Создатель задачи.
  mentioned?: string; // Упомянутый пользователь.
  labels?: string; // Метки, разделенные запятой.
  sort?: "created" | "updated" | "comments"; // Поле для сортировки: "created", "updated" или "comments".
  direction?: "asc" | "desc"; // Направление сортировки: "asc" или "desc".
  since?: string; // Время последнего обновления в формате ISO 8601.
  perPage?: number; // Количество результатов на страницу (макс 100).
  page?: number; // Номер страницы.
};
