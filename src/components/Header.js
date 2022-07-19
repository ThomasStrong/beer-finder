import SearchBtn from './SearchBtn';

const Header = () => {
  const termSearch = () => {
    console.log('Click');
  };

  return (
    <header className='header'>
      <h1>FindMeABeer</h1>
      <Button onClick={termSearch} />
    </header>
  );
};

export default Header;
