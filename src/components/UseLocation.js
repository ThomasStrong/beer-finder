import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '300px',
  height: '300px',
};

// Current center based on Louisville, KY
const testCenter = {
  lat: 38.2527,
  lng: -85.7585,
};

function UseLocation() {
  return (
    <LoadScript googleMapsApiKey='AIzaSyC991AHKUTrVnFqaVAFcox4BMl8dI0fjzA'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={testCenter}
        zoom={10}
      >
        <Marker position={testCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default UseLocation;
