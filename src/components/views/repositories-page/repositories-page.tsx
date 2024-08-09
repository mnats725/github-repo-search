import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import { Header } from "@components/ui/header/header";
import { RepositoryTable } from "@components/ui/repository-table/repository-table";
import { ConditionalRender } from "@components/lib/conditional-render";

import { getRepositoriesThunk } from "@features/repositories/repositories-slice";

import { centerTextStyle } from "@styles/center-text-style";

import type { RootState, AppDispatch } from "@store/store";

export const RepositoriesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: repositories, status } = useSelector((state: RootState) => state.repositories);
  const [, setRowsPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(0);

  const onSearch = (query: string) => {
    if (query.trim()) {
      dispatch(getRepositoriesThunk({ query, page: currentPage + 1, perPage: 100 }));
    }
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onRowsPerPageChange = (rowsPerPage: number) => {
    setRowsPerPage(rowsPerPage);
  };

  return (
    <>
      <Header onSearch={onSearch} />
      <ConditionalRender conditions={[status === "loading"]}>
        <Box sx={centerTextStyle}>
          <Typography sx={{ fontSize: "24px" }}>Загрузка данных...</Typography>
        </Box>
      </ConditionalRender>
      <ConditionalRender conditions={[status === "idle" && repositories.length > 0]}>
        <RepositoryTable
          repositories={repositories}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </ConditionalRender>
      <ConditionalRender conditions={[status === "failed"]}>
        <Box sx={centerTextStyle}>
          <Typography sx={{ fontSize: "24px" }}>Данные не найдены</Typography>
        </Box>
      </ConditionalRender>
      <ConditionalRender conditions={[status === "idle" && repositories.length === 0]}>
        <Box sx={centerTextStyle}>
          <Typography sx={{ fontSize: "24px" }}>Добро пожаловать</Typography>
        </Box>
      </ConditionalRender>
    </>
  );
};
