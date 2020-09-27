import articleTemplate from '../templates/article.hbs';

const baseUrl = 'http://newsapi.org/v2';
const resource = '/everything';
const queryString = '?q=bitcoin&from=2020-08-27&sortBy=publishedAt';
const API_KEY = '5cdfbcee73d448d2878b7ff733413e1c';

// &apiKey=5cdfbcee73d448d2878b7ff733413e1c

fetch(baseUrl + resource + queryString, {
  headers: {
    // 'X-Api-Key': API_KEY,
    Authorization: API_KEY,
  },
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    console.log(data.articles);
  });
