import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  font-family: Nunito;
  min-height: 160px;
  margin-top: 24px;
  border-radius: 8px;
  border: 2px solid ${(p) => p.theme.palette.divider};
`;

export default function MapInfo({ children }) {
  return <InfoContainer>{children}</InfoContainer>;
}
