import LocateBtn from './LocateBtn';
import SearchForm from './SearchForm';
import SearchBtn from './SearchBtn';
import UseLocation from './UseLocation';

const Header = () => {
  const fetchVenues = async () => {
    const searchType = document.getElementById('searchType');
    const searchTerm = document.getElementById('termBox').value;
    const encoder = searchType.value;
    if (searchTerm) {
      const res = await fetch(
        `https://beermapping.com/webservice/loc${encoder}/fdcfda52f27a87308dfd30e9647f4905/${searchTerm}&s=json`
      );

      const venueData = await res.json();

      console.log(searchTerm, encoder);
      console.log(venueData);
      return venueData;
    } else {
      console.log('Error, no search term');
      // throw error 'User input required'
    }
    // const venueData = await res.json();
  };

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
      <SearchForm />
      <SearchBtn onClick={fetchVenues} />
      <UseLocation />
    </header>
  );
};

export default Header;
