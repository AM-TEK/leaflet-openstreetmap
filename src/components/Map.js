import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

function Map(props) {
  const { selectPosition } = props;
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    // Dynamically import Leaflet on the client-side
    import('leaflet').then((L) => {
      setIcon(
        L.icon({
          iconUrl: './placeholder.png',
          iconSize: [38, 38],
        })
      );
    });
  }, []);

  return (
    <div className="mapContainer">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={8}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {selectPosition && icon && (
          <Marker position={[selectPosition.lat, selectPosition.lon]} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
