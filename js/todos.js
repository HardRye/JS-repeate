const todos = {
  items: [],
  addItem(text) {
    const todo = {
      id: Date.now(),
      text,
    };
    this.items.push(todo);
    return todo;
  },
  deleteItem(id) {
    this.items = this.items.filter((el) => el.id !== id);
    console.log(this.items);
  },
};

const refs = {
  editor: document.querySelector(".js-editor"),
  todoList: document.querySelector(".js-todo-list"),
};

refs.editor.addEventListener("submit", handleEditorSubmit);
refs.todoList.addEventListener("click", handleTodoListClick);

function handleEditorSubmit(e) {
  e.preventDefault();
  // console.log(e.currentTarget.elements);

  const form = e.currentTarget;
  const inputValue = form.elements.text.value;

  // console.log(inputValue);

  const todo = todos.addItem(inputValue);
  console.log(todos);
  console.log(todo);

  const todoMarkup = buildTodoItem(todo);
  console.log(todoMarkup);

  appendTodoItem(refs.todoList, todoMarkup);
  form.reset();
}

function buildTodoItem(item) {
  return `  
  <li class="todo-list__item" data-id="${item.id}">
  <div class="todo">
    <p class="todo__text">${item.text}</p>
    <div class="todo__actions">
      <button class="button" type="button">Удалить</button>
    </div>
  </div>
</li>`;
}

function appendTodoItem(parrentRef, markup) {
  parrentRef.insertAdjacentHTML("beforeend", markup);
}

function handleTodoListClick(e) {
  console.log(e.target.nodeName);

  if (e.target.nodeName !== "BUTTON") return;

  const button = e.target;
  const li = button.closest("li.todo-list__item");
  console.log(li);

  const todoId = li.dataset.id;
  todos.deleteItem(Number(todoId));

  li.remove();
}
