import React from "react";
import Map from "components/Map";
import MapBox from "components/MapBox";
import GoogleMap from "components/GoogleMap";

export default function Landing({ currentTheme, currentMap }) {
  return (
    <div>
      {currentMap === "google" ? (
        <GoogleMap />
      ) : (
        <MapBox currentTheme={currentTheme} />
      )}
    </div>
  );
}
