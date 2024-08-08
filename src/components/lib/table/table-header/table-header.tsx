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
        <TableCell sx={{ fontWeight: "bold", fontSize: "18px" }}>
          <TableSortLabel
            active={orderBy === "name"}
            direction={orderBy === "name" ? order : "asc"}
            onClick={createSortHandler("name")}
            sx={{ fontWeight: "bold", fontSize: "18px" }}
          >
            Название
            <ConditionalRender conditions={[orderBy === "name"]}>
              <Box component="span" sx={visuallyHidden}>
                {order === "desc" ? "sorted descending" : "sorted ascending"}
              </Box>
            </ConditionalRender>
          </TableSortLabel>
        </TableCell>
        <TableCell sx={{ fontWeight: "bold", fontSize: "18px" }}>Язык</TableCell>
        <TableCell sx={{ fontWeight: "bold", fontSize: "18px" }}>
          <TableSortLabel
            active={orderBy === "forks_count"}
            direction={orderBy === "forks_count" ? order : "asc"}
            onClick={createSortHandler("forks_count")}
            sx={{ fontWeight: "bold", fontSize: "18px" }}
          >
            Число форков
            <ConditionalRender conditions={[orderBy === "forks_count"]}>
              <Box component="span" sx={visuallyHidden}>
                {order === "desc" ? "sorted descending" : "sorted ascending"}
              </Box>
            </ConditionalRender>
          </TableSortLabel>
        </TableCell>
        <TableCell sx={{ fontWeight: "bold", fontSize: "18px" }}>
          <TableSortLabel
            active={orderBy === "stargazers_count"}
            direction={orderBy === "stargazers_count" ? order : "asc"}
            onClick={createSortHandler("stargazers_count")}
            sx={{ fontWeight: "bold", fontSize: "18px" }}
          >
            Число звёзд
            <ConditionalRender conditions={[orderBy === "stargazers_count"]}>
              <Box component="span" sx={visuallyHidden}>
                {order === "desc" ? "sorted descending" : "sorted ascending"}
              </Box>
            </ConditionalRender>
          </TableSortLabel>
        </TableCell>
        <TableCell sx={{ fontWeight: "bold", fontSize: "18px" }}>
          <TableSortLabel
            active={orderBy === "updated_at"}
            direction={orderBy === "updated_at" ? order : "asc"}
            onClick={createSortHandler("updated_at")}
            sx={{ fontWeight: "bold", fontSize: "18px" }}
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
