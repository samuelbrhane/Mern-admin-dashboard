import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ name, link, icon }) => {
  return (
    <div className="px-6 py-1 mb-1">
      <Link className="flex items-center gap-10" to={link}>
        {icon}
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default SidebarLink;
