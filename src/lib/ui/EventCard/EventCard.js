import { Box, Typography } from "@mui/material";
import React from "react";
import { CELL_HEIGHT } from "../../constants";

const EventCard = () => {
  return (
    <Box
      sx={{
        border: 1,
        p: "2px 6px",
        height: CELL_HEIGHT,
        borderStyle: "dashed",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="subtitle2" style={{ fontSize: 12 }} noWrap>
        "Backend"
      </Typography>
      <Typography style={{ fontSize: 11 }} noWrap>
        9am - 2am
      </Typography>
    </Box>
  );
};

export default EventCard;
