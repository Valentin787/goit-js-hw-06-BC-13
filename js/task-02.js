const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const totalRfs = document.querySelector("#ingredients");

const totalEL = ingredients.map((ingredient) => {
  const createEL = document.createElement("li");
  createEL.textContent = ingredient;
  createEL.classList.add("item");
  
  return createEL

})

 totalRfs.append(...totalEL);

console.log(totalRfs);
