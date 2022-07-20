const Venue = ({ venue }) => {
  return (
    <div id='protoVenue' className='protoVenue'>
      <h2 key={venue.id}>{venue.name}</h2>
      <p>{venue.address}</p>
      <p>
        {venue.city}, {venue.state} {venue.zipcode}
      </p>
      <p>{venue.phone}</p>
    </div>
  );
};

export default Venue;
