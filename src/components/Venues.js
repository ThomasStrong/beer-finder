import Venue from './Venue';

const Venues = ({ venues }) => {
  return (
    <div id='venueList'>
      {venues.map((venue) => (
        <a
          id='venueLink'
          href={`http://${venue.url}`}
          target='_blank'
          rel='noopener noreferrer'
          style={{ textDecoration: 'none' }}
        >
          <Venue venue={venue} />
        </a>
      ))}
    </div>
  );
};

export default Venues;
