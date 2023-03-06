import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from ".";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <section>
      <div className="hidden md:inline">
        <Sidebar />
      </div>

      {/* small screen */}
      <div
        className={`md:hidden absolute top-0 duration-1000 ease-in-out ${
          showSidebar ? "left-0" : "left-[-999px]"
        } bottom-0 `}
      >
        <Sidebar closeIcon={true} setShowSidebar={setShowSidebar} />
      </div>

      <div className={"md:ml-[270px]"}>
        <Navbar setShowSidebar={setShowSidebar} />
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
