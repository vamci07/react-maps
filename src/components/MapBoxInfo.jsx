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

export default function MapBoxInfo() {
  return (
    <div>
      <TitleWrapper>
        <Title>MapBox</Title>
        <SubTitle>Maps and location for developers</SubTitle>
        <Desc>
          Precide location data and powerful developer tools to change the way
          we navigate the world.
        </Desc>
        <div style={{ marginTop: 16 }}>
          <SubTitle>
            <a
              href="https://www.mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to explore MapBox
            </a>
          </SubTitle>
        </div>
      </TitleWrapper>
      <Content></Content>
    </div>
  );
}
