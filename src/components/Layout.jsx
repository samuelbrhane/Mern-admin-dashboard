import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { MainSidebar, MenuSidebar, Navbar } from ".";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <section>
      <MainSidebar />

      {/* small screen */}
      <MenuSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className={"md:ml-[270px]"}>
        <Navbar setShowSidebar={setShowSidebar} />
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
