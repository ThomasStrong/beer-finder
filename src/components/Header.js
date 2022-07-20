import LocateBtn from './LocateBtn';
import UseLocation from './UseLocation';

const Header = () => {
  // const onClick = () => {
  //   console.log('Click');
  // };
  const geolocate = () => {
    console.log('Getting Location');
  };

  return (
    <header className='header'>
      <h1>FindMeABeer</h1>
      <LocateBtn onClick={geolocate} />
      <UseLocation />
      {/* <SearchBtn onClick={onClick} /> */}
    </header>
  );
};

export default Header;
