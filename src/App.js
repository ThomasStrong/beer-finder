import { useState } from 'react';
import Header from './components/Header';
import Venues from './components/Venues';
import SearchForm from './components/SearchForm';

function App() {
  const [topVenues, setTopVenues] = useState([]);

  let fetchURL = '';
  let venueData;

  const getVenueURL = (venue) => {
    // console.log(venue.type, venue.term);

    const displayNumber = document.querySelector('#displayNumber').value;

    fetchURL = `https://beermapping.com/webservice/loc${venue.type}/fdcfda52f27a87308dfd30e9647f4905/${venue.term}&s=json`;
    // console.log(fetchURL);

    const fetchVenues = async () => {
      // console.log('fetching venues');
      // console.log(fetchURL);
      const res = await fetch(fetchURL);

      venueData = await res.json();

      setTopVenues(venueData.slice(0, displayNumber));

      return venueData;
    };
    fetchVenues();
  };

  // let userPosition;

  // const geolocate = () => {
  //   function getLocation() {
  //     const response = document.getElementById('buttonResponse');
  //     if (navigator.geolocation) {
  //       userPosition = navigator.geolocation.getCurrentPosition(showPosition);
  //     } else {
  //       response.innerHTML =
  //         'Geolocation is not supported and we will be unable to locate beer near your location!';
  //     }
  //   }

  //   getLocation();

  //   let userLat;
  //   let userLong;

  //   // For testing geolocation
  //   //
  //   function showPosition(position) {
  //     userLat = position.coords.latitude;
  //     userLong = position.coords.longitude;

  //     console.log(userLat, userLong);

  //     let map;

  //     function initMap() {
  //       map = new google.maps.Map(document.getElementById('map'), {
  //         center: { lat: userLat, lng: userLong },
  //         zoom: 8,
  //       });
  //     }

  //     window.initMap = initMap;
  //     // const response = document.getElementById("buttonResponse");
  //     // response.innerHTML =
  //     //   "Working on your location..." +
  //     //   "Location: " +
  //     //   position.coords.latitude +
  //     //   " , " +
  //     //   position.coords.longitude;
  //   }
  // };

  return (
    <div className='container'>
      <Header />
      <SearchForm onSearch={getVenueURL} />
      {topVenues.length > 0 ? <Venues venues={topVenues} /> : ''}
      {/* <script
        src={
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyC991AHKUTrVnFqaVAFcox4BMl8dI0fjzA&callback=initMap&v=weekly'
        }
        defer
      ></script> */}
    </div>
  );
}

export default App;
