import React, { useState } from "react";
import { events } from "./components/EventsList/events.js";
import EventsList from "./components/EventsList/EventsList.tsx";

function App() {
  return (
    <div className="pt-5 mt-5">
      <EventsList events={events} />
    </div>
  )
}

export default App