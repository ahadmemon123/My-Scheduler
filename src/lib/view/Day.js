import React from "react";
import useStore from "../hooks/useStore";
import { eachMinuteOfInterval } from "../helpers/general";
import moment from "moment";
import { Box, Grid } from "@mui/material";
import CellWarpper from "../ui/CellWarpper/CellWarpper";
import ResourceInfoWrapper from "../ui/ResourceInfoWrapper/ResourceInfoWrapper";
import WithResources from "../components/common/WithResources";
import HeaderTypo from "../ui/HeaderTypo/HeaderTypo";
import ViewWrapper from "../ui/ViewWrapper/ViewWrapper";

const Day = () => {
  const {
    state: {
      day: { startHour, endHour, step },
      view,
      selectedDate,
    },
    dispatch,
  } = useStore();

  const START_TIME = moment(selectedDate).startOf("day").add(startHour, "hour");
  const END_TIME = moment(selectedDate).startOf("day").add(endHour, "hour");

  const hoursArray = eachMinuteOfInterval(START_TIME, END_TIME, step);

  const renderCell = (eachResource) => {
    return hoursArray.map((eachDate, index) => {
      return <CellWarpper key={index} xs></CellWarpper>;
    });
  };

  return (
    <ViewWrapper>
      <Grid container>
        <Grid item xs={12} container sx={{ flexWrap: "nowrap" }}>
          <ResourceInfoWrapper />
          {hoursArray.map((eachDate, index) => {
            return (
              <CellWarpper key={index} xs>
                <HeaderTypo date={eachDate} view={view} />
              </CellWarpper>
            );
          })}
        </Grid>
        <Grid item xs={12}>
          <WithResources renderChildren={renderCell} />
        </Grid>
      </Grid>
    </ViewWrapper>
  );
};

export default Day;
