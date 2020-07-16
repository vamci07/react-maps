import React from "react";
import TabPanel from "@material-ui/lab/TabPanel";
import ReactGoogleMap from "components/ReactGoogleMap";
import MapBox from "components/MapBox";
import GoogleMap from "components/GoogleMap";
import MapInfo from "components/MapInfo";
import MapBoxInfo from "components/MapBoxInfo";
import GoogleMapInfo from "components/GoogleMapInfo";
import ReactGoogleMapInfo from "components/ReactGoogleMapInfo";
import { TextField, Typography } from "@material-ui/core";

export default function Landing({ currentTheme, apiKey, handleApiChange }) {
  return (
    <div style={{ paddingTop: 64 }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          paddingBottom: 0,
        }}
      >
        <div style={{ width: 480 }}>
          <Typography variant="subtitle">
            Please provide your own API key to view maps
          </Typography>
          <TextField
            variant="filled"
            size="small"
            label="API Key"
            value={apiKey}
            onChange={handleApiChange}
            fullWidth
          />
        </div>
      </div>
      <TabPanel value={0}>
        <GoogleMap apiKey={apiKey} />
        <MapInfo>
          <GoogleMapInfo />
        </MapInfo>
      </TabPanel>
      <TabPanel value={1}>
        {(process.env.REACT_APP_MAPBOX_API_KEY &&
          process.env.REACT_APP_MAPBOX_API_KEY.length) ||
        (apiKey && apiKey.length) ? (
          <MapBox currentTheme={currentTheme} apiKey={apiKey} />
        ) : null}
        <MapInfo>
          <MapBoxInfo />
        </MapInfo>
      </TabPanel>
      <TabPanel value={2}>
        <ReactGoogleMap />
        <MapInfo>
          <ReactGoogleMapInfo apiKey={apiKey} />
        </MapInfo>
      </TabPanel>
    </div>
  );
}
