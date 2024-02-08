import React from "react";
import useStore from "../../hooks/useStore";
import { Grid } from "@mui/material";
import CellWarpper from "../../ui/CellWarpper/CellWarpper";
import ResourceBox from "../../ui/ResourceBox/ResourceBox";
import ResourceInfoWrapper from "../../ui/ResourceInfoWrapper/ResourceInfoWrapper";

const WithResources = ({ renderChildren }) => {
  const {
    state: { resources },
    dispatch,
  } = useStore();

  return (
    <div>
      {resources.map((eachResource, index) => {
        return (
          <Grid key={index} container sx={{ flexWrap: "nowrap" }}>
            <ResourceInfoWrapper>
              <ResourceBox resource={eachResource} />
            </ResourceInfoWrapper>
            {renderChildren(eachResource)}
          </Grid>
        );
      })}
    </div>
  );
};

export default WithResources;
