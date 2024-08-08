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

  const getComparator = (order: "asc" | "desc", orderBy: keyof Repository) => {
    return (a: Repository, b: Repository) => {
      if (typeof a[orderBy] === "string" && typeof b[orderBy] === "string") {
        return order === "asc" ? a[orderBy].localeCompare(b[orderBy]) : b[orderBy].localeCompare(a[orderBy]);
      }

      if (typeof a[orderBy] === "number" && typeof b[orderBy] === "number") {
        return order === "asc" ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy];
      }

      if (orderBy === "updated_at") {
        const dateA = new Date(a[orderBy]).getTime();
        const dateB = new Date(b[orderBy]).getTime();
        return order === "asc" ? dateA - dateB : dateB - dateA;
      }

      return 0;
    };
  };

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
                  <TableCell sx={{ fontSize: "18px" }}>{row.name || "N/A"}</TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>{row.language || "N/A"}</TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>{row.forks_count || "N/A"}</TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>{row.stargazers_count || "N/A"}</TableCell>
                  <TableCell sx={{ fontSize: "18px" }}>
                    {row.updated_at ? new Date(row.updated_at).toLocaleDateString() : "N/A"}
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
