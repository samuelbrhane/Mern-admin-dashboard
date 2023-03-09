import { ResponsiveLine } from "@nivo/line";
import React from "react";

const TimelyChart = ({ unitData, saleData, view, mode }) => {
  return (
    <ResponsiveLine
      data={view === "units" ? unitData : saleData}
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
        legend: "Day",
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
  );
};

export default TimelyChart;
