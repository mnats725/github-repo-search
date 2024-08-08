import { Drawer, Box, Typography } from "@mui/material";

import { ConditionalRender } from "@components/lib/conditional-render";

import type { FC } from "react";
import type { Repository } from "@api/repositories-api/repositories/types";

type RepositoryDetailsProps = {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  selectedRepo: Repository | null;
};

export const TableDetails: FC<RepositoryDetailsProps> = ({ drawerOpen, setDrawerOpen, selectedRepo }) => {
  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      sx={{ width: 400, flexShrink: 0, "& .MuiDrawer-paper": { width: 400 } }}
    >
      <Box sx={{ padding: 2 }}>
        <ConditionalRender conditions={[!!selectedRepo]}>
          <>
            <Typography variant="h6">{selectedRepo?.name}</Typography>
            <Typography>Description: {selectedRepo?.description}</Typography>
            <Typography>License: {selectedRepo?.license.name}</Typography>
            <Typography>Language: {selectedRepo?.language}</Typography>
            <Typography>Forks: {selectedRepo?.forks_count}</Typography>
            <Typography>Stars: {selectedRepo?.stargazers_count}</Typography>
            <Typography>
              Last Updated:
              <ConditionalRender conditions={[!!selectedRepo?.updated_at]}>
                {new Date(selectedRepo?.updated_at || "").toLocaleDateString()}
              </ConditionalRender>
              <ConditionalRender conditions={[!selectedRepo?.updated_at]}>N/A</ConditionalRender>
            </Typography>
          </>
        </ConditionalRender>
      </Box>
    </Drawer>
  );
};
