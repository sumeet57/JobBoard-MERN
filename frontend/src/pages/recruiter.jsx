import React from "react";
import { useLocation } from "react-router-dom";
import Landing_Page from "../components/Landing_Page";
import { Outlet } from "react-router-dom";
const Recruiter = () => {
  const pathname = useLocation().pathname;

  return <>{pathname === "/recruiter" ? <Landing_Page /> : <Outlet />}</>;
};

export default Recruiter;
