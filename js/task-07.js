const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

console.log(refs.input.min);

const onInputChange = (event) => {
  let str = `${event.currentTarget.value}px`;
  refs.span.style.fontSize = str;

};


refs.input.addEventListener("click", onInputChange);