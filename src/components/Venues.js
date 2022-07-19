import Venue from './Venue';

// Mock data for setting up and testing layout
const testVenues = [
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
];

const Venues = () => {
  return (
    <>
      {testVenues.map((testVenue) => (
        <>
          <Venue key={testVenue.id} testVenue={testVenue} />
        </>
      ))}
    </>
  );
};

export default Venues;
