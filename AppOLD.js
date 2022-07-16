function getLocation() {
    const response = document.getElementById("buttonResponse");
    if (navigator.geolocation) {
      userPosition = navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      response.innerHTML =
        "Geolocation is not supported and we will be unable to locate beer near your location!";
    }
  }
  
  getLocation();
  
  let userLat;
  let userLong;
  // For testing geolocation
  //
  function showPosition(position) {
    userLat = position.coords.latitude;
    userLong = position.coords.longitude;
  
    console.log(userLat, userLong);
  
    let map;
  
    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: userLat, lng: userLong },
        zoom: 8,
      });
    }
  
    window.initMap = initMap;
    // const response = document.getElementById("buttonResponse");
    // response.innerHTML =
    //   "Working on your location..." +
    //   "Location: " +
    //   position.coords.latitude +
    //   " , " +
    //   position.coords.longitude;
  }
  
  // getelementbyid username
  
  // For new project flow, using beermapping.com API
  // http://beermapping.com/webservice/locquery/[API_KEY]/[piece]&s=json
  // specifically returns json data via text search
  // http://beermapping.com/webservice/loccity/API_KEY/lyons,co
  // http://beermapping.com/webservice/locstate/API_KEY/co