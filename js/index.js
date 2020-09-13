// Задание
// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.

// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки (это необходимо для доступности).

{
  /* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */
}

// Дополнительно
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

// Source
import galleryItems from "../gallery-items.js";
// console.log(galleryItems);

// Refs
const refs = {
  gallery: document.querySelector(".js-gallery"),
  modal: document.querySelector(".js-lightbox"),
};
// console.log(gallery);

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const createMarkup = function (obj) {
  const { preview, original, description } = obj;
  const item = document.createElement("li");
  item.classList.add("gallery__item");
  const itemMarkup = `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
  item.insertAdjacentHTML("beforeend", itemMarkup);
  return item;
};

const fragm = document.createDocumentFragment("dir");
galleryItems.forEach((el) => {
  const markup = createMarkup(el);
  // console.log(markup);
  fragm.appendChild(markup);
});

refs.gallery.appendChild(fragm);

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

function handleClick(e) {
  e.preventDefault();
  // console.dir(e.target);
  if (e.target.nodeName === "IMG") {
    openModal();
    const modalImg = refs.modal.querySelector(".lightbox__image");
    // console.log(modalImg);
    modalImg.setAttribute("src", e.target.dataset.source);
    modalImg.setAttribute("alt", e.target.alt);
  }
}

function openModal() {
  refs.modal.classList.add("is-open");
  window.addEventListener("keydown", handleModalCloseOnEsc);
}

function closeModal() {
  refs.modal.classList.remove("is-open");
  window.removeEventListener("keydown", handleModalCloseOnEsc);
}

function handleModalCloseOnClick(e) {
  const button = refs.modal.querySelector(
    'button[data-action="close-lightbox"]'
  );
  // console.dir(e.target);
  // console.dir(e.target.parentNode);
  // console.dir(e.currentTarget);
  // console.dir(e.currentTarget.parentNode);

  if (e.target === button || e.target.parentNode === refs.modal) {
    closeModal();
  }
}

function handleModalCloseOnEsc(e) {
  if (e.code === "Escape") {
    closeModal();
  }
}

refs.gallery.addEventListener("click", handleClick);
refs.modal.addEventListener("click", handleModalCloseOnClick);
