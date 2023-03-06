import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from ".";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <section>
      {isSidebarOpen && <Sidebar />}

      <div className={`${isSidebarOpen && "ml-[260px]"}`}>
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
