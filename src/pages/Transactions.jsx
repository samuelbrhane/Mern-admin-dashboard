import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { transactionRoute } from "../utils/api";
import { Title } from "../components";
import { useSelector } from "react-redux";
import { selectMode } from "../redux/slice/modeSlice";

const Transactions = () => {
  // values to be sent to the backend
  const mode = useSelector(selectMode);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [totalTransactions, setTotalTransactions] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data } = await axios.get(transactionRoute, {
        params: {
          page: page,
          pageSize: pageSize,
          sort: sort,
          search: search,
        },
      });
      setTransactions(data.transactions);
      setTotalTransactions(data.totalTransactions);
    };
    fetchTransactions();
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

  return (
    <section className="px-2 md:px-3 lg:px-5 mt-4 mb-6">
      <Title title="Transactions" subtitle="List of transactions" />
      <Box
        height="80vh"
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
          rowCount={(totalTransactions && totalTransactions) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
        />
      </Box>
    </section>
  );
};

export default Transactions;
