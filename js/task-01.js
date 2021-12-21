const totalCategories = document.querySelector("#categories");
const resultCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", resultCategories.length);


[...resultCategories].forEach(item => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
})


//==================================================================
// let total = resultCategories.length;
// console.log(`Number of categories:`, total);


// const totalEl = document.querySelectorAll("h2");
// const resultEl = totalCategories.querySelectorAll("ul");

// const firstEl = totalEl[0].textContent;
// console.log(`Category: `, firstEl);
// const firstTotalRes = resultEl[0].querySelectorAll("li").length;
// console.log(`Elements: `, firstTotalRes);


// const secondEl = totalEl[totalEl.length-2].textContent;
// console.log(`Category: `, secondEl);
// const secondTotalRes = resultEl[1].querySelectorAll("li").length;
// console.log(`Elements: `, secondTotalRes);

// const thirdEl = totalEl[totalEl.length-1].textContent;
// console.log(`Category: `, thirdEl);
// const thirdTotalRes = resultEl[resultEl.length-1].querySelectorAll("li").length;
// console.log(`Elements: `, thirdTotalRes);



