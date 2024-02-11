import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, ButtonBase } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import useStore from "../../hooks/useStore";

export const PlusBtn = ({ date, resource }) => {
  const {
    state: { onCellClick },
  } = useStore();

  return (
    <Box
      sx={{
        height: "calc(100% - 10px)",
        p: "5px",
        scale: 0,
        transition: "0.2s",
      }}
      className="addBtn"
      onClick={() => onCellClick({ date: date, resource })}
    >
      <ButtonBase
        sx={{
          height: "100%",
          border: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          color: grey[500],
          borderRadius: 1,
        }}
      >
        <AddCircleOutlineIcon />
      </ButtonBase>
    </Box>
  );
};
