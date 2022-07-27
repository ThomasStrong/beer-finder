import { useState } from 'react';
import Header from './components/Header';
import Venues from './components/Venues';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';

function App() {
  const [topVenues, setTopVenues] = useState([]);

  let fetchURL = '';
  let venueData;

  const getVenueURL = (venue) => {
    const displayNumber = document.querySelector('#displayNumber').value;

    fetchURL = `https://beermapping.com/webservice/loc${venue.type}/fdcfda52f27a87308dfd30e9647f4905/${venue.term}&s=json`;

    const fetchVenues = async () => {
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
      <Footer />
    </div>
  );
}

export default App;
