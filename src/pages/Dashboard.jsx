import React, { useEffect, useState } from "react";
import { Title, DataCard, Chart, PieChart, Loader } from "../components";
import { useSelector } from "react-redux";
import { selectTotalSales } from "../redux/slice/saleSlice";
import { FaUsers, FaVoteYea } from "react-icons/fa";
import { MdOutlineChangeCircle, MdPointOfSale } from "react-icons/md";
import { DataGrid } from "@mui/x-data-grid";
import { selectMode } from "../redux/slice/modeSlice";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { transactionsRoute } from "../utils/api";

const Dashboard = () => {
  const [view, setView] = useState("units");
  const [loading, setLoading] = useState(true);
  const mode = useSelector(selectMode);
  const [transactions, setTransactions] = useState([]);
  const totalSales = useSelector(selectTotalSales);

  useEffect(() => {
    const fetchData = async () => {
      const transactions = await axios.get(transactionsRoute);
      setTransactions(transactions.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  let yearlySales = 0;
  totalSales[0].monthlyData.forEach((data) => {
    yearlySales += data.totalSales;
  });

  // dashboard data
  const dashboardMainData = [
    {
      title: "Total Customers",
      value: totalSales[0].totalCustomers,
      icon: <FaUsers />,
      time: "Since last month",
      change: 21,
    },
    {
      title: "Daily Sales",
      value: totalSales[0].dailyData[364].totalSales,
      icon: <MdPointOfSale />,
      time: "Since this morning",
      change: 12,
    },
    {
      title: "Monthly Sales",
      value: totalSales[0].monthlyData[11].totalSales,
      icon: <MdOutlineChangeCircle />,
      time: "Since last month",
      change: 18,
    },
    {
      title: "Yearly Sales",
      value: yearlySales,
      icon: <FaVoteYea />,
      time: "Since last year",
      change: 19,
    },
  ];

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

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  if (loading) return <Loader />;
  return (
    <section className="px-2 md:px-3 lg:px-5 mt-4 mb-6">
      <Title title="Dashboard" subtitle="Welcome to your dashboard." />

      <div className="flex flex-col gap-1">
        {/* Main Data */}
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-2 mt-3">
          <div className="grid grid-cols-2 gap-2 lg:gap-4 h-[44vh] xl:w-[40%] mb-3">
            {dashboardMainData.map((data, index) => (
              <DataCard key={index} {...data} mode={mode} />
            ))}
          </div>

          {/* Overview sales data */}
          <div className="xl:w-[60%] h-[42vh]">
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
            <Chart view={view} totalSales={totalSales} dashboard={true} />
          </div>
        </div>

        {/* Transactions and category sales */}
        <div className="flex flex-col xl:flex-row xl:gap-2">
          {/* Sales by category */}
          <div
            className={`h-[50vh] xl:w-[40%] p-3 ${
              mode === "dark" ? "bg-[#114a5d]" : "bg-[#f8fbfc]"
            } shadow mt-4`}
          >
            <p>Sales By Category</p>
            <PieChart formattedData={formattedData} mode={mode} />
          </div>

          {/* transactions */}
          <div className="xl:w-[60%] mt-4">
            <Box
              height="50vh"
              width="100%"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: mode === "dark" ? "#114a5d" : "#f8fbfc",
                  color: "#b4ce4d",
                  borderBottom: "none",
                  boxShadow: 1,
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderStyle: "dotted",
                  borderColor: "gray",
                },
                "& .MuiDataGrid-footerContainer": {
                  backgroundColor: mode === "dark" ? "#114a5d" : "#f8fbfc",
                  color: "#b4ce4d",
                  borderTop: "none",
                  boxShadow: 1,
                },
              }}
            >
              <DataGrid
                getRowId={(row) => row._id}
                rows={transactions || []}
                columns={columns}
                rowsPerPageOptions={[20, 50, 100]}
              />
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
