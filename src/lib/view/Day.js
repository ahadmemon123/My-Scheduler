import React, { useEffect } from "react";
import useStore from "../hooks/useStore";
import { eachMinuteOfInterval, getResourcedEvents } from "../helpers/general";
import moment from "moment";
import { Box, Grid } from "@mui/material";
import CellWarpper from "../ui/CellWarpper/CellWarpper";
import ResourceInfoWrapper from "../ui/ResourceInfoWrapper/ResourceInfoWrapper";
import WithResources from "../components/common/WithResources";
import HeaderTypo from "../ui/HeaderTypo/HeaderTypo";
import ViewWrapper from "../ui/ViewWrapper/ViewWrapper";
import Cell from "../components/common/Cell";
import { PlusBtn } from "../ui/PlusBtn/PlusBtn";
import EventRender from "../components/event/EventRender";

const Day = () => {
  const {
    state: {
      day: { startHour, endHour, step },
      view,
      selectedDate,
      events,
      resources,
      resourceFields,
    },
    dispatch,
  } = useStore();

  const START_TIME = moment(selectedDate).startOf("day").add(startHour, "hour");
  const END_TIME = moment(selectedDate).startOf("day").add(endHour, "hour");

  const hoursArray = eachMinuteOfInterval(START_TIME, END_TIME, step);

  const renderCell = (eachResource) => {
    const resourceEvent = getResourcedEvents(
      events,
      eachResource,
      resourceFields
    );

    return (
      <Grid
        container
        ontainer
        sx={{ position: "relative", flexWrap: "nowrap" }}
      >
        <EventRender events={resourceEvent} />
        {hoursArray.map((eachDate, index) => {
          return (
            <CellWarpper key={index} xs>
              <Cell
                children={<PlusBtn date={eachDate} resource={eachResource} />}
              />
            </CellWarpper>
          );
        })}
      </Grid>
    );
  };

  return (
    <ViewWrapper>
      <Grid container>
        <Grid item xs={12} container sx={{ flexWrap: "nowrap" }}>
          <Grid
            container
            item
            sx={{ position: "relative", flexWrap: "nowrap" }}
          >
            <ResourceInfoWrapper />
            {hoursArray.map((eachDate, index) => {
              return (
                <CellWarpper key={index} xs>
                  <HeaderTypo date={eachDate} view={view} />
                </CellWarpper>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <WithResources renderChildren={renderCell} />
        </Grid>
      </Grid>
    </ViewWrapper>
  );
};

export default Day;
