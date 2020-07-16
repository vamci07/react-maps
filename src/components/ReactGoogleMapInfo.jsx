import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 24px;
`;

const Title = styled.h1``;
const SubTitle = styled.p`
  margin: 0;
  padding: 0;
`;

const Desc = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
`;

const Content = styled.div``;

export default function ReactGoogleMapInfo() {
  return (
    <div>
      <TitleWrapper>
        <Title>Google Maps</Title>
        <SubTitle>Maps JavaScript API</SubTitle>
        <Desc>
          @react-google-maps/api provides very simple bindings to the Google
          Maps JavaScript API v3 and lets you use it in your app as React
          components.
        </Desc>
        <div style={{ marginTop: 16 }}>
          <SubTitle>
            <a
              href="https://react-google-maps-api-docs.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to explore @react-google-maps/api
            </a>
          </SubTitle>
        </div>
      </TitleWrapper>
      <Content></Content>
    </div>
  );
}
