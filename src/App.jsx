import { Scheduler } from "./lib";
import { EVENTS, RESOURCES } from "./data";
import FormModle from "./component/FormModle.jsx/FormModle";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
  const [openModle, setOpenModle] = useState(false);
  const [events, setEvents] = useState([]);
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Scheduler
        events={events}
        resources={RESOURCES}
        resourceFields={{
          idField: "admin_id",
          textField: "title",
          avatarField: "avatar",
          colorField: "color",
          subTextField: "subTxt",
        }}
        onCellClick={(data) => setOpenModle(data)}
      />

      <FormModle
        open={Boolean(openModle)}
        handleClose={() => setOpenModle(!openModle)}
        data={openModle}
        onEventCreate={(data) => setEvents([...events, data])}
      />
    </LocalizationProvider>
  );
}

export default App;
