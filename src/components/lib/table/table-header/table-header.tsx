import { TableHead, TableRow, TableCell, TableSortLabel, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { ConditionalRender } from "@components/lib/conditional-render";

import type { FC } from "react";
import type { Repository } from "@api/repositories-api/repositories/types";

type RepositoryTableHeadProps = {
  order: "asc" | "desc";
  orderBy: keyof Repository;
  onRequestSort: (property: keyof Repository) => void;
};

export const TableHeader: FC<RepositoryTableHeadProps> = ({ order, orderBy, onRequestSort }) => {
  const createSortHandler = (property: keyof Repository) => () => {
    onRequestSort(property);
  };

  return (
    <TableHead sx={{ position: "sticky", top: 0, zIndex: 1, backgroundColor: "#f2f2f2" }}>
      <TableRow>
        <TableCell>
          <TableSortLabel
            active={orderBy === "name"}
            direction={orderBy === "name" ? order : "asc"}
            onClick={createSortHandler("name")}
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
            onClick={createSortHandler("forks_count")}
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
            onClick={createSortHandler("stargazers_count")}
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
            onClick={createSortHandler("updated_at")}
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
  );
};
