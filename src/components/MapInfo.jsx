import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: Nunito;
  height: 18%;
  margin: 12px;
  border-radius: 8px;
  border: 2px solid #fff;
`;

export default function MapInfo({ children }) {
  return <InfoContainer>{children}</InfoContainer>;
}
