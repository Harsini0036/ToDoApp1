let button = document.getElementById("add");
let todoList = document.getElementById("todoList");
let input = document.getElementById("input");

let todos = [];

window.onload = () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  //for displaying
  todos.forEach((todo) => addtodo(todo));
};

button.addEventListener("click", () => {
  if (input.value === "") return;
  todos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  addtodo(input.value);
  input.value = "";
});

function addtodo(todo) {
  let para = document.createElement("p");
  para.innerHTML = todo;
  todoList.appendChild(para);

  //deletion
  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    remove(todo);
  });
  para.addEventListener("dblclick", () => {
    todoList.removeChild(para);
    remove(todo);
  });
}

function remove(todo) {
  let index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);
  }
  //local storage storing todos array after removing items
  localStorage.setItem("todos", JSON.stringify(todos));
}
