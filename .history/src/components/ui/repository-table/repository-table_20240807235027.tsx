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
  // Добавьте больше данных по необходимости
];

type RepositoryTableProps = {
  rows: Repository[];
};

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
