import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import s from "./Map.module.scss";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function Map({ ubicacionRef }) {
  return (
    <div style={{ marginTop: "6rem" }} ref={ubicacionRef}>
      <p style={{ fontSize: "2rem", marginBottom: "3rem" }}>UBICACIÓN</p>
      <div className={s.grid_container}>
        <div>
          <p>
            Alala Campo se encuentra por la Calle Chacabuco, entre calle 5 y
            calle 6. Pocito, San Juan.
          </p>
        </div>

        <div style={{ border: "#e6e6e6 1px solid" }}>
          <MapContainer
            style={{ height: "350px", width: "100%" }}
            center={[-31.569, -68.60071]}
            zoom={13}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-31.57806, -68.60071]}>
              <Popup>ALALA CAMPO</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
