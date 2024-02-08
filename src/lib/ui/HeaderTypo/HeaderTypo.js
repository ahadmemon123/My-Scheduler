import { Box, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const HeaderTypo = ({ date, view }) => {
  const isActive = false;

  const getDateFormateByView = (view) => {
    switch (view) {
      case "week":
        return "";
      case "month":
        return "";
      default:
        return "ddd";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
        px:1
      }}
    >
      <Typography
        style={{
          fontWeight: isActive ? "bold" : "inherit",
        }}
        color={isActive ? "primary" : "inherit"}
      >
        {moment(date).format("h a")}
      </Typography>
      {/* <Typography
        color={isActive ? "primary" : "inherit"}
        style={{
          fontWeight: isActive ? "bold" : "inherit",
          fontSize: 11,
        }}
      >
        {moment(date).format("ddd")}
      </Typography> */}
    </Box>
  );
};

export default HeaderTypo;
