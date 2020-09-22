import Theme from '../assets/theme';

const refs = {
  themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
};

if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', Theme.LIGHT);
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme === Theme.LIGHT) {
  document.body.classList.add(Theme.LIGHT);
} else {
  refs.themeSwitchToggle.checked = true;
  document.body.classList.add(Theme.DARK);
}

function themeChange({ target }) {
  console.log(target.checked);
  if (target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

refs.themeSwitchToggle.addEventListener('change', themeChange);
