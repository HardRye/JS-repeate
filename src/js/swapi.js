import tableRowTemplate from '../templates/swapi-table-row.hbs';

const tableBody = document.querySelector('#swapi-planets tbody');

const baseUrl = 'https://swapi.dev/api/';

{
  // const baseUrl = 'https://swapi.dev/api/';
  //
  // fetch(baseUrl)
  //   .then(response => response.json())
  //   .then(data => console.log(data));
  //
  // // GET 'https://swapi.dev/api/people/'
  // fetch('https://swapi.dev/api/people/')
  //   .then(response => response.json())
  //   .then(data => console.log(data));
}

// GET "https://swapi.dev/api/planets/"
fetch(baseUrl + 'planets/', {
  headers: {
    Accept: 'application/json',
  },
})
  .then(response => response.json())
  .then(data => {
    // console.log(data.results);
    const results = data.results;
    renderPlanets(results);
  });

function renderPlanets(planets) {
  const markup = planets.map(planet => tableRowTemplate(planet)).join('');

  // console.log(markup);
  tableBody.insertAdjacentHTML('beforeend', markup);
}
