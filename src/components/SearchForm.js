import { useState } from 'react';
import LocateBtn from './LocateBtn';

const SearchForm = ({ onSearch }) => {
  const [type, setType] = useState('city');
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

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

  let userPosition;

  const geolocate = () => {
    function getLocation() {
      const response = document.getElementById('buttonResponse');
      if (navigator.geolocation) {
        userPosition = navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        response.innerHTML =
          'Geolocation is not supported and we will be unable to locate beer near your location!';
      }
    }

    getLocation();

    // Convert (reverse geocode; google?) lat/long to city then set state of term to that city

    let userLat;
    let userLong;

    function showPosition(position) {
      userLat = position.coords.latitude;
      userLong = position.coords.longitude;

      console.log(userLat, userLong);
    }

    alert('This feature coming soon!');
  };

  return (
    <form id='termInput' onSubmit={onSubmit}>
      <LocateBtn onClick={geolocate} />
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
