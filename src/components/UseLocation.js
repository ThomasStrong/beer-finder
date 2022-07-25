import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 38.2527,
  lng: -85.7585,
};

function UseLocation() {
  return (
    <LoadScript googleMapsApiKey='AIzaSyC991AHKUTrVnFqaVAFcox4BMl8dI0fjzA'>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default UseLocation;
