const Venue = ({ venue }) => {
  return (
    <div id='protoVenue' className='protoVenue'>
      <h2 key={venue.index}>{venue.name}</h2>
      <p>{venue.street}</p>
      <p>
        {venue.city}, {venue.state} {venue.zip}
      </p>
      <p>{venue.phone}</p>
      <p>{venue.url}</p>
      {/* <iframe src={venue.proxylink}></iframe> */}
    </div>
  );
};

export default Venue;
