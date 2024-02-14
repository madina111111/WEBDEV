const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");
const deleteButton = document.getElementById("deleteButton");

function addTodo() {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", toggleDone);
  const label = document.createElement("label");
  label.textContent = todoInput.value;
  li.appendChild(checkbox);
  li.appendChild(label);
  todoList.appendChild(li);
  todoInput.value = "";
}

function toggleDone(event) {
  const checkbox = event.target;
  const label = checkbox.nextElementSibling;

  if (checkbox.checked) {
    label.classList.add("done");
  } else {
    label.classList.remove("done");
  }
}

function deleteTodo() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkboxes[i].parentNode.remove();
    }
  }
}


addButton.addEventListener("click", addTodo);
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTodo();
  }
});
deleteButton.addEventListener("click", deleteTodo);