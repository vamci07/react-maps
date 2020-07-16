import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar } from "@material-ui/core";
import ThemeSwitch from "components/ThemeSwitch";
import MapSwitch from "components/MapSwitch";

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

export default function Header({
  handleThemeChange,
  handleMapsRendererChange,
}) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <AppTitle>Navigator</AppTitle>
        <Grow />
        <ToolbarControls>
          <MapSwitch handleMapsRendererChange={handleMapsRendererChange} />
          <ThemeSwitch handleThemeChange={handleThemeChange} />
        </ToolbarControls>
      </Toolbar>
    </AppBar>
  );
}
