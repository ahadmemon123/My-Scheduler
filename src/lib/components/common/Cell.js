import { Box, alpha, useTheme } from "@mui/material";
import React from "react";
import useStore from "../../hooks/useStore";

const Cell = ({ children }) => {
  const {
    state: { currentDragged },
  } = useStore();
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100%",
        ":hover": {
          "& .addBtn": {
            scale: "1 !important",
          },
        },
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (currentDragged) {
          e.currentTarget.style.backgroundColor = alpha(
            theme.palette.secondary.main,
            0.3
          );
        }
      }}
      onDragLeave={(e) => {
        if (currentDragged) {
          e.currentTarget.style.backgroundColor = "";
        }
      }}
    >
      {children}
    </Box>
  );
};

export default Cell;
