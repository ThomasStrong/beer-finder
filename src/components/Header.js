import LocateBtn from './LocateBtn';
import UseLocation from './UseLocation';

const Header = () => {
  // const onClick = () => {
  //   console.log('Click');
  // };

  let userPosition;

  const geolocate = () => {
    function getLocation() {
      const response = document.getElementById('buttonResponse');
      if (navigator.geolocation) {
        userPosition = navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        response.innerHTML =
          'Geolocation is not supported and we will be unable to locate beer near your location!';
      }
    }

    getLocation();

    let userLat;
    let userLong;

    // For testing geolocation
    //
    function showPosition(position) {
      userLat = position.coords.latitude;
      userLong = position.coords.longitude;

      console.log(userLat, userLong);
    }
  };

  return (
    <header className='header'>
      <h1>FindMeABeer</h1>
      <LocateBtn onClick={geolocate} />
      <UseLocation />
    </header>
  );
};

export default Header;
