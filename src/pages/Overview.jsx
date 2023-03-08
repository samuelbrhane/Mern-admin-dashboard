import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Chart, Title } from "../components";
import { selectTotalSales } from "../redux/slice/saleSlice";

const Overview = () => {
  const totalSales = useSelector(selectTotalSales);
  const [view, setView] = useState("units");

  return (
    <section className="px-2 md:px-3 lg:px-5 mt-4 mb-6">
      <Title
        title="Overview"
        subtitle="Overview of general revenue and profit."
      />
      <div className="mt-4">
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
        <Chart view={view} totalSales={totalSales} />
      </div>
    </section>
  );
};

export default Overview;
