import React from "react";
import Layout from "../components/Layout.jsx";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";

const Landing_Page = () => {
  const pathname = useLocation().pathname;
  console.log(pathname);
  return (
    <>
      <Header />
      {pathname === "/" ? <Layout /> : <Outlet />}
    </>
  );
};

export default Landing_Page;
