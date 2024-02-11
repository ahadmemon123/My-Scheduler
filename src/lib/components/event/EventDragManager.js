import { Box } from "@mui/material";
import React from "react";
import useStore from "../../hooks/useStore";

const EventDragManager = ({ children, event }) => {
  const {
    state: { currentDragged },
    dispatch,
  } = useStore();
  const handleDragStart = (e) => {
    e.stopPropagation();
    e.currentTarget.style.backgroundColor = "Red";
  };

  const handleDrag = (e) => {
    e.preventDefault();
    dispatch({
      type: "SETSTATE",
      payload: {
        name: "currentDragged",
        value: event,
      },
    });
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.backgroundColor = ""; // Reset background color
  };

  return (
    <Box
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
    >
      {children}
    </Box>
  );
};

export default EventDragManager;
