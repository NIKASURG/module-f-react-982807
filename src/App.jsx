
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

fetch('https://konkursas.kitm.lt/swagger/#/default/get_places_nearby.json').then(response => response.json())
.then(data => {
  for (const i in data.info) {
      console.log(i)
      
  }
})
.catch(error => console.error("Network error:", error));
const App = () => {
  const position = [54.89696152340903, 23.918591423019446];
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Kauno informacinių technologijų mokykla. <br /> Lankoma vieta, 50 lankytoju kas valanda.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default App;