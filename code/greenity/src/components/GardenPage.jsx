import { useParams } from 'react-router-dom'
import { API } from '../utils/faker';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function GardenPage() {
    const { id } = useParams();  // Get the id parameter from the URL
    const item = API.find(id); 

    if (!item) {
        return <h2>Aucun jardin trouvé</h2>;
    }

     // Ensure latitude and longitude are valid numbers
     const latLng = [parseFloat(item.latitude), parseFloat(item.longitude)];

    return (
        <>
        <div>
            <h1>{item.nom}</h1>
            <strong>Adresse: {item.adresse}</strong> <br />
            <strong>Arrondissement: {item.arrondissement}</strong> <br />
        </div>
         <div className="map-container">
            <MapContainer center={latLng} zoom={12} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker key={item.id} position={latLng}>
                    <Popup>
                        <strong>{item.nom}</strong><br />
                        {item.adresse}<br />
                        {item.arrondissement}
                    </Popup>
                </Marker>
            </MapContainer>
       </div>
       </>
    );
}

export default GardenPage