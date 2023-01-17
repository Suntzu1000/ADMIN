import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout/Layout"
import Dashboard from "./scenes/dashboard/Dashboard"

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Navigate to="dashboard" replace/>}/>
            <Route path="dashboard" element={<Dashboard/> }/>
          </Route>
        </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
