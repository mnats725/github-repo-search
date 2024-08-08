import React from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Paper,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { ConditionalRender } from "../conditional-render";

import type { MouseEvent, ChangeEvent } from "react";

type Repository = {
  id: number;
  name: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
  description: string;
  license: { name: string };
};

type TableProps = {
  rows: Repository[];
  order: "asc" | "desc";
  orderBy: keyof Repository;
  page: number;
  rowsPerPage: number;
  selectedRow: number | null;
  onRequestSort: (property: keyof Repository) => void;
  onChangePage: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
  onRowClick: (id: number) => void;
};

export const Table: React.FC<TableProps> = ({
  rows,
  order,
  orderBy,
  page,
  rowsPerPage,
  selectedRow,
  onRequestSort,
  onChangePage,
  onChangeRowsPerPage,
  onRowClick,
}) => {
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

  const sortedRows = [...rows].sort(getComparator(order, orderBy));

  const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper>
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : "asc"}
                  onClick={() => onRequestSort("name")}
                >
                  Название
                  {orderBy === "name" ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc" ? "sorted descending" : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
              <TableCell>Язык</TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "forks_count"}
                  direction={orderBy === "forks_count" ? order : "asc"}
                  onClick={() => onRequestSort("forks_count")}
                >
                  Число форков
                  {orderBy === "forks_count" ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc" ? "sorted descending" : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "stargazers_count"}
                  direction={orderBy === "stargazers_count" ? order : "asc"}
                  onClick={() => onRequestSort("stargazers_count")}
                >
                  Число звёзд
                  {orderBy === "stargazers_count" ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc" ? "sorted descending" : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "updated_at"}
                  direction={orderBy === "updated_at" ? order : "asc"}
                  onClick={() => onRequestSort("updated_at")}
                >
                  Дата обновления
                  {orderBy === "updated_at" ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc" ? "sorted descending" : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <React.Fragment key={row.id}>
                <TableRow hover onClick={() => onRowClick(row.id)}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.language}</TableCell>
                  <TableCell>{row.forks_count}</TableCell>
                  <TableCell>{row.stargazers_count}</TableCell>
                  <TableCell>{new Date(row.updated_at).toLocaleDateString()}</TableCell>
                </TableRow>
                {selectedRow === row.id && (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <Collapse in={selectedRow === row.id}>
                        <Box padding={2}>
                          <Typography variant="h6">{row.name}</Typography>
                          <Typography>Description: {row.description}</Typography>
                          <Typography>License: {row.license.name}</Typography>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onChangePage}
        onRowsPerPageChange={onChangeRowsPerPage}
      />
    </Paper>
  );
};
