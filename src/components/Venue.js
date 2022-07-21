const Venue = ({ venue }) => {
  return (
    <div id='protoVenue' className='protoVenue' href={`http://${venue.url}`}>
      <h2 key={venue.id}>{venue.name}</h2>
      <p>{venue.street}</p>
      <p>
        {venue.city}, {venue.state} {venue.zip}
      </p>
      <p>{venue.phone}</p>
      <a href={`http://${venue.url}`} target='_blank' rel='noopener noreferrer'>
        {venue.url}
      </a>
      {/* <iframe src={venue.proxylink}></iframe>     this is not working correctly*/}
    </div>
  );
};

export default Venue;
