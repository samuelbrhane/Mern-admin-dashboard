import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimelyChart, Title } from "../components";
import { useSelector } from "react-redux";
import { selectMode } from "../redux/slice/modeSlice";
import { selectTotalSales } from "../redux/slice/saleSlice";
import { ResponsiveLine } from "@nivo/line";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Daily = () => {
  const mode = useSelector(selectMode);
  const totalSales = useSelector(selectTotalSales);
  const dailyData = totalSales[0].dailyData;
  const [view, setView] = useState("units");
  const [startDate, setStartDate] = useState(new Date("2021/01/01"));
  const [endDate, setEndDate] = useState(new Date("2021/01/16"));

  const dailySalesData = {
    id: "sales",
    color: "red",
  };

  const dailyUnitsData = {
    id: "units",
    color: "red",
  };

  // get sales and units data
  let salesData = [];
  let unitsData = [];
  dailyData.forEach((data) => {
    const { date, totalSales, totalUnits } = data;
    const dateFormatted = new Date(date);
    if (dateFormatted >= startDate && dateFormatted <= endDate) {
      const splitDate = date.split("-");
      salesData.push({
        x: splitDate[2],
        y: totalSales,
      });
      unitsData.push({
        x: splitDate[2],
        y: totalUnits,
      });
    }
  });

  dailySalesData.data = salesData;
  dailyUnitsData.data = unitsData;
  const saleData = [dailySalesData];
  const unitData = [dailyUnitsData];

  return (
    <section className="px-2 md:px-3 lg:px-5 mt-4 mb-6">
      <div className="flex justify-between ">
        <Title title="Daily" subtitle="Chart of daily sales." />
        <div className=" flex justify-end flex-col">
          <div className="flex justify-start">
            <p className="w-16">From:</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className={`${
                mode === "dark" ? "bg-[#114a5d]" : "bg-[#f8fbfc]"
              } shadow mb-2 px-2 py-1 rounded`}
            />
          </div>

          <div className="flex justify-between">
            <p className="w-16">To:</p>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className={`${
                mode === "dark" ? "bg-[#114a5d]" : "bg-[#f8fbfc]"
              } shadow px-2 py-1 rounded`}
            />
          </div>
        </div>
      </div>

      <div className="mt-1">
        {/* View Section */}
        <FormControl>
          <InputLabel>View</InputLabel>
          <Select
            label="view"
            value={view}
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="units">Units</MenuItem>
            <MenuItem value="sales">Sales</MenuItem>
          </Select>
        </FormControl>

        {/* Chart container */}
        <div
          className={`w-full mt-3 h-[68vh] ${
            mode === "dark" ? "bg-[#114a5d]" : "bg-[#f8fbfc]"
          } shadow`}
        >
          {/* Chart */}
          <TimelyChart
            unitData={unitData}
            saleData={saleData}
            view={view}
            mode={mode}
          />
        </div>
      </div>
    </section>
  );
};

export default Daily;
