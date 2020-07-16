import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import styled from "styled-components";

const libraries = ["places"];

const MapContainer = styled.div`
  position: absolute;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: Nunito;
  height: 75%;
  margin: 12px;
  border-radius: 8px;
  border: 2px solid ${(p) => p.theme.palette.divider};
`;

const mapContainerStyle = {
  width: "inherit",
  height: "100%",
  borderRadius: 8,
};

const center = {
  lat: 30.263497,
  lng: -81.530425,
};

export default function ReactGoogleMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return <div>Error</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <MapContainer>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      ></GoogleMap>
    </MapContainer>
  );
}
