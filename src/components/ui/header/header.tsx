import { useState } from "react";
import { AppBar, Toolbar, InputBase, Button, Box } from "@mui/material";

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
              width: "105px",
              height: "42px",
            }}
            onClick={handleSearch}
          >
            Искать
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
