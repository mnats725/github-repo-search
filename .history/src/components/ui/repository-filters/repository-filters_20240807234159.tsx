import React from "react";

import { Filters } from "@components/lib/filters";

import type { RepositoryQueryParams } from "@api/repositories-api/repositories/types";

const languageOptions = [
  { label: "Все", value: "" },
  { label: "JavaScript", value: "JavaScript" },
  { label: "TypeScript", value: "TypeScript" },
  { label: "Python", value: "Python" },
  { label: "Java", value: "Java" },
  { label: "Ruby", value: "Ruby" },
];

const sortOptions = [
  { label: "Число звезд", value: "stargazers_count" },
  { label: "Число форков", value: "forks_count" },
  { label: "Дата обновления", value: "updated_at" },
];

const directionOptions = [
  { label: "По возрастанию", value: "asc" },
  { label: "По убыванию", value: "desc" },
];

export const RepositoryFilters: React.FC<{ onApplyFilters: (filters: RepositoryQueryParams) => void }> = ({
  onApplyFilters,
}) => {
  const handleApplyFilters = (filters: { [key: string]: string }) => {
    onApplyFilters({
      language: filters.language,
      sort: filters.sort,
      direction: filters.direction,
    });
  };

  return (
    <Filters
      filterOptions={{
        Язык: languageOptions,
        "Сортировка по": sortOptions,
        Направление: directionOptions,
      }}
      defaultValues={{
        language: "",
        sort: "stargazers_count",
        direction: "desc",
      }}
      onApplyFilters={handleApplyFilters}
    />
  );
};
