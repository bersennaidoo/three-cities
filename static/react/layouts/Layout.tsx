import { Link, Outlet, useNavigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

type TLayoutProps = {}

const Layout = (props: TLayoutProps) => {

    const navigate = useNavigate()

    return (
        <ClerkProvider 
          navigate={navigate}
          afterSignInUrl="/dashboard"
          afterSignUpUrl="/dashboard"
          publishableKey={process.env.VITE_CLERK_PUBLISHABLE_KEY}
    )
}