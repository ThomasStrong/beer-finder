const SearchBtn = ({ termSearch }) => {
  return (
    <button onClick={termSearch} className='btn'>
      Find Me a Beer!
    </button>
  );
};

export default SearchBtn;
