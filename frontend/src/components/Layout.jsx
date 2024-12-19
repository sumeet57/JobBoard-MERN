import React, { useState } from "react";
import Header from "./Header";
import Aside from "./Aside";
import Jobs from "./Jobs";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="w-full h-full flex pt-20 text-white">
        <Aside />
        <Jobs />
      </main>
    </>
  );
};

export default Layout;
