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

// Refs
const refs = {
  gallery: document.querySelector(".js-gallery"),
  modal: document.querySelector(".js-lightbox"),
  modalImg: document.querySelector(".lightbox__image"),
  modalOverlay: document.querySelector(".lightbox__content"),
  modalCloseButton: document.querySelector(
    'button[data-action="close-lightbox"]'
  ),
};

// current image displayed in modal window
let currentImage = "";

/*
 * Rendering
 */

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
  fragm.appendChild(markup);
});

refs.gallery.appendChild(fragm);

/*
 * Handlers
 */

function handleModalOpen(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  refs.modalImg.setAttribute("src", e.target.dataset.source);
  refs.modalImg.setAttribute("alt", e.target.alt);
  openModal();
  currentImage = e.target.dataset.source;
}

function handleModalCloseOnButton(e) {
  if (e.target === refs.modalCloseButton) {
    closeModal();
  }
}

function handleModalCloseOnOverlay({ target, currentTarget }) {
  if (target === currentTarget) {
    closeModal();
  }
}

function handleModalCloseOnEsc(e) {
  if (e.code === "Escape") {
    closeModal();
  }
}

function handleModalSlider(e) {
  let nextImageData = "";

  if (e.code === "ArrowRight") {
    nextImageData = galleryItems.reduce((acc, el, id, arr) => {
      if (el.original === currentImage) {
        if (id === arr.length - 1) {
          acc = arr[0];
        } else {
          acc = arr[id + 1];
        }
      }
      return acc;
    }, 0);
  } else if (e.code === "ArrowLeft") {
    nextImageData = galleryItems.reduce((acc, el, id, arr) => {
      if (el.original === currentImage) {
        if (id === 0) {
          acc = arr[arr.length - 1];
        } else {
          acc = arr[id - 1];
        }
      }
      return acc;
    }, 0);
  } else {
    return;
  }

  currentImage = nextImageData.original;
  refs.modalImg.setAttribute("src", nextImageData.original);
  refs.modalImg.setAttribute("alt", nextImageData.description);
}

// Helpers
function openModal() {
  refs.modal.classList.add("is-open");
  refs.modal.addEventListener("click", handleModalCloseOnButton);
  refs.modalOverlay.addEventListener("click", handleModalCloseOnOverlay);
  window.addEventListener("keydown", handleModalCloseOnEsc);
  window.addEventListener("keydown", handleModalSlider);
}

function closeModal() {
  refs.modal.classList.remove("is-open");
  refs.modal.removeEventListener("click", handleModalCloseOnButton);
  refs.modalOverlay.removeEventListener("click", handleModalCloseOnOverlay);
  window.removeEventListener("keydown", handleModalCloseOnEsc);

  refs.modalImg.setAttribute("src", "");
  refs.modalImg.setAttribute("alt", "");
  currentImage = "";
}

refs.gallery.addEventListener("click", handleModalOpen);
