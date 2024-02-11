import { Box } from "@mui/material";
import React from "react";
import { calculatePositionAndWidth } from "../../helpers/general";

const EventPostionerManager = ({ children, event }) => {
  const { left, width } = calculatePositionAndWidth(event);
  return (
    <Box
      sx={{ position: "absolute", left, width: `calc(${width} - 5px)`, top: 3 }}
    >
      {children}
    </Box>
  );
};

export default EventPostionerManager;
