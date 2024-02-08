import React from "react";
import ResourceInfoWrapper from "../ResourceInfoWrapper/ResourceInfoWrapper";
import { ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material";
import useStore from "../../hooks/useStore";

const ResourceBox = ({ resource }) => {
  const {
    state: { resourceFields },
    dispatch,
  } = useStore();

  const text = resource[resourceFields.textField];
  const subtext = resource[resourceFields.subTextField || ""];
  const avatar = resource[resourceFields.avatarField || ""];
  const color = resource[resourceFields.colorField || ""];
  return (
    <ListItem alignItems="flex-start" dense>
      <ListItemAvatar>
        <Avatar alt={avatar} />
      </ListItemAvatar>
      <ListItemText primary={text} secondary={subtext} />
    </ListItem>
  );
};

export default ResourceBox;
