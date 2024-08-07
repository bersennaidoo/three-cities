import React, { useState } from "react";
import { events } from "./components/EventsList/events.js";
import EventsList from "./components/EventsList/EventsList.tsx";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";

function App() {
  return (
    <div className="pt-5 mt-5">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <EventsList events={events} />
      </SignedIn>
    </div>
  );
}

export default App;
