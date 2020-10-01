import fetchImages from './apiService';
import { setState } from './stateHandlers';
import imageItem from '../templates/image-item.hbs';

const gallery = document.querySelector('.gallery');

function createMarkup(arrayOfImageObjects) {
  return arrayOfImageObjects.map(imageObj => imageItem(imageObj)).join('');
}

function renderMarkup(markup) {
  gallery.insertAdjacentHTML('beforeend', markup);
}

function render(searchQuery, pageNumber) {
  fetchImages(searchQuery, pageNumber).then(imageHits => {
    const markup = createMarkup(imageHits);
    renderMarkup(markup);
    setState(searchQuery, pageNumber);
    return markup;
  });
}

export default render;
