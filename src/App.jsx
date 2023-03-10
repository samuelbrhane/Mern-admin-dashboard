import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout, Loader } from "./components";
import {
  Admins,
  Breakdown,
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
import { salesRoute } from "./utils/api";
import { useDispatch } from "react-redux";

import { GET_SALES } from "./redux/slice/saleSlice";

function App() {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  useEffect(() => {
    // get sales data from api
    const getData = async () => {
      const sales = await axios.get(salesRoute);
      dispatch(GET_SALES(sales.data));
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) return <Loader main={true} />;

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
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admins" element={<Admins />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
