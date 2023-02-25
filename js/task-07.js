const inputSlider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputSlider.addEventListener('input', changeFont);

function changeFont(event) {
    const size = event.currentTarget.value;
    text.style.fontSize = event.target.value + "px";
};