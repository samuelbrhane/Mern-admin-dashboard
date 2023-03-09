import React from "react";

const DataCard = ({ title, value, icon, time, change, mode }) => {
  return (
    <div className="flex justify-center text-sm">
      <div
        className={`px-2 lg:p-4 ${
          mode === "dark" ? "bg-[#114a5d]" : "bg-[#f8fbfc]"
        } shadow w-full`}
      >
        <div className="flex justify-between gap-8">
          <p>{title}</p>
          <div className="text-[#b4ce4d]">{icon}</div>
        </div>
        <p className="my-3  text-lg text-[#92df39]">{value}</p>
        <div className="flex justify-between gap-8">
          <p className="text-[#b4ce4d]">+{change}%</p>
          <p className="text-[10px] whitespace-normal text-gray-400">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
