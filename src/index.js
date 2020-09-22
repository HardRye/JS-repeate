import './js/feedback';

import posts from './posts.json';
import postFeedItemTemplate from './templates/post-feed-item.hbs';
import postFeedTemplate from './templates/post-feed.hbs';

import './css/styles.css';
import './css/post-feed.css';

// console.log(postFeedItemTemplate);
// console.log(posts);

const refs = {
  postFeed: document.querySelector('.post-feed'),
};

// // создаем разметку из шаблона элемента списка
// function buildPostFeed(posts) {
//   const markup = posts.map(el => postFeedItemTemplate(el)).join('');
//   refs.postFeed.insertAdjacentHTML('beforeend', markup);
// }
// buildPostFeed(posts);

// // создаем разметку из шаблона списка
const markup = postFeedTemplate(posts);
refs.postFeed.insertAdjacentHTML('beforeend', markup);

/*
 * JSON methods & work with localStorage
 */
{
  // const dog = {
  //   name: 'Mango',
  //   age: 3,
  //   isHappy: true,
  // };
  // const str = JSON.stringify(dog);
  // console.log(str);
  // const backToObj = JSON.parse(str);
  // console.log(backToObj);
  // const settings = {
  //   theme: 'dark',
  //   mode: 'grid',
  // };
  // localStorage.setItem('settings', JSON.stringify(settings));
  // const persistedSettings = localStorage.getItem('settings');
  // const parsedSettings = JSON.parse(persistedSettings);
  // console.log(parsedSettings);
}
