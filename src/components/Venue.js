import { fetchVenues } from './fetchVenues';

const Venue = ({ topVenue }) => {
  return (
    <div id='protoVenue' className='protoVenue'>
      <h2 key={topVenue.id}>{fetchVenues.topVenue.name}</h2>
      {/* <p>{testVenue.address}</p>
      <p>
        {testVenue.city}, {testVenue.state} {testVenue.zipcode}
      </p>
      <p>{testVenue.phone}</p> */}
    </div>
  );
};

export default Venue;
