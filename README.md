Beer-Finder (FindMeABeer) React App

# Beer-Finder (FindMeABeer)

Capstone Project - Code Louisville Web Development 2

### [Hosted on GitHub Pages](https://thomasstrong.github.io/beer-finder/)

## To run the app in development mode

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
-This method requires using a personal Google API Key for the map to load properly.
<br></br>

## Description -

- FindMeABeer - This app is designed to find someone (a site user) a place to find a nice libation. The single-page app was inspired by the author's interest in local breweries and the communities therein. The user is given the option to search for a location to have or get a beer by city, state, or name. The app is fetching the appropriate data from The Beer Mapping Project's API (http://beermapping.com), displaying relevant information to the user, and then makes each location a clickable button to direct the user to their website. I used a mobile-first approach for the design, React, .
  - The original intent for this project was to link a user's Untappd username to their wishlist of beers and then offer them a nearby location to find the beer. As of the completion of this project Untappd was not allowing new access to their API while it is under development.
    <br></br>

## JavaScript Features -

- Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX); Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app
  - These two were accomplished via `fetch()` to beermapping.com API, parsing the response, and then setting the `topVenues` state using a dynamic variable `displayNumber` as selected by the user.
- Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value
  - The `SearchForm` accepts multiple data inputs from the user; search type, search term(s), number of results to display. The form uses a submit button that `onSubmit` sets and passes the state parameters of term and type (the search type and term(s)) via the object `venue` to `getVenueURL` which forms the fetch url from term/type, then uses `slice()` given the user's specified number of results to form the displayed list of venues.
- Develop your project using a common JavaScript framework such as React, Angular, Vue, etc.
  - This app was created using React and utilizes the useState hook.
- Additional features:

  - The package `gh-pages` was used to deploy the app to GitHub Pages.
  - Package `@react-google-maps/api` used as a helper for Google Map display.
    <br></br>

## Future Improvements

- Complete functionality of the UseLocation button/function; set the SearchForm to populate via the information from geolocation, after geocaoding lat/long to city/state and search by: 'city'
- Allow user to search specifically for type of venue (i.e. brewery, brewpub, etc.)
- Dynamic placeholder for the search term input box for greater usability (Search by: X; 'X name/term')
- More to come!
  <br></br>

## Questions?

If you have any questions or concerns feel free to reach out to me at [Github](https://github.com/ThomasStrong) or through email at <strng_thms@yahoo.com>.
<br></br>
