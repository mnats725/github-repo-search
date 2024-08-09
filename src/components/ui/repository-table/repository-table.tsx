import { useEffect, useState } from "react";

import { Table } from "@components/lib/table";

import type { Repository } from "@api/repositories-api/repositories/types";

import type { MouseEvent, ChangeEvent } from "react";

type RepositoryTableProps = {
  repositories: Repository[];
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
};

export const RepositoryTable = ({ repositories, onPageChange, onRowsPerPageChange }: RepositoryTableProps) => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof Repository>("stargazers_count");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [, setSelectedRow] = useState<number | null>(null);

  useEffect(() => {
    onPageChange(page);
  }, [page]);

  useEffect(() => {
    onRowsPerPageChange(rowsPerPage);
  }, [rowsPerPage]);

  const handleRequestSort = (property: keyof Repository) => {
    setOrder((prevOrder) => (orderBy === property && prevOrder === "asc" ? "desc" : "asc"));
    setOrderBy(property);
  };

  const handleChangePage = (_: MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const handleRowClick = (id: number) => {
    setSelectedRow((prevSelectedRow) => (prevSelectedRow === id ? null : id));
  };

  return (
    <Table
      rows={repositories}
      order={order}
      orderBy={orderBy}
      page={page}
      rowsPerPage={rowsPerPage}
      onRequestSort={handleRequestSort}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      onRowClick={handleRowClick}
    />
  );
};
