import { Drawer, Box, Typography, Paper, Grid, IconButton, Link } from "@mui/material";
import { ConditionalRender } from "@components/lib/conditional-render";
import type { FC } from "react";
import type { Repository } from "@api/repositories-api/repositories/types";

type RepositoryDetailsProps = {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  selectedRepo: Repository | null;
};

export const TableDetails: FC<RepositoryDetailsProps> = ({ drawerOpen, setDrawerOpen, selectedRepo }) => (
  <Drawer
    anchor="right"
    open={drawerOpen}
    onClose={() => setDrawerOpen(false)}
    sx={{ width: 450, flexShrink: 0, "& .MuiDrawer-paper": { width: 450, backgroundColor: "#f2f2f2" } }}
  >
    <Box sx={{ padding: 2, position: "relative" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row-reverse" }}
      >
        <IconButton onClick={() => setDrawerOpen(false)}>❌</IconButton>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "20px", marginBottom: 1, mt: 1 }}>
          Информация о репозитории
        </Typography>
      </Box>
      <ConditionalRender conditions={[!!selectedRepo]}>
        <Box sx={{ marginTop: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "22px" }}>
                Название: {selectedRepo?.name || "Не указано"}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: "16px" }}>
                Полное название: {selectedRepo?.full_name || "Не указано"}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "16px", color: selectedRepo?.private ? "#f44336" : "#4caf50" }}
              >
                {selectedRepo?.private ? "Приватный" : "Публичный"}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                <strong>Описание:</strong> {selectedRepo?.description || "Не указано"}
              </Typography>
              <Paper elevation={3} sx={{ padding: 2, marginTop: 2, backgroundColor: "#f5f5f5" }}>
                <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                  <strong>Лицензия: </strong>
                  {selectedRepo?.license?.name ? `${selectedRepo.license.name} ✅` : "Не указана"}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                  <strong>Язык: </strong>
                  <span style={{ color: "#007bff" }}>{selectedRepo?.language || "Не указан"}</span>
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                  <strong>Звёзды:</strong> {selectedRepo?.stargazers_count ?? "Не указано"} ⭐
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                  <strong>Форки:</strong> {selectedRepo?.forks_count ?? "Не указано"}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                  <strong>Наблюдатели:</strong> {selectedRepo?.watchers_count ?? "Не указано"}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                  <strong>Дата создания: </strong>
                  {selectedRepo?.created_at ? new Date(selectedRepo.created_at).toLocaleDateString() : "Не указана"}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                  <strong>Дата обновления: </strong>
                  {selectedRepo?.updated_at ? new Date(selectedRepo.updated_at).toLocaleDateString() : "Не указана"}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                  <strong>Последнее изменение: </strong>
                  {selectedRepo?.pushed_at ? new Date(selectedRepo.pushed_at).toLocaleDateString() : "Не указана"}
                </Typography>
              </Paper>
              <Paper elevation={3} sx={{ padding: 2, marginTop: 2, backgroundColor: "#f5f5f5" }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "16px", color: "#007bff", display: "flex", alignItems: "center" }}
                >
                  <strong>URL:</strong>
                  <Link
                    href={selectedRepo?.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      marginLeft: 1,
                      display: "inline-block",
                      maxWidth: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      color: "#007bff",
                      textDecoration: "none",
                      fontSize: "16px",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {selectedRepo?.html_url}
                  </Link>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </ConditionalRender>
    </Box>
  </Drawer>
);
