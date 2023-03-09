import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components";
import {
  Customers,
  Daily,
  Dashboard,
  Geography,
  Monthly,
  Overview,
  Products,
  Transactions,
} from "./pages";
import { selectMode } from "./redux/slice/modeSlice";
import axios from "axios";
import {
  customersRoute,
  geographyRoute,
  productsRoute,
  salesRoute,
  transactionsRoute,
} from "./utils/api";
import { useDispatch } from "react-redux";
import {
  GET_PRODUCTS,
  GET_CUSTOMERS,
  GET_TRANSACTIONS,
  GET_GEOGRAPHY,
} from "./redux/slice/clientSlice";
import { GET_SALES } from "./redux/slice/saleSlice";

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
      const transactions = await axios.get(transactionsRoute);
      const geography = await axios.get(geographyRoute);
      const sales = await axios.get(salesRoute);
      dispatch(GET_PRODUCTS(products.data));
      dispatch(GET_CUSTOMERS(customers.data));
      dispatch(GET_TRANSACTIONS(transactions.data));
      dispatch(GET_GEOGRAPHY(geography.data));
      dispatch(GET_SALES(sales.data));
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
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
