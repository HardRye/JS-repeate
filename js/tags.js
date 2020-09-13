const tagList = document.querySelector(".js-tags");

tagList.addEventListener("click", handleClick);

function handleClick(e) {
  // e.target - element where clicked
  // e.currentTarget - element where listener settled
  if (e.target === e.currentTarget) {
    return;
  }

  const el = e.target;
  // console.log(el);

  el.classList.toggle("tags__item--active");
}
