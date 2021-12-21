const totalCategories = document.querySelector("#categories");
const resultCategories = document.querySelectorAll("li.item");
let total = resultCategories.length;
console.log(`Number of categories:`, total);


const totalEl = document.querySelectorAll("h2");
const resultEl = totalCategories.querySelectorAll("ul");

const firstEl = totalEl[0].textContent;
console.log(`Category: `, firstEl);
const firstTotalRes = resultEl[0].querySelectorAll("li").length;
console.log(`Elements: `, firstTotalRes);


const secondEl = totalEl[totalEl.length-2].textContent;
console.log(`Category: `, secondEl);
const secondTotalRes = resultEl[1].querySelectorAll("li").length;
console.log(`Elements: `, secondTotalRes);

const thirdEl = totalEl[totalEl.length-1].textContent;
console.log(`Category: `, thirdEl);
const thirdTotalRes = resultEl[resultEl.length-1].querySelectorAll("li").length;
console.log(`Elements: `, thirdTotalRes);