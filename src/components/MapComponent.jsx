// MapComponent.js
import React from "react";
import Map, { Marker } from "react-map-gl";

const MapComponent = ({ latitude = 37.7749, longitude = -122.4194 }) => {
  // Set default coordinates
  return (
    <Map
      initialViewState={{
        latitude,
        longitude,
        zoom: 12,
      }}
      style={{ width: "100%", height: "400px" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker latitude={latitude} longitude={longitude}>
        <div className="bg-blue-500 w-4 h-4 rounded-full" />
      </Marker>
    </Map>
  );
};

export default MapComponent;
