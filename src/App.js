import { useState, useEffect } from 'react';
import Header from './components/Header';
import Venues from './components/Venues';
import SearchForm from './components/SearchForm';

function App() {
  const [venues, setVenues] = useState(
    []
    // Mock data for setting up and testing layout
    // [
    //   {
    //     id: 1,
    //     name: 'Test Brewery',
    //     address: '1234 Alphabet St.',
    //     city: 'Louisville',
    //     state: 'KY',
    //     zipcode: '402XX',
    //     phone: '502-502-5025',
    //   },
    //   {
    //     id: 2,
    //     name: 'Venue du Test',
    //     address: '567 Another St.',
    //     city: 'Louisville',
    //     state: 'KY',
    //     zipcode: '402XX',
    //     phone: '502-205-2055',
    //   },
    //   {
    //     id: 3,
    //     name: 'Madeup Brewpub',
    //     address: '999 Industry Circle',
    //     city: 'Louisville',
    //     state: 'KY',
    //     zipcode: '402XX',
    //     phone: '502-555-9999',
    //   },
    // ]
  );

  // const [fetchURL, setFetchURL] = useState('');
  const [topVenues, setTopVenues] = useState([]);

  // const [search, setSearch] = useState(false);

  let fetchURL = '';
  // let topVenues;
  let venueData;

  const getVenueURL = (venue) => {
    console.log(venue.type, venue.term);

    fetchURL = `https://beermapping.com/webservice/loc${venue.type}/fdcfda52f27a87308dfd30e9647f4905/${venue.term}&s=json`;
    console.log(fetchURL);

    const fetchVenues = async () => {
      console.log('fetching venues');
      console.log(fetchURL);
      const res = await fetch(fetchURL);

      venueData = await res.json();

      console.log(venueData.slice(0, 5));
      setTopVenues(venueData.slice(0, 5));

      return venueData;
    };
    fetchVenues();
  };

  // useEffect(() => {
  //   const getVenues = async () => {
  //     const fetcher = await fetchVenues();
  //     setTopVenues(fetcher);
  //   };
  //   getVenues();
  // }, []);

  return (
    <div className='container'>
      <Header />
      <SearchForm onSearch={getVenueURL} />
      {topVenues.length > 0 ? (
        <Venues venues={topVenues} />
      ) : (
        'No Venues to Show'
      )}
    </div>
  );
}

export default App;
