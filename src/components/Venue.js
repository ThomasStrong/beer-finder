import { useState } from 'react';

const Venue = ({ venue }) => {
  return (
    <div id='protoVenue' className='protoVenue'>
      <h2 key={venue.id}>{venue.name}</h2>
      <p>{venue.street}</p>
      <p>
        {venue.city}, {venue.state} {venue.zip}
      </p>
      <p>{venue.phone}</p>
      <a href={`http://${venue.url}`} target='_blank' rel='noopener noreferrer'>
        {venue.url}
      </a>
      {/* <iframe src={venue.proxylink}></iframe>    this is not quite right*/}
    </div>
  );
};

export default Venue;
