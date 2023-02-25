const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const valueClick = document.getElementById("value");
let counterValue = 0;
decrement.addEventListener("click", decrementHendleClick);
increment.addEventListener("click", incrementHendleClick);

function decrementHendleClick(event) {
    valueClick.textContent = counterValue -= 1;  
};

function incrementHendleClick(event) {
    valueClick.textContent = counterValue += 1;
};
