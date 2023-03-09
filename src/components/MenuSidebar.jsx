import React from "react";
import { useSelector } from "react-redux";
import { selectMode } from "../redux/slice/modeSlice";
import { Sidebar } from ".";

const MenuSidebar = ({ showSidebar, setShowSidebar }) => {
  const mode = useSelector(selectMode);

  return (
    <div
      className={`w-[235px] fixed top-0 ${
        showSidebar ? "left-0" : "left-[-999px]"
      } bottom-0 md:hidden duration-1000 ease-in-out  py-3 z-20 shadow-md flex flex-col justify-between ${
        mode === "dark" ? "bg-[#114a5d]" : "bg-[#f8fbfc]"
      }`}
    >
      <Sidebar closeIcon={true} setShowSidebar={setShowSidebar} />
    </div>
  );
};

export default MenuSidebar;
