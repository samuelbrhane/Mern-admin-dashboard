import React from "react";
import { useSelector } from "react-redux";
import { selectMode } from "../redux/slice/modeSlice";
import { selectGeography } from "../redux/slice/clientSlice";
import { Title } from "../components";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "../utils/geoData";
import { Box } from "@mui/material";

const Geography = () => {
  const mode = useSelector(selectMode);
  const data = useSelector(selectGeography);

  return (
    <section className="px-2 md:px-3 lg:px-5 mt-4 mb-6">
      <Title title="Geography" subtitle="Map of users location." />

      <Box
        className={`mt-[10px] w-full h-[78vh] ${
          mode === "dark" ? "bg-[#114a5d]" : "bg-[#f8fbfc]"
        } shadow`}
      >
        {data && (
          <ResponsiveChoropleth
            data={data}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            colors="RdYlGn"
            domain={[0, 20]}
            unknownColor="#4E515C"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={140}
            projectionTranslation={[0.48, 0.48]}
            projectionRotation={[0, 0, 0]}
            borderColor="#67941E"
            borderWidth={0.4}
            legends={[
              {
                itemTextColor: mode === "dark" ? "#ffffff" : "#000000",
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 105,
                translateY: -10,
                itemsSpacing: 0,
                itemWidth: 92,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#585759",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        )}
      </Box>
    </section>
  );
};

export default Geography;
