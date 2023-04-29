const todoBtn = document.getElementById("todo_button");
const toDoDiv = document.getElementById("todo_list");
const toDoForm = document.getElementById("todo_form");
const toDo = document.getElementById("todo");
const toDoList = toDoDiv.querySelector("ul")

const MAINTODOS_KEY = "todos";

let toDos = [];
let isActivated = false;

const handleTodoClick = () => {
    isActivated = !isActivated;
    isActivated ? toDoDiv.classList.remove("hidden") : toDoDiv.className = "hidden"
}

function saveToDos() {
    localStorage.setItem(MAINTODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDo.value;
    toDo.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

const savedTodos = localStorage.getItem(MAINTODOS_KEY);

if(savedTodos !== null){
    toDos = JSON.parse(savedTodos);
    toDos.forEach(paintToDo);
}

toDoForm.onsubmit = handleToDoSubmit;
todoBtn.onclick = handleTodoClick;




