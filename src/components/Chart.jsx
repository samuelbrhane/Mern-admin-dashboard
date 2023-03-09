import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useSelector } from "react-redux";
import { selectMode } from "../redux/slice/modeSlice";

const Chart = ({ view, totalSales }) => {
  const mode = useSelector(selectMode);
  const monthlyData = totalSales[0].monthlyData;
  const totalSalesData = [
    {
      id: "sales",
      color: "red",
    },
  ];

  const totalUnitsData = [
    {
      id: "units",
      color: "red",
    },
  ];

  // get sales and units data
  let salesData = [];
  let unitsData = [];
  Object.values(monthlyData).reduce(
    (acc, { month, totalSales, totalUnits }) => {
      const currentSales = acc.sales + totalSales;
      const currentUnits = acc.units + totalUnits;

      salesData.push({ x: month, y: currentSales });
      unitsData.push({ x: month, y: currentUnits });

      return {
        sales: currentSales,
        units: currentUnits,
      };
    },
    { sales: 0, units: 0 }
  );

  totalSalesData[0].data = salesData;
  totalUnitsData[0].data = unitsData;

  return (
    <section
      className={`mt-4 w-full h-[68vh] ${
        mode === "dark" ? "bg-[#114a5d]" : "bg-[#f8fbfc]"
      } shadow`}
    >
      <ResponsiveLine
        data={view === "units" ? totalUnitsData : totalSalesData}
        margin={{ top: 20, right: 40, bottom: 70, left: 60 }}
        xScale={{ type: "point" }}
        theme={{
          textColor: mode === "dark" ? "#fff" : "#000",
        }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: (value) => `${value.slice(0, 3)}`,
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -40,
        }}
        colors={{ scheme: "accent" }}
        lineWidth={1}
        pointSize={5}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[]}
      />
    </section>
  );
};

export default Chart;
