import debounce from 'lodash.debounce';

const refs = {
  form: document.querySelector('#feedback-form'),
};

// при загрузке страницы проверяем localStorage
// если там чтото есть - отдаем в textarea
const persistedFeedback = localStorage.getItem('feedback');
if (persistedFeedback) {
  const textarea = refs.form.elements.message;
  textarea.value = persistedFeedback;
}
// console.log(persistedFeedback);

/*
  refs.form.addEventListener('input', e => {
    // console.log(e.target.value);

    const textarea = e.currentTarget.elements.message;
    // console.log(textarea.value);

    localStorage.setItem('feedback', textarea.value);
  });
*/
refs.form.addEventListener(
  'input',
  debounce(e => {
    // console.log(e.target.value);

    const textarea = e.target;
    // console.log(textarea.value);

    localStorage.setItem('feedback', textarea.value);
  }, 1000),
);

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback');
});
