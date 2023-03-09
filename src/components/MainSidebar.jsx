import React from "react";
import { useSelector } from "react-redux";
import { selectMode } from "../redux/slice/modeSlice";
import { Sidebar } from ".";

const MainSidebar = () => {
  const mode = useSelector(selectMode);
  return (
    <div
      className={` w-[250px] fixed top-0 left-0 bottom-0 hidden  py-3 z-20 shadow-md md:flex flex-col justify-between ${
        mode === "dark" ? "bg-[#114a5d]" : "bg-[#f8fbfc]"
      }`}
    >
      <Sidebar />
    </div>
  );
};

export default MainSidebar;
