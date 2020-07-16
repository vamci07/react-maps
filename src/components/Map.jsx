import React from "react";
import {
  GoogleMap,
  useLoadScript
} from "@react-google-maps/api";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 30.263497,
  lng: -81.530425,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return <div>Error</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
    ></GoogleMap>
  );
}
