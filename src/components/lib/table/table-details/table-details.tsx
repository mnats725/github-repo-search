import { Drawer, Box, Typography, Paper, Grid, IconButton } from "@mui/material";
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
          Repository Details
        </Typography>
      </Box>
      <ConditionalRender conditions={[!!selectedRepo]}>
        <Box sx={{ marginTop: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
            <Grid item xs={8}>
              <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "22px" }}>
                Name: {selectedRepo?.name || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "right" }}>
              <Typography variant="subtitle1" sx={{ fontSize: "16px", color: "#ffab00" }}>
                ⭐ {selectedRepo?.stargazers_count ?? "N/A"}
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
              <strong>Description:</strong> {selectedRepo?.description || "N/A"}
            </Typography>
            <Paper elevation={3} sx={{ padding: 2, marginTop: 2, backgroundColor: "#f5f5f5" }}>
              <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                <strong>License:</strong> {selectedRepo?.license?.name || "N/A"}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                <strong>Language:</strong> {selectedRepo?.language || "N/A"}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                <strong>Forks:</strong> {selectedRepo?.forks_count ?? "N/A"}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "500" }} gutterBottom>
                <strong>Last Updated:</strong>
                {selectedRepo?.updated_at ? new Date(selectedRepo.updated_at).toLocaleDateString() : "N/A"}
              </Typography>
            </Paper>
          </Box>
        </Box>
      </ConditionalRender>
    </Box>
  </Drawer>
);
