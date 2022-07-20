import Venue from './Venue';

const Venues = ({ venues }) => {
  return (
    <>
      {venues.map((venue) => (
        <Venue key={venue.id} venue={venue} />
      ))}
    </>
  );
};

export default Venues;
