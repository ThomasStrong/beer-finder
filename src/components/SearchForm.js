const SearchForm = () => {
  return (
    <div id='termInput'>
      <label htmlFor='searchType'>Search for a location</label>
      <select id='searchType' name='searchType'>
        <option value='city'>Search by City</option>
        <option value='state'>Search by State</option>
        {/* <option value='postal-code'>Search by Zip/Postal Code</option> */}
        <option value='query'>Search by Name</option>
      </select>
      <input
        type='text'
        name='termBox'
        id='termBox'
        placeholder='Search Term(s)'
      />
    </div>
  );
};

export default SearchForm;
