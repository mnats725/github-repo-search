import { memo } from "react";
import { TableRow, TableCell } from "@mui/material";

import { formatDate } from "@lib/utils/format-date.util";

import type { FC } from "react";
import type { Repository } from "@api/repositories-api/repositories/types";

type TableItemRowProps = {
  row: Repository;
  onRowClick: (row: Repository) => void;
};

export const TableItemRow: FC<TableItemRowProps> = memo(({ row, onRowClick }) => (
  <TableRow hover key={row.id} onClick={() => onRowClick(row)}>
    <TableCell sx={{ fontSize: "18px" }}>{row.name || "Не указано"}</TableCell>
    <TableCell sx={{ fontSize: "18px" }}>{row.language || "Не указано"}</TableCell>
    <TableCell sx={{ fontSize: "18px" }}>{row.forks_count !== undefined ? row.forks_count : "Не указано"}</TableCell>
    <TableCell sx={{ fontSize: "18px" }}>
      {row.stargazers_count !== undefined ? row.stargazers_count : "Не указано"}
    </TableCell>
    <TableCell sx={{ fontSize: "18px" }}>
      {row.updated_at ? formatDate(new Date(row.updated_at)) : "Не указано"}
    </TableCell>
  </TableRow>
));
