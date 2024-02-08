import { Box } from "@mui/material";
import React from "react";
import CellWarpper from "../CellWarpper/CellWarpper";

const ResourceInfoWrapper = ({ children }) => {
  return <CellWarpper styles={{ minWidth: "200px" }}>{children}</CellWarpper>;
};

export default ResourceInfoWrapper;
