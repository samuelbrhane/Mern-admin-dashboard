import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <section>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
