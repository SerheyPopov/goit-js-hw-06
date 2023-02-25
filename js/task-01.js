const menu = document.querySelectorAll(`.item`);
console.log(`Number of categories: `+ menu.length);

menu.forEach((element) => {
    console.log(`Category: ` + element.firstElementChild.textContent);
    console.log(`Elements: ` + element.lastElementChild.children.length); 
});
