import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components";
import { Dashboard, Products } from "./pages";
import { selectMode } from "./redux/slice/modeSlice";
import axios from "axios";
import { productsRoute } from "./utils/api";
import { useDispatch } from "react-redux";
import { GET_PRODUCTS } from "./redux/slice/productSlice";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);
  const [loading, setLoading] = useState(true);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(productsRoute);
      dispatch(GET_PRODUCTS(data));
      setLoading(false);
    };
    getProducts();
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
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
