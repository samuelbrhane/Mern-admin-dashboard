import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Title } from "../components";
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
        <PieChart formattedData={formattedData} mode={mode} />
      </div>
    </section>
  );
};

export default Breakdown;
