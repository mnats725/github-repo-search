/**
 * Тип для репозитория.
 */
export type Repository = {
  /**
   * Уникальный идентификатор.
   */
  id: number;

  /**
   * Название репозитория.
   */
  name: string;

  /**
   * Язык программирования.
   */
  language: string;

  /**
   * Количество форков.
   */
  forks_count: number;

  /**
   * Количество звезд.
   */
  stargazers_count: number;

  /**
   * Дата последнего обновления в ISO 8601.
   */
  updated_at: string;

  /**
   * Описание репозитория.
   */
  description: string;

  /**
   * Лицензия.
   */
  license: {
    /**
     * Название лицензии.
     */
    name: string;
  };
};

/**
 * Параметры запроса к API репозиториев.
 */
export type RepositoryQueryParams = {
  /**
   * Этап (milestone), задачи.
   */
  milestone?: string;

  /**
   * Состояние задач: "open", "closed" или "all".
   */
  state?: "open" | "closed" | "all";

  /**
   * Назначенный пользователь.
   */
  assignee?: string;

  /**
   * Создатель задачи.
   */
  creator?: string;

  /**
   * Упомянутый пользователь.
   */
  mentioned?: string;

  /**
   * Метки, разделенные запятой.
   */
  labels?: string;

  /**
   * Поле для сортировки: "created", "updated" или "comments".
   */
  sort?: "created" | "updated" | "comments";

  /**
   * Направление сортировки: "asc" или "desc".
   */
  direction?: "asc" | "desc";

  /**
   * Время последнего обновления в формате ISO 8601.
   */
  since?: string;

  /**
   * Количество результатов на страницу (макс 100).
   */
  per_page?: number;

  /**
   * Номер страницы.
   */
  page?: number;
};
