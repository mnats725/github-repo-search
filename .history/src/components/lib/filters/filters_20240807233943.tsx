import React, { useState } from "react";
import { Box, MenuItem, Select, InputLabel, FormControl, Button } from "@mui/material";

type FilterOption = {
  label: string;
  value: string;
};

type FiltersProps = {
  filterOptions: {
    [key: string]: FilterOption[];
  };
  defaultValues: {
    [key: string]: string;
  };
  onApplyFilters: (filters: { [key: string]: string }) => void;
};

const Filters: React.FC<FiltersProps> = ({ filterOptions, defaultValues, onApplyFilters }) => {
  const [filters, setFilters] = useState<{ [key: string]: string }>(defaultValues);

  const handleChange = (key: string) => (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilters({
      ...filters,
      [key]: event.target.value as string,
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <Box sx={{ padding: 2 }}>
      {Object.keys(filterOptions).map((key) => (
        <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }} key={key}>
          <InputLabel>{key}</InputLabel>
          <Select value={filters[key] || ""} onChange={handleChange(key)} label={key}>
            {filterOptions[key].map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}

      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={handleApplyFilters}>
          Применить фильтры
        </Button>
      </Box>
    </Box>
  );
};

export default Filters;
