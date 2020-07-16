import React from "react";
import styled from "styled-components";

const Container = styled.div``;

export default function Content({ children }) {
  return <Container>{children}</Container>;
}
