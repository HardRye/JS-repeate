const baseUrl = 'https://pixabay.com/api/';
const apiKey = '13135651-038714fd5931f83068ad66fd3';

const fetchImages = (queryString, pageNumber = 1) => {
  const requestUrl = `${baseUrl}?image_type=photo&orientation=horizontal&q=${queryString}&page=${pageNumber}&per_page=12&key=${apiKey}`;

  const response = fetch(requestUrl)
    .then(res => res.json())
    .then(data => data.hits);

  return response;
};

export default fetchImages;
