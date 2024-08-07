import React, { useState } from "react";

import { Table } from "@components/lib/table";

import type { Repository } from "@api/repositories-api/repositories/types";

import type { MouseEvent, ChangeEvent } from "react";

const mockData = [
  {
    id: 1,
    name: "Repo 1",
    language: "JavaScript",
    forks_count: 20,
    stargazers_count: 50,
    updated_at: "2024-01-01T12:00:00Z",
    description: "This is repository 1",
    license: { name: "MIT" },
  },
  {
    id: 2,
    name: "Repo 2",
    language: "TypeScript",
    forks_count: 10,
    stargazers_count: 25,
    updated_at: "2024-01-02T12:00:00Z",
    description: "This is repository 2",
    license: { name: "Apache 2.0" },
  },
  {
    id: 3,
    name: "Repo 3",
    language: "Python",
    forks_count: 15,
    stargazers_count: 40,
    updated_at: "2024-01-03T12:00:00Z",
    description: "This is repository 3",
    license: { name: "GPL" },
  },
  {
    id: 4,
    name: "Repo 4",
    language: "Go",
    forks_count: 30,
    stargazers_count: 60,
    updated_at: "2024-01-04T12:00:00Z",
    description: "This is repository 4",
    license: { name: "MIT" },
  },
  {
    id: 5,
    name: "Repo 5",
    language: "Java",
    forks_count: 25,
    stargazers_count: 55,
    updated_at: "2024-01-05T12:00:00Z",
    description: "This is repository 5",
    license: { name: "Apache 2.0" },
  },
  {
    id: 6,
    name: "Repo 6",
    language: "C++",
    forks_count: 12,
    stargazers_count: 30,
    updated_at: "2024-01-06T12:00:00Z",
    description: "This is repository 6",
    license: { name: "GPL" },
  },
  {
    id: 7,
    name: "Repo 7",
    language: "C#",
    forks_count: 18,
    stargazers_count: 45,
    updated_at: "2024-01-07T12:00:00Z",
    description: "This is repository 7",
    license: { name: "MIT" },
  },
  {
    id: 8,
    name: "Repo 8",
    language: "Ruby",
    forks_count: 22,
    stargazers_count: 35,
    updated_at: "2024-01-08T12:00:00Z",
    description: "This is repository 8",
    license: { name: "Apache 2.0" },
  },
  {
    id: 9,
    name: "Repo 9",
    language: "Swift",
    forks_count: 28,
    stargazers_count: 50,
    updated_at: "2024-01-09T12:00:00Z",
    description: "This is repository 9",
    license: { name: "GPL" },
  },
  {
    id: 10,
    name: "Repo 10",
    language: "Kotlin",
    forks_count: 17,
    stargazers_count: 40,
    updated_at: "2024-01-10T12:00:00Z",
    description: "This is repository 10",
    license: { name: "MIT" },
  },
  {
    id: 11,
    name: "Repo 11",
    language: "Dart",
    forks_count: 20,
    stargazers_count: 55,
    updated_at: "2024-01-11T12:00:00Z",
    description: "This is repository 11",
    license: { name: "Apache 2.0" },
  },
  {
    id: 12,
    name: "Repo 12",
    language: "Perl",
    forks_count: 14,
    stargazers_count: 25,
    updated_at: "2024-01-12T12:00:00Z",
    description: "This is repository 12",
    license: { name: "GPL" },
  },
  {
    id: 13,
    name: "Repo 13",
    language: "Scala",
    forks_count: 27,
    stargazers_count: 65,
    updated_at: "2024-01-13T12:00:00Z",
    description: "This is repository 13",
    license: { name: "MIT" },
  },
  {
    id: 14,
    name: "Repo 14",
    language: "Rust",
    forks_count: 19,
    stargazers_count: 42,
    updated_at: "2024-01-14T12:00:00Z",
    description: "This is repository 14",
    license: { name: "Apache 2.0" },
  },
  {
    id: 15,
    name: "Repo 15",
    language: "Elixir",
    forks_count: 21,
    stargazers_count: 48,
    updated_at: "2024-01-15T12:00:00Z",
    description: "This is repository 15",
    license: { name: "GPL" },
  },
];

export const RepositoryTable = () => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof Repository>("stargazers_count");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleRequestSort = (property: keyof Repository) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (id: number) => {
    setSelectedRow(selectedRow === id ? null : id);
  };

  return (
    <Table
      rows={mockData}
      order={order}
      orderBy={orderBy}
      page={page}
      rowsPerPage={rowsPerPage}
      selectedRow={selectedRow}
      onRequestSort={handleRequestSort}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      onRowClick={handleRowClick}
    />
  );
};
