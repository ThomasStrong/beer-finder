import { useState } from 'react';
import Header from './components/Header';
import Venues from './components/Venues';
import SearchForm from './components/SearchForm';

function App() {
  const [venues, setVenues] = useState(
    // Mock data for setting up and testing layout
    [
      {
        id: 1,
        name: 'Test Brewery',
        address: '1234 Alphabet St.',
        city: 'Louisville',
        state: 'KY',
        zipcode: '402XX',
        phone: '502-502-5025',
      },
      {
        id: 2,
        name: 'Venue du Test',
        address: '567 Another St.',
        city: 'Louisville',
        state: 'KY',
        zipcode: '402XX',
        phone: '502-205-2055',
      },
      {
        id: 3,
        name: 'Madeup Brewpub',
        address: '999 Industry Circle',
        city: 'Louisville',
        state: 'KY',
        zipcode: '402XX',
        phone: '502-555-9999',
      },
    ]
  );

  return (
    <div className='container'>
      <Header />
      <SearchForm />
      {venues.length > 0 ? <Venues venues={venues} /> : 'No Venues to Show'}
    </div>
  );
}

export default App;
