import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react" 

const PUBLISHABLE_KEY: string | undefined = process.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const Layout = () => {

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
    >
      <header>
        <p>An app implemented with Hugo React Netlify Clerk auth and esbuild</p>
        <ul>
          <li>
            <Link to="/events">Event Overview</Link>
          </li>
          <li>
            <Link to="/events/dashboard">EventsList</Link>
          </li>
          <SignedIn>
            <li>
              <UserButton afterSignOutUrl="/events" />
            </li>
          </SignedIn>
          <SignedOut>
            <li>
              <Link to="/events/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/events/sign-up">Sign Up</Link>
            </li>
          </SignedOut>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  );
};

export default Layout;
