const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];



const items = document.querySelector("#ingredients");
const markup = ingredients
	.map((ingredient) => `<li li class= "item" > ${ingredient}</li >`)
	.join("");
items.innerHTML = markup;
