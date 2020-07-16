import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export default function Layout({
  currentTab,
  children,
  handleThemeChange,
  handleTabChange,
}) {
  return (
    <Container>
      <Header
        currentTab={currentTab}
        handleThemeChange={handleThemeChange}
        handleTabChange={handleTabChange}
      />
      <Content>{children}</Content>
    </Container>
  );
}
