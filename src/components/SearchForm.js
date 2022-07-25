import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [type, setType] = useState('city');
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // Throw error for missing search term, and clear it - this is not working
    // const errorResponse = document.getElementById('map');
    // const para = document.createElement('p');
    // if (!term) {
    //   const errorThrow = () => {
    //     para.innerHTML = 'Unkown location!';
    //     errorResponse.appendChild(para);
    //     para.style.color = 'red';
    //     para.style.fontSize = '125%';
    //   };
    //   errorThrow();
    // } else {
    //   para.remove();
    // }

    const node = document.createElement('p');
    const noTerm = document.createTextNode('Please enter a search term!');

    if (!term) {
      node.appendChild(noTerm);
      document.getElementById('termInput').appendChild(node);
    } else {
      onSearch({ type, term });
    }
    setTerm('');
    setType('city');
  };

  return (
    <form id='termInput' onSubmit={onSubmit}>
      <label id='termInputLabel' htmlFor='searchType'>
        Search for a location
      </label>
      <select
        id='searchType'
        name='searchType'
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value='city'>Search by City</option>
        <option value='state'>Search by State</option>
        <option value='query'>Search by Name</option>
      </select>
      <input
        type='text'
        name='termBox'
        id='termBox'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder='Search Term(s)'
      />
      <label id='displayNumberLabel' htmlFor='displayNumber'>
        How many results would you like?
      </label>
      <select id='displayNumber' name='displayNumber'>
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
