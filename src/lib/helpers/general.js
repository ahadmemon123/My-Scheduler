import moment from "moment";

// Function to generate an array of moments representing each minute within the interval with steps
export const eachMinuteOfInterval = (start, end, step = 1) => {
  const minutes = [];
  let current = moment(start).startOf("minute");

  while (current.isSameOrBefore(end)) {
    minutes.push(current.clone());
    current.add(step, "minutes");
  }

  return minutes;
};

export const getResourcedEvents = (events, resource, resourceFields) => {
  const keyName = resourceFields?.idField;

  const recousedEvents = [];

  for (const event of events) {
    // Handle single select & multiple select accordingly
    const eventVal = event[keyName];

    const isThisResource = eventVal === resource[keyName];

    if (isThisResource) {
      recousedEvents.push({
        ...event,
        color: event.color || resource[resourceFields.colorField || ""],
      });
    }
  }

  return recousedEvents;
};

// export const calculatePositionAndWidth = (event) => {
//   const start = moment(event.start);
//   const end = moment(event.end);

//   const dayStart = moment(start).startOf("day");
//   const offsetMinutes = start.diff(dayStart, "minutes");

//   const left = `${(offsetMinutes / (24 * 60)) * 100}%`;
//   // const leftPx = (parseFloat(left) / 100) * containerWidth;

//   const durationMinutes = end.diff(start, "minutes");
//   const widthPercentage = (durationMinutes / (24 * 60)) * 100;
//   // const widthPx = (widthPercentage / 100) * containerWidth;

//   return {
//     left,
//     // width: { percentage: `${widthPercentage}%`, px: `${widthPx}px` },
//     width: `${widthPercentage}%`,
//     // leftPx,
//   };
// };

export const calculatePositionAndWidth = (event, containerWidth) => {
  const start = moment(event.start);
  const end = moment(event.end);

  // Ensure correct interpretation of start time by subtracting 1 hour
  start.subtract(1, 'hour');

  // Calculate the duration of the event in minutes
  const durationMinutes = end.diff(start, "minutes");

  // Calculate the start time of the event in percentage of a day
  const dayStart = moment(start).startOf("day");
  const offsetMinutes = start.diff(dayStart, "minutes");
  const left = `${(offsetMinutes / (24 * 60)) * 100}%`;

  // Calculate the width of the event in percentage of the container width
  const widthPercentage = (durationMinutes / (24 * 60)) * 100;

  return { left, width: `${widthPercentage}%` };
};


export const calculateEventPositionAndWidth = (event, totalHoursInDay) => {
  const { start, end } = event;

  // Convert start and end date-time to Date objects
  const startTime = new Date(start);
  const endTime = new Date(end);

  // Calculate the start and end times in hours relative to the day
  const startHour = startTime.getHours() - 1 + startTime.getMinutes() / 60;
  const endHour = endTime.getHours() + endTime.getMinutes() / 60;

  // Calculate the left position of the event
  const left = (startHour / totalHoursInDay) * 100;

  // Calculate the width of the event
  const width = ((endHour - startHour) / totalHoursInDay) * 100;

  return { left: `${left}%`, width: `${width}%` };
};
