const openModalButton = document.querySelector(
  'button[data-action="open-modal"]'
);
const closeModalButton = document.querySelector(
  'button[data-action="close-modal"]'
);

const backdrop = document.querySelector(".js-backdrop");

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", backdropHandler);

function openModal() {
  document.body.classList.add("show-modal");
  window.addEventListener("keydown", handleKeydown);
}

function closeModal() {
  document.body.classList.remove("show-modal");
  window.removeEventListener("keydown", handleKeydown);
}

function backdropHandler(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModal();
}

function handleKeydown(e) {
  if (e.code === "Escape") {
    closeModal();
  }
}
