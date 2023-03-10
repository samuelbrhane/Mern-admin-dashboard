import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Loader, Title } from "../components";
import { Box } from "@mui/material";
import { selectMode } from "../redux/slice/modeSlice";
import axios from "axios";
import { adminsRoute } from "../utils/api";

const Admins = () => {
  const mode = useSelector(selectMode);
  const [loading, setLoading] = useState(true);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const admins = await axios.get(adminsRoute);
      setAdmins(admins.data);
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
      field: "name",
      headerName: "Name",
      flex: 0.8,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.5,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
    },
  ];

  if (loading) return <Loader />;
  return (
    <section className="px-2 md:px-3 lg:px-5 mt-4 mb-6">
      <Title title="Admins" subtitle="List of Admins." />

      <Box
        mt="10px"
        height="78vh"
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
          rows={admins || []}
          columns={columns}
          rowsPerPageOptions={[20, 50, 100]}
        />
      </Box>
    </section>
  );
};

export default Admins;
