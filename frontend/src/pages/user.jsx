import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Landing_Page from "../components/Landing_Page.jsx";

const User = () => {
  const pathname = useLocation().pathname;

  return <>{pathname === "/user" ? <Landing_Page /> : <Outlet />}</>;
};

export default User;
