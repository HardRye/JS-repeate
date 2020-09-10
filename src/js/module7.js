"use strict";

/*
 * q-selectors
 */

// console.log(document);

// querySelector для выбора уникального элемента
// выбирает первое совпадение как Array.find
const button = document.querySelector(".button");
const image = document.querySelector(".unsplash-image");
const menuItem = document.querySelector(".menu-item");
// querySelectorAll для выбора всех элементов удовлетворяющих условия селектора
// как Array.filter
const menuItemAll = document.querySelectorAll(".menu-item");

console.dir(button);

console.log(button.textContent);
button.textContent = "Hello";

console.log(image.src);
const changeImage = () => {
  // image.src = "https://picsum.photos/id/237/200/300";
  image.setAttribute("src", "https://picsum.photos/id/237/200/300");
};

const homeMenuItem = document.querySelector(".menu-item");

const setActiveItem = () => {
  homeMenuItem.classList.add("active");
};

const toggleActiveItem = () => {
  homeMenuItem.classList.toggle("active");
};

homeMenuItem.addEventListener("hover", setActiveItem);

button.addEventListener("click", () => {
  changeImage();
  // setActiveItem();
  toggleActiveItem();
});
