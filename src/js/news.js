import newsService from './services/news-service';
import spinner from './spinner';

import articlesTemplate from '../templates/article-list-items.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  arcticeList: document.querySelector('#article-list'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();
  clearListItems();

  // console.log(e.currentTarget);
  const input = e.currentTarget.elements.query;
  const inputValue = input.value;
  input.value = '';

  // console.log(searchQuery);
  newsService.resetPage();
  newsService.searchQuery = inputValue;

  fetchArticles();
}

function loadMoreBtnHandler() {
  fetchArticles();
}

function fetchArticles() {
  spinner.show();
  newsService.fetchArticles().then(articles => {
    spinner.hide();
    buildMarkupAndInsertListItems(articles);
  });
}

function buildMarkupAndInsertListItems(articles) {
  const markup = articlesTemplate(articles);
  refs.arcticeList.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  refs.arcticeList.innerHTML = '';
}
