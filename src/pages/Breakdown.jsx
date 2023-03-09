import React from "react";
import { useSelector } from "react-redux";
import { Title } from "../components";
import { selectTotalSales } from "../redux/slice/saleSlice";
import { ResponsivePie } from "@nivo/pie";
import { selectMode } from "../redux/slice/modeSlice";

const Breakdown = () => {
  const mode = useSelector(selectMode);
  const totalSales = useSelector(selectTotalSales);

  //   pie chart category colors
  const colors = ["#69C3F0", "#F347D9", "#A1EC3E", "#E7A644"];

  // format data for pie chart
  const formattedData = Object.entries(totalSales[0].salesByCategory).map(
    ([category, sales], index) => ({
      id: category,
      label: category,
      value: sales,
      color: colors[index],
    })
  );

  return (
    <section className="px-2 md:px-3 lg:px-5 mt-4 mb-6">
      <Title title="Breakdown" subtitle="Total monthly sales by category." />
      <div className="w-full h-[75vh]">
        <ResponsivePie
          data={formattedData}
          colors={{ datum: "data.color" }}
          margin={{ top: 40, right: 75, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          //    enableArcLinkLabels={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={mode === "dark" ? "#fff" : "#000"}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    symbolSize: 20,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Breakdown;
