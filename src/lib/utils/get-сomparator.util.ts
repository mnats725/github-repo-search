import type { Repository } from "@api/repositories-api/repositories/types";

export const getComparator = (order: "asc" | "desc", orderBy: keyof Repository) => {
  return (a: Repository, b: Repository) => {
    // Сравнение строковых значений
    if (typeof a[orderBy] === "string" && typeof b[orderBy] === "string") {
      return order === "asc" ? a[orderBy].localeCompare(b[orderBy]) : b[orderBy].localeCompare(a[orderBy]);
    }

    // Сравнение числовых значений
    if (typeof a[orderBy] === "number" && typeof b[orderBy] === "number") {
      return order === "asc" ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy];
    }

    // Сравнение дат
    if (orderBy === "updated_at") {
      const dateA = new Date(a[orderBy]).getTime();
      const dateB = new Date(b[orderBy]).getTime();
      return order === "asc" ? dateA - dateB : dateB - dateA;
    }

    // Если не удалось определить тип для сортировки
    return 0;
  };
};
