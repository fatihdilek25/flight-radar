import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import icon from "./../assets/plane-i.png";
import L from "leaflet";

const MapView = ({ openModal }) => {
  const store = useSelector((store) => store);
  const planeIcon = L.icon({
    iconUrl: icon,
    iconSize: [20, 20],
  });

  return (
    <div className="map-container">
      <MapContainer
        center={[39.821613, 34.812244]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {store.flights.map((flight) => (
          <Marker
            icon={planeIcon}
            key={flight.id}
            position={[flight.lat, flight.lng]}
          >
            <Popup>
              <div className="popup">
                <span>Uçuş Kodu : {flight.code}</span>
                <button onClick={() => openModal(flight.id)}>Detay</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
