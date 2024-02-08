import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Scheduler } from "./lib";
import { EVENTS, RESOURCES } from "./data";

function App() {
  return (
    <>
      <Scheduler
        events={EVENTS}
        resources={RESOURCES}
        resourceFields={{
          idField: "admin_id",
          textField: "title",
          avatarField: "avatar",
          colorField: "color",
          subTextField: "subTxt",
        }}
      />
    </>
  );
}

export default App;
