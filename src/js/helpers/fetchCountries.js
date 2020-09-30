import axios from 'axios';

const baseUrl = 'https://restcountries.eu/rest/v2/name';

export default function fetchCountries(searchQuery) {
  return axios.get(`${baseUrl}/${searchQuery}`).then(res => res.data);
}
