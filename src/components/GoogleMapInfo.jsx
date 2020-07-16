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

export default function GoogleMapInfo() {
  return (
    <div>
      <TitleWrapper>
        <Title>Google Maps</Title>
        <SubTitle>Maps JavaScript API</SubTitle>
        <Desc>
          The Maps JavaScript API lets you customize maps with your own content
          and imagery for display on web pages and mobile devices. The Maps
          JavaScript API features four basic map types (roadmap, satellite,
          hybrid, and terrain) which you can modify using layers and styles,
          controls and events, and various services and libraries.
        </Desc>
        <div style={{ marginTop: 16 }}>
          <SubTitle>
            <a
              href="https://developers.google.com/maps/documentation/javascript/tutorial"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to explore Google Maps
            </a>
          </SubTitle>
        </div>
      </TitleWrapper>
      <Content></Content>
    </div>
  );
}
