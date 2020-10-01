import fetchImages from './js/apiService';
import { getState, setState } from './js/stateHandlers';
import imageItem from './templates/image-item.hbs';

import './css/styles.css';

const refs = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

refs.form.addEventListener('submit', handleFormSubmit);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function handleFormSubmit(e) {
  e.preventDefault();
  const inputElement = e.target.elements.query;
  const queryString = inputElement.value;

  const page = 1;
  refs.gallery.innerHTML = '';

  fetchImages(queryString, page).then(imageHits => {
    renderMarkup(imageHits);
    setState(queryString, page);
  });
}

function loadMoreBtnHandler() {
  const { queryString, pageNumber } = getState();
  const page = pageNumber + 1;

  fetchImages(queryString, page).then(imageHits => {
    const documentHeight = window.visualViewport.pageTop;

    renderMarkup(imageHits);
    scrollOnLoadMore(documentHeight);
    setState(queryString, page);
  });
}

function renderMarkup(arrayOfImageObjects) {
  const markup = arrayOfImageObjects
    .map(imageObj => imageItem(imageObj))
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function scrollOnLoadMore(height) {
  // console.log(window.visualViewport);
  // console.log(height, '- height');
  // console.log(
  //   document.documentElement.scrollHeight,
  //   '- document.documentElement.scrollHeight',
  // );
  // console.log(window.innerHeight, '- window.innerHeight');

  window.scrollTo({
    top: height + window.innerHeight - 50, // this default pixels is a fckng mess
    behavior: 'smooth',
  });
}
