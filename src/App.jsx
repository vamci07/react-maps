import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.scss";
import { myTheme } from "./theme";
import {
  StylesProvider,
  MuiThemeProvider,
  CssBaseline,
  useMediaQuery,
} from "@material-ui/core";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  let theme = React.useMemo(() => myTheme(prefersDarkMode ? "dark" : "light"), [
    prefersDarkMode,
  ]);

  const [currentTheme, setCurrentTheme] = useState("light");
  const [currentMap, setCurrentMap] = useState("google");

  const handleThemeChange = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  const handleMapsRendererChange = () => {
    setCurrentMap(currentMap === "google" ? "mapbox" : "google");
  };

  theme = React.useMemo(() => myTheme(currentTheme), [currentTheme]);
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Layout
            handleThemeChange={handleThemeChange}
            handleMapsRendererChange={handleMapsRendererChange}
          >
            <Landing currentTheme={currentTheme} currentMap={currentMap} />
          </Layout>
        </MuiThemeProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
