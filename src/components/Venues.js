import Venue from './Venue';

// const Venues = () => {
//   return (
//     <>
//       {testVenues.map((testVenue) => (
//           <Venue key={testVenue.id} testVenue={testVenue} />
//       ))}
//     </>
//   );
// };

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
