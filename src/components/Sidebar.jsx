import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  return (
    <div className="w-[250px] absolute top-0 left-0 bottom-0 py-3 px-4">
      Sidebar
    </div>
  );
};

export default Sidebar;
