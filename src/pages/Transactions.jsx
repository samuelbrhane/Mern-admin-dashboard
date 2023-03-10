import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Loader, Title } from "../components";
import { useSelector } from "react-redux";
import { selectMode } from "../redux/slice/modeSlice";
import axios from "axios";
import { transactionsRoute } from "../utils/api";

const Transactions = () => {
  const mode = useSelector(selectMode);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const transactions = await axios.get(transactionsRoute);
      setTransactions(transactions.data);
      setLoading(false);
    };
    fetchData();
  }, []);

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
      <Title title="Transactions" subtitle="List of transactions" />
      <Box
        height="78vh"
        mt="10px"
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
    </section>
  );
};

export default Transactions;
