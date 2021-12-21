function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color")
}

const onChangeColor = (event) => {
  
  document.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = document.body.style.backgroundColor 

}
refs.btn.addEventListener("click", onChangeColor);
