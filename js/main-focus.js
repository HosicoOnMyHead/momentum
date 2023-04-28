const focusForm = document.getElementById("main-focus__form");
const focusInput = focusForm.querySelector("input");
const focusDiv = document.getElementById("main-focus__text");
const focusSpan = focusDiv.querySelector("span");
const editBtn = focusDiv.querySelector("i");

const MAINTODOS_KEY = "main_focus";

function handleSubmit(event) {
    event.preventDefault();
    const newFocus = focusInput.value;
    localStorage.setItem(MAINTODOS_KEY, newFocus);
    paintFocus(newFocus);
}

function paintFocus(newFocus){
    focusSpan.innerText = newFocus;
    focusDiv.classList.remove("hidden");
    focusForm.className = "hidden";
}

focusForm.addEventListener("submit", handleSubmit);

const savedFocus = localStorage.getItem(MAINTODOS_KEY);

if(savedFocus !== null){
    paintFocus(savedFocus);
}

function handleClick(){
    const checkbox = focusDiv.querySelector("input");
    checkbox.checked = false;
    focusDiv.className = "hidden";
    focusForm.classList.remove("hidden");
}

editBtn.onclick = handleClick;