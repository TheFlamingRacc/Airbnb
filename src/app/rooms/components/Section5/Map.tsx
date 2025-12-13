"use client";

import { Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import "leaflet/dist/leaflet.css";
import PlaceIcon from "@mui/icons-material/Place";

export default function Map({ position }: { position: [number, number] }) {
  const muiMarker = L.divIcon({
    className: "",
    html: ReactDOMServer.renderToString(<PlaceIcon sx={{ fontSize: 48 }} />),
    iconSize: [48, 48],
    iconAnchor: [24, 48],
  });
  return (
    <Box width={"100%"} height={"500px"} overflow={"hidden"} borderRadius={5}>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={muiMarker} position={position}>
          <Popup> hello world</Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}
