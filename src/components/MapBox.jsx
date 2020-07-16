import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";

const { REACT_APP_MAPBOX_API_KEY = "" } = process.env;
mapboxgl.accessToken = REACT_APP_MAPBOX_API_KEY;

const defaultLocation = {
  lat: 30.263497,
  lng: -81.530425,
  zoom: 16,
};

const MapContainer = styled.div`
  font-family: Nunito;
  width: 100%;
  height: calc(100vh - 420px);
  border-radius: 8px;
`;

export default function MapBox({ currentTheme, apiKey }) {
  const mapContainerRef = useRef(null);
  const style = `mapbox://styles/mapbox/${
    currentTheme === "light" ? "streets-v11" : "dark-v10"
  }`;

  useEffect(() => {
    if (apiKey && apiKey.length) mapboxgl.accessToken = apiKey;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current || "",
      style: style,
      center: [defaultLocation.lng, defaultLocation.lat],
      zoom: defaultLocation.zoom,
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    return () => map.remove();
  }, [style, apiKey]);

  return <MapContainer ref={mapContainerRef} />;
}
