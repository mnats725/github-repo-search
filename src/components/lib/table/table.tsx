import React, { useState } from "react";
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
  Box,
  Typography,
  Drawer,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { ConditionalRender } from "../conditional-render";

import type { MouseEvent, ChangeEvent, FC } from "react";

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
  onRequestSort: (property: keyof Repository) => void;
  onChangePage: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
  onRowClick: (id: number) => void;
};

export const Table: FC<TableProps> = ({
  rows,
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
    <Paper sx={{ display: "flex" }}>
      <Box sx={{ flex: 1, overflow: "auto" }}>
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
                    <ConditionalRender conditions={[orderBy === "name"]}>
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </Box>
                    </ConditionalRender>
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
                    <ConditionalRender conditions={[orderBy === "forks_count"]}>
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </Box>
                    </ConditionalRender>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "stargazers_count"}
                    direction={orderBy === "stargazers_count" ? order : "asc"}
                    onClick={() => onRequestSort("stargazers_count")}
                  >
                    Число звёзд
                    <ConditionalRender conditions={[orderBy === "stargazers_count"]}>
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </Box>
                    </ConditionalRender>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "updated_at"}
                    direction={orderBy === "updated_at" ? order : "asc"}
                    onClick={() => onRequestSort("updated_at")}
                  >
                    Дата обновления
                    <ConditionalRender conditions={[orderBy === "updated_at"]}>
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </Box>
                    </ConditionalRender>
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow hover key={row.id} onClick={() => handleRowClick(row)}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.language}</TableCell>
                  <TableCell>{row.forks_count}</TableCell>
                  <TableCell>{row.stargazers_count}</TableCell>
                  <TableCell>{new Date(row.updated_at).toLocaleDateString()}</TableCell>
                </TableRow>
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
      </Box>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ width: 400, flexShrink: 0, "& .MuiDrawer-paper": { width: 400 } }}
      >
        <Box sx={{ padding: 2 }}>
          <ConditionalRender conditions={[!!selectedRepo]}>
            <>
              <Typography variant="h6">{selectedRepo?.name}</Typography>
              <Typography>Description: {selectedRepo?.description}</Typography>
              <Typography>License: {selectedRepo?.license.name}</Typography>
              <Typography>Language: {selectedRepo?.language}</Typography>
              <Typography>Forks: {selectedRepo?.forks_count}</Typography>
              <Typography>Stars: {selectedRepo?.stargazers_count}</Typography>
              <Typography>
                Last Updated:
                <ConditionalRender conditions={[!!selectedRepo?.updated_at]}>
                  {new Date(selectedRepo?.updated_at || "").toLocaleDateString()}
                </ConditionalRender>
                <ConditionalRender conditions={[!selectedRepo?.updated_at]}>N/A</ConditionalRender>
              </Typography>
            </>
          </ConditionalRender>
        </Box>
      </Drawer>
    </Paper>
  );
};
