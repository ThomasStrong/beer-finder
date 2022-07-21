import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [type, setType] = useState('city');
  const [term, setTerm] = useState('');
  const [displayNumber, setDisplayNumber] = useState(5);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!term) {
      alert('Please add a search term');
      return;
    }

    onSearch({ type, term });

    setTerm('');
    setType('city');
  };

  return (
    <form id='termInput' onSubmit={onSubmit}>
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
      <label htmlFor='displayNumber'>How many results would you like?</label>
      <select
        id='displayNumber'
        name='displayNumber'
        value={displayNumber}
        onChange={(e) => setDisplayNumber(e.target.value)}
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
      </select>
      <input type='submit' value='Find Me A Beer!' className='btn' />
    </form>
  );
};

export default SearchForm;
