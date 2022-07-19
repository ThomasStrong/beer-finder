let topVenues;
export const fetchVenues = async () => {
  const searchType = document.getElementById('searchType');
  const searchTerm = document.getElementById('termBox').value;
  const encoder = searchType.value;
  if (searchTerm) {
    const res = await fetch(
      `https://beermapping.com/webservice/loc${encoder}/fdcfda52f27a87308dfd30e9647f4905/${searchTerm}&s=json`
    );

    const venueData = await res.json();

    console.log(searchTerm, encoder);
    console.log(venueData);

    // reduce response array (5,10)
    topVenues = venueData.slice(0, 5);
    return topVenues;
    // console.log(topVenues);

    // appendchildren to .venue
  } else {
    console.log('Error, no search term');
    // throw error 'User input required'
  }
};

export default topVenues;
