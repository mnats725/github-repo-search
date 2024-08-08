import React, { useState } from "react";
import { Box, TextField, MenuItem, Select, InputLabel, FormControl, Button } from "@mui/material";
import { RepositoryQueryParams } from "@api/repositories-api/repositories/types";

type FiltersProps = {
  onApplyFilters: (filters: RepositoryQueryParams) => void;
};

const Filters: React.FC<FiltersProps> = ({ onApplyFilters }) => {
  const [language, setLanguage] = useState<string>("");
  const [sort, setSort] = useState<"stargazers_count" | "forks_count" | "updated_at">("stargazers_count");
  const [direction, setDirection] = useState<"asc" | "desc">("desc");

  const handleApplyFilters = () => {
    onApplyFilters({
      language,
      sort,
      direction,
    });
  };

  return (
    <Box sx={{ padding: 2 }}>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
        <InputLabel>Язык</InputLabel>
        <Select value={language} onChange={(e) => setLanguage(e.target.value)} label="Язык">
          <MenuItem value="">Все</MenuItem>
          <MenuItem value="JavaScript">JavaScript</MenuItem>
          <MenuItem value="TypeScript">TypeScript</MenuItem>
          <MenuItem value="Python">Python</MenuItem>
          <MenuItem value="Java">Java</MenuItem>
          <MenuItem value="Ruby">Ruby</MenuItem>
          {/* Добавьте другие языки по мере необходимости */}
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
        <InputLabel>Сортировка по</InputLabel>
        <Select value={sort} onChange={(e) => setSort(e.target.value)} label="Сортировка по">
          <MenuItem value="stargazers_count">Число звезд</MenuItem>
          <MenuItem value="forks_count">Число форков</MenuItem>
          <MenuItem value="updated_at">Дата обновления</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined">
        <InputLabel>Направление</InputLabel>
        <Select value={direction} onChange={(e) => setDirection(e.target.value)} label="Направление">
          <MenuItem value="asc">По возрастанию</MenuItem>
          <MenuItem value="desc">По убыванию</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={handleApplyFilters}>
          Применить фильтры
        </Button>
      </Box>
    </Box>
  );
};

export default Filters;
