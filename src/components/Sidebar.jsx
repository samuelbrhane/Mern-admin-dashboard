import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { selectMode } from "../redux/slice/modeSlice";
import { useSelector } from "react-redux";
import { AiFillHome, AiOutlineRight, AiFillCalendar } from "react-icons/ai";
import { BsFillCartFill, BsGeoFill, BsCalendarMonth } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaChartPie } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { CgPerformance } from "react-icons/cg";
import { AiOutlineTransaction } from "react-icons/ai";
import { GiOverInfinity } from "react-icons/gi";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const mode = useSelector(selectMode);
  const { pathname } = useLocation();
  const [active, setActive] = useState("");

  const client = [
    {
      icon: <BsFillCartFill />,
      name: "Products",
      link: "/products",
    },
    {
      icon: <HiUsers />,
      name: "Customers",
      link: "/customers",
    },
    {
      icon: <AiOutlineTransaction />,
      name: "Transactions",
      link: "/transactions",
    },
    {
      icon: <BsGeoFill />,
      name: "Geography",
      link: "/geography",
    },
  ];

  const sales = [
    {
      icon: <GiOverInfinity />,
      name: "Overview",
      link: "/overview",
    },
    {
      icon: <AiFillCalendar />,
      name: "Daily",
      link: "/daily",
    },
    {
      icon: <BsCalendarMonth />,
      name: "Monthly",
      link: "/monthly",
    },
    {
      icon: <FaChartPie />,
      name: "Breakdown",
      link: "/breakdown",
    },
  ];

  const management = [
    {
      icon: <RiAdminFill />,
      name: "Admin",
      link: "/admin",
    },
    {
      icon: <CgPerformance />,
      name: "Performance",
      link: "/performance",
    },
  ];

  // change active with pathname
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <div
      className={`w-[250px] absolute top-0 left-0 bottom-0 py-3 shadow-md ${
        mode === "dark" ? "bg-[#114a5d]" : "bg-[#f8fbfc]"
      }`}
    >
      <h1 className="text-center text-xl uppercase text-[#92df39] font-bold mb-3 border-b-2 border-gray-400 pb-1">
        Office
      </h1>

      {/* Dashboard */}
      <div className="flex items-center justify-between bg-[#92df39] py-1 px-6">
        <AiFillHome />
        <h1>Dashboard</h1>
        <AiOutlineRight />
      </div>

      {/* client */}
      <div>
        <h1 className="mt-4 mb-2 pl-6">Client</h1>
        <div>
          {client?.map((item, index) => (
            <SidebarLink key={index} {...item} />
          ))}
        </div>
      </div>

      {/* sales */}
      <div>
        <h1 className="mt-4 mb-2 pl-6">Sales</h1>
        <div>
          {sales?.map((item, index) => (
            <SidebarLink key={index} {...item} />
          ))}
        </div>
      </div>

      {/* management */}
      <div>
        <h1 className="mt-4 mb-2 pl-6">Management</h1>
        <div>
          {management?.map((item, index) => (
            <SidebarLink key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
