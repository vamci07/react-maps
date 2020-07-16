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
import TabContext from "@material-ui/lab/TabContext";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  let theme = React.useMemo(() => myTheme(prefersDarkMode ? "dark" : "light"), [
    prefersDarkMode,
  ]);

  const [currentTheme, setCurrentTheme] = useState("light");
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleThemeChange = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  theme = React.useMemo(() => myTheme(currentTheme), [currentTheme]);
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <TabContext value={currentTab}>
            <Layout
              currentTab={currentTab}
              handleThemeChange={handleThemeChange}
              handleTabChange={handleTabChange}
            >
              <Landing currentTheme={currentTheme} />
            </Layout>
          </TabContext>
        </MuiThemeProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
