import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, withStyles, Tabs, Tab } from "@material-ui/core";
import ThemeSwitch from "components/ThemeSwitch";
import { Github } from "@styled-icons/feather/Github";

const AppTitle = styled.h3`
  font-weight: 700;
`;

const Grow = styled.div`
  flex-grow: 1;
`;

const ToolbarControls = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: 4,
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: 8,
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(12),
    marginRight: theme.spacing(1),
    minWidth: 64,
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const IconWrapper = styled.div`
  border: 1px solid #fff;
  color: #fff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

export default function Header({
  currentTab,
  handleThemeChange,
  handleTabChange,
}) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <AppTitle>Implement Maps in React</AppTitle>
        <Grow />
        <ToolbarControls>
          <StyledTabs
            value={currentTab}
            onChange={handleTabChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="Google Maps API" />
            <StyledTab label="MapBox GL" />
            <StyledTab label="@react-google-maps" />
          </StyledTabs>
          <IconWrapper
            onClick={() => {
              const win = window.open(
                "https://github.com/vamci07/react-maps",
                "_blank"
              );
              win.focus();
            }}
          >
            <Github style={{ height: 16, width: 16 }} />
          </IconWrapper>
          <ThemeSwitch handleThemeChange={handleThemeChange} />
        </ToolbarControls>
      </Toolbar>
    </AppBar>
  );
}
