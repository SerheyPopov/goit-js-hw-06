const inputName = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
inputName.addEventListener("input", (event) => {
    userName.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value
});


