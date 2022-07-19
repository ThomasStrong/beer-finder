const SearchBtn = ({ onClick }) => {
  // use this to clear search terms

  return (
    <button onClick={onClick} className='btn'>
      Find Me a Beer!
    </button>
  );
};

export default SearchBtn;
