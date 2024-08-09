import { useState } from "react";
import {
  Table as MuiTable,
  TableBody,
  TableContainer,
  TablePagination,
  Paper,
  Box,
  TableRow,
  TableCell,
} from "@mui/material";

import { TableHeader } from "./table-header";
import { TableDetails } from "./table-details";

import { getComparator } from "@lib/utils/get-сomparator.util";
import { formatDate } from "@lib/utils/format-date.util";

import type { Repository } from "@api/repositories-api/repositories/types";
import type { MouseEvent, ChangeEvent, FC } from "react";

type TableProps = {
  rows: Repository[];
  order: "asc" | "desc";
  orderBy: keyof Repository;
  page: number;
  rowsPerPage: number;
  onRequestSort: (property: keyof Repository) => void;
  onChangePage: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
  onRowClick: (id: number) => void;
};

export const Table: FC<TableProps> = ({
  rows = [],
  order,
  orderBy,
  page,
  rowsPerPage,
  onRequestSort,
  onChangePage,
  onChangeRowsPerPage,
  onRowClick,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

  const handleRowClick = (repo: Repository) => {
    setSelectedRepo(repo);
    setDrawerOpen(true);
    onRowClick(repo.id);
  };

  const sortedRows = [...rows].sort(getComparator(order, orderBy));

  const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper sx={{ display: "flex", flexDirection: "column", height: "92vh" }}>
      <Box sx={{ flex: 1, overflow: "hidden" }}>
        <TableContainer
          component={Paper}
          sx={{ height: "86vh", overflowY: "auto", display: "flex", justifyContent: "space-between" }}
        >
          <MuiTable>
            <TableHeader order={order} orderBy={orderBy} onRequestSort={onRequestSort} />
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow hover key={row.id} onClick={() => handleRowClick(row)}>
                  <TableCell sx={{ fontSize: "18px" }}>{row.name || "Не указано"}</TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>{row.language || "Не указано"}</TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>
                    {row.forks_count !== undefined ? row.forks_count : "Не указано"}
                  </TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>
                    {row.stargazers_count !== undefined ? row.stargazers_count : "Не указано"}
                  </TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>
                    {row.updated_at ? formatDate(new Date(row.updated_at)) : "Не указано"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 30]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
        />
      </Box>
      <TableDetails drawerOpen={drawerOpen} selectedRepo={selectedRepo} setDrawerOpen={setDrawerOpen} />
    </Paper>
  );
};
