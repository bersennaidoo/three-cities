import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/default-layout";
import Index from "./routes/index";
import SignIn from "./routes/sign-in";
import SignUp from "./routes/sign-up";
import DashboardLayout from "./layouts/dashboard-layout";
import Dashboard from "./routes/dashboard";
import { events } from "./components/EventsList/events.js";
import EventsList from "./components/EventsList/EventsList.tsx";

const routes = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: "/events", element: <Index /> },
      { path: "/events/sign-in", element: <SignIn /> },
      { path: "/events/sign-up", element: <SignUp /> },
      {
        element: <DashboardLayout />,
        children: [{ path: "/events/dashboard", element: <EventsList events={events} /> }],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);