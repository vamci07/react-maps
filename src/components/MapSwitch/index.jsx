import React from "react";
import "./style.scss";

export default function MapSwitch({ handleMapsRendererChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: 12 }}>
      <input
        className="switch-input"
        id="theme-switch"
        type="checkbox"
        onChange={handleMapsRendererChange}
      />
      <label className="switch-control" htmlFor="theme-switch"></label>
    </div>
  );
}
