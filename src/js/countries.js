import debounce from 'lodash.debounce';
import fetchCountries from './helpers/fetchCountries';
import country from '../templates/country.hbs';
import countries from '../templates/countries.hbs';

import { error } from '@pnotify/core';

const refs = {
  input: document.querySelector('.countryInput'),
  countryList: document.querySelector('#country'),
};

refs.input.addEventListener('input', debounce(inputHandler, 1000));

function inputHandler(e) {
  clearCountryList();

  // console.log(e);
  const inputValue = e.target.value;
  e.target.value = '';

  fetchCountries(inputValue)
    .then(data => {
      // console.log(data);

      if (data.length > 10) {
        tooManyResultsNotyf();
      }

      if (data.length >= 2 && data.length <= 10) {
        renderCountriesList(data);
      }

      if (data.length === 1) {
        renderCountryList(data);
      }
    })
    .catch(() => {
      const markup = `<li>No country found. Try to change query!</li>`;
      // console.log(markup);
      refs.countryList.insertAdjacentHTML('beforeend', markup);
    });
}

function clearCountryList() {
  refs.countryList.innerHTML = '';
}

function tooManyResultsNotyf() {
  error({
    text: 'Too many matches found. Please enter a more specific query!',
    title: false,
    delay: 1000,
    closer: false,
    sticker: false,
    maxTextHeight: null,
  });
}

function renderCountriesList(data) {
  const markup = countries(data);
  console.log(markup);
  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

function renderCountryList(data) {
  const markup = country(data[0]);
  refs.countryList.insertAdjacentHTML('beforeend', markup);
}
