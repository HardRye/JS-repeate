const nav = document.querySelector(".js-nav");
nav.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  // console.log(e.target);
  // console.log(e.currentTarget);

  if (e.target === e.currentTarget) {
    return;
  }

  const activeLink = e.currentTarget.querySelector(".nav__link--active");

  // console.log(activeLink);
  if (activeLink) {
    activeLink.classList.remove("nav__link--active");
  }

  e.target.classList.add("nav__link--active");
}
