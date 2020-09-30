const url =
  "http://api.apixu.com/v1/current.json?key=78kjshdljkasdoasjdlkasjd&q=Paris";

// http -> http => CORS

// axios.get(url).then(console.log).catch(console.warn);

// http -> https proxy -> http => OK

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
axios
  .get(proxyUrl + url)
  .then(console.log)
  .catch(console.warn);
