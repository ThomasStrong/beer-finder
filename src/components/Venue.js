const Venue = ({ testVenue }) => {
  return (
    <div className='venue'>
      <h2>{testVenue.name}</h2>
      <p>{testVenue.address}</p>
      <p>
        {testVenue.city}, {testVenue.state} {testVenue.zipcode}
      </p>
      <p>{testVenue.phone}</p>
    </div>
  );
};

export default Venue;
