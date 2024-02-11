import React from "react";
import useStore from "../../hooks/useStore";
import EventCard from "../../ui/EventCard/EventCard";
import { Box } from "@mui/material";
import EventPostionerManager from "./EventPostionerManager";
import EventDragManager from "./EventDragManager";

const EventRender = ({ events }) => {
  return (
    <>
      {events?.map((eachEvent, index) => {
        return (
          <EventPostionerManager event={eachEvent} key={eachEvent.eventId}>
            <EventDragManager event={eachEvent}>
              <EventCard />
            </EventDragManager>
          </EventPostionerManager>
        );
      })}
    </>
  );
};

export default EventRender;
