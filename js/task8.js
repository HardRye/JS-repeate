// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");

controls.addEventListener("click", handleButtons);

function handleButtons({ target }) {
  console.dir(target);

  if (target.dataset.action === "render") {
    boxes.innerHTML = "";
    const inputValue = target.previousElementSibling.value;

    if (inputValue) {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < Number(inputValue); i += 1) {
        const box = document.createElement("div");
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, ${Math.round(
          Math.random() * 255
        )})`;
        fragment.appendChild(box);
      }
      boxes.append(fragment);
    }
  }

  if (target.dataset.action === "destroy") {
    boxes.innerHTML = "";
  }
}
