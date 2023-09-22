const main = () => {
  const todoInput = document.getElementById("todo");
  const todoButton = document.getElementById("add-list");
  const todoList = document.getElementById("todolist");

  todoButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");
    newList.textContent = todoInput.value;
    todoList.appendChild(newList);
  });
  todoList.addEventListener("click", (e) => {
    // * If user click LI, toggle class "checked" to the <li> tag
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
