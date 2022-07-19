const SearchForm = () => {
  return (
    <div id='termInput'>
      <label for='searchType'>Search for a location</label>
      <select id='searchType' name='seachType'>
        <option value='city'>Search by City</option>
        <option value='state'>Search by State</option>
        <option value='postal-code'>Search by Zip/Postal Code</option>
        <option value='name'>Search by City</option>
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
