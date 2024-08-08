import { Drawer, Box, Typography, Paper, Grid } from "@mui/material";

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
    sx={{ width: 400, flexShrink: 0, "& .MuiDrawer-paper": { width: 450, backgroundColor: "#f2f2f2" } }}
  >
    <Box sx={{ padding: 2 }}>
      <ConditionalRender conditions={[!!selectedRepo]}>
        <>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h6">{selectedRepo?.name || "N/A"}</Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "right" }}>
              <Typography variant="subtitle1">⭐ {selectedRepo?.stargazers_count ?? "N/A"}</Typography>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1" gutterBottom>
              <strong>Description:</strong> {selectedRepo?.description || "N/A"}
            </Typography>
            <Paper elevation={3} sx={{ padding: 2, marginTop: 2, backgroundColor: "#f5f5f5" }}>
              <Typography variant="body1" gutterBottom>
                <strong>License:</strong> {selectedRepo?.license?.name || "N/A"}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Language:</strong> {selectedRepo?.language || "N/A"}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Forks:</strong> {selectedRepo?.forks_count ?? "N/A"}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Last Updated:</strong>
                {selectedRepo?.updated_at ? new Date(selectedRepo.updated_at).toLocaleDateString() : "N/A"}
              </Typography>
            </Paper>
          </Box>
        </>
      </ConditionalRender>
    </Box>
  </Drawer>
);
