import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import styled from "styled-components";

const libraries = ["places"];

const MapContainer = styled.div`
  font-family: Nunito;
  height: calc(100vh - 420px);
  border-radius: 8px;
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

export default function ReactGoogleMap({ apiKey }) {
  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || apiKey;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
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
