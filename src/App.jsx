import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components";
import { Customers, Dashboard, Products } from "./pages";
import { selectMode } from "./redux/slice/modeSlice";
import axios from "axios";
import { customersRoute, productsRoute } from "./utils/api";
import { useDispatch } from "react-redux";
import { GET_PRODUCTS, GET_CUSTOMERS } from "./redux/slice/clientSlice";

function App() {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  useEffect(() => {
    // get data from api
    const getData = async () => {
      const products = await axios.get(productsRoute);
      const customers = await axios.get(customersRoute);
      dispatch(GET_PRODUCTS(products.data));
      dispatch(GET_CUSTOMERS(customers.data));
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) return;

  return (
    <div className={`${mode === "dark" ? "text-[#ecf3e4]" : "text-[#384d21]"}`}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
