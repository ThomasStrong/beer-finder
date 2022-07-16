import Button from './Button';

const Header = ({ title }) => {
  const onClick = () => {
    console.log('Click');
  };

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: 'FindMeABeer',
};

export default Header;
