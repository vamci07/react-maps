import React from "react";
import TabPanel from "@material-ui/lab/TabPanel";
import ReactGoogleMap from "components/ReactGoogleMap";
import MapBox from "components/MapBox";
import GoogleMap from "components/GoogleMap";
import MapInfo from "components/MapInfo";
import MapBoxInfo from "components/MapBoxInfo";
import GoogleMapInfo from "components/GoogleMapInfo";
import ReactGoogleMapInfo from "components/ReactGoogleMapInfo";

export default function Landing({ currentTheme }) {
  return (
    <div>
      <TabPanel value={0}>
        <GoogleMap />
        <MapInfo>
          <GoogleMapInfo />
        </MapInfo>
      </TabPanel>
      <TabPanel value={1}>
        <MapBox currentTheme={currentTheme} />
        <MapInfo>
          <MapBoxInfo />
        </MapInfo>
      </TabPanel>
      <TabPanel value={2}>
        <ReactGoogleMap />
        <MapInfo>
          <ReactGoogleMapInfo />
        </MapInfo>
      </TabPanel>
    </div>
  );
}
