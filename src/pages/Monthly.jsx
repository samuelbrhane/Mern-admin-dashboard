import React, { useState } from "react";
import { TimelyChart, Title } from "../components";
import { useSelector } from "react-redux";
import { selectMode } from "../redux/slice/modeSlice";
import { selectTotalSales } from "../redux/slice/saleSlice";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Monthly = () => {
  const mode = useSelector(selectMode);
  const totalSales = useSelector(selectTotalSales);
  const monthlyData = totalSales[0].monthlyData;
  const [view, setView] = useState("units");
  console.log("monthlyData", monthlyData);

  const monthlySalesData = {
    id: "sales",
    color: "red",
  };

  const monthlyUnitsData = {
    id: "units",
    color: "red",
  };

  // get sales and units data
  let salesData = [];
  let unitsData = [];
  monthlyData.forEach((data) => {
    const { month, totalSales, totalUnits } = data;
    salesData.push({
      x: month.slice(0, 3),
      y: totalSales,
    });
    unitsData.push({
      x: month.slice(0, 3),
      y: totalUnits,
    });
  });

  monthlySalesData.data = salesData;
  monthlyUnitsData.data = unitsData;
  const saleData = [monthlySalesData];
  const unitData = [monthlyUnitsData];

  return (
    <section className="px-2 md:px-3 lg:px-5 mt-4 mb-6">
      <Title title="Daily" subtitle="Chart of daily sales." />

      <div className="mt-4">
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

export default Monthly;
