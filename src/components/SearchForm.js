import { useState } from 'react';

const SearchForm = () => {
  const [type, setType] = useState('city');
  const [term, setTerm] = useState('');

  return (
    <form id='termInput'>
      <label htmlFor='searchType'>Search for a location</label>
      <select
        id='searchType'
        name='searchType'
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value='city'>Search by City</option>
        <option value='state'>Search by State</option>
        <option value='query'>Search by Name</option>
        {/* <option value='postal-code'>Search by Zip/Postal Code</option> */}
      </select>
      <input
        type='text'
        name='termBox'
        id='termBox'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder='Search Term(s)'
      />
      <input type='submit' value='Find Me A Beer!' className='btn' />
    </form>
  );
};

export default SearchForm;
