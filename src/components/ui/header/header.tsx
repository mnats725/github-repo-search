import { useState } from "react";
import { AppBar, Toolbar, InputBase, Button, Box, Typography } from "@mui/material";

type HeaderProps = {
  onSearch: (query: string) => void;
};

export const Header = ({ onSearch }: HeaderProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <AppBar position="static" sx={{ position: "sticky", top: 0, zIndex: 1 }}>
      <Toolbar
        sx={{
          padding: "16px",
          justifyContent: "start",
          alignItems: "center",
          backgroundColor: "#00838f",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <InputBase
            placeholder="Введите поисковый запрос"
            sx={{
              height: "42px",
              width: "912px",
              paddingLeft: "16px",
              fontSize: "16px",
              borderRadius: "4px",
              backgroundColor: "#ffffff",
            }}
            inputProps={{ "aria-label": "search" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              color: "#ffffff",
              width: "130px",
              height: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            onClick={handleSearch}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}> Искать🔍</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
