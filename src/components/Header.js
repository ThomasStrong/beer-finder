import LocateBtn from './LocateBtn';
import SearchForm from './SearchForm';
import SearchBtn from './SearchBtn';
import UseLocation from './UseLocation';

const Header = () => {
  const termSearch = () => {
    console.log('Click');
  };
  const geolocate = () => {
    console.log('Getting Location');
  };

  return (
    <header className='header'>
      <h1>FindMeABeer</h1>
      <LocateBtn onclick={geolocate} />
      <SearchForm />
      <SearchBtn onClick={termSearch} />
      <UseLocation />
    </header>
  );
};

export default Header;