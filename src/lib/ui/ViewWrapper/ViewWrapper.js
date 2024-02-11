import { Paper } from "@mui/material";
import React from "react";

const ViewWrapper = ({ children }) => {
  return <Paper sx={{ overflowX: "auto" }}>{children}</Paper>;
};

export default ViewWrapper;
