import React from "react";
import { useEffect, JSX } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = (): JSX.Element => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId && isLoaded) {
      navigate("/events/sign-in");
    }
  }, [userId, isLoaded]);

  if (isLoaded) {
    return <Outlet />;
  }

  return (
    <p>Not Signed In</p>
  )
};

export default Layout;