const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    addToDo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addToDo();
});

function addToDo(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }
  if (todoText) {
    const todoEl = document.createElement("li");

    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;
    todosUL.appendChild(todoEl);
    input.value = "";

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      uptadeLs();
    });
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      uptadeLs();
    });
  }
  uptadeLs();
}
function uptadeLs() {
  const todoEl = document.querySelectorAll("li");
  const todos = [];
  todoEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
