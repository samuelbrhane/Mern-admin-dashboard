import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ name, icon, active }) => {
  const link = name.toLowerCase();
  return (
    <div
      className={`px-6 py-1 mb-1 ${
        active === link &&
        "bg-[#92df39] !text-[#1b3d23] hover:bg-[#b8ea7f] hover:opacity-90"
      }`}
    >
      <Link className="flex items-center gap-10" to={`/${link}`}>
        {icon}
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default SidebarLink;
