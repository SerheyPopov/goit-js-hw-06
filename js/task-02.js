const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
ingredients.forEach(value => {
  const items = document.createElement('li');
  items.textContent = value;
  items.classList = 'item';
  list.append(items);
});




//const items = document.querySelector("#ingredients");
//const markup = ingredients.map((ingredient) => `<li li class= "item" > ${ ingredient }</li >`).join("");
//items.innerHTML = markup;
