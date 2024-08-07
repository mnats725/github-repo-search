import React, { useState, MouseEvent, ChangeEvent } from "react";
import { Table } from "@components/lib/table"; // Импортируем ваш Table компонент

import type { Repository } from "@api/repositories-api/repositories/types";
import type { FC } from "react";

type RepositoryTableProps = {
  rows: Repository[];
};

export const RepositoryTable: FC<RepositoryTableProps> = ({ rows }) => {
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
      rows={rows}
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
