const focusForm = document.getElementById("main-focus__form");
const focusInput = focusForm.querySelector("input");
const focusDiv = document.getElementById("main-focus__text");
const focusSpan = focusDiv.querySelector("span");
const editBtn = focusDiv.querySelector("i");

const MAINFOCUS_KEY = "main_focus";

function handleFocusSubmit(event) {
    event.preventDefault();
    const newFocus = focusInput.value;
    localStorage.setItem(MAINFOCUS_KEY, newFocus);
    paintFocus(newFocus);
}

function paintFocus(newFocus){
    focusSpan.innerText = newFocus;
    focusDiv.classList.remove("hidden");
    focusForm.className = "hidden";
}

const savedFocus = localStorage.getItem(MAINFOCUS_KEY);

if(savedFocus !== null){
    paintFocus(savedFocus);
}

function handleCheckClick(){
    const checkbox = focusDiv.querySelector("input");
    checkbox.checked = false;
    focusDiv.className = "hidden";
    focusForm.classList.remove("hidden");
}

focusForm.addEventListener("submit", handleFocusSubmit);
editBtn.onclick = handleCheckClick;