import React from "react";
import useStore from "../../hooks/useStore";
import { Box, Grid } from "@mui/material";
import CellWarpper from "../../ui/CellWarpper/CellWarpper";
import ResourceBox from "../../ui/ResourceBox/ResourceBox";
import ResourceInfoWrapper from "../../ui/ResourceInfoWrapper/ResourceInfoWrapper";
import EventRender from "../event/EventRender";

const WithResources = ({ renderChildren }) => {
  const {
    state: { resources },
    dispatch,
  } = useStore();

  return (
    <>
      {resources.map((eachResource, index) => {
        return (
          <Grid key={index} container sx={{ flexWrap: "nowrap"}}>
            <ResourceInfoWrapper>
              <ResourceBox resource={eachResource} />
            </ResourceInfoWrapper>
              {renderChildren(eachResource, index)}
          </Grid>
        );
      })}
    </>
  );
};

export default WithResources;
