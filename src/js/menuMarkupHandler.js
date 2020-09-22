import menuItem from '../templates/item-template.hbs';
import menu from '../assets/menu.json';
console.log(menu);

const refs = {
  menu: document.querySelector('.js-menu'),
};

const markup = menuItem(menu);
refs.menu.insertAdjacentHTML('beforeend', markup);
