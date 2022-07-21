import Venue from './Venue';

const Venues = ({ venues }) => {
  return (
    <>
      {venues.map((venue) => (
        <a
          id='venueLink'
          href={`http://${venue.url}`}
          target='_blank'
          rel='noopener noreferrer'
          style={{ textDecoration: 'none' }}
        >
          <Venue key={venue.id} venue={venue} />
        </a>
      ))}
    </>
  );
};

export default Venues;
