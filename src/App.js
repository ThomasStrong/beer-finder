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
