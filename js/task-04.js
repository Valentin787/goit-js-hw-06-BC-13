const refs = {
  buttonDecrement: document.querySelector("button[data-action=decrement]"),
  buttonIncrement: document.querySelector("button[data-action=increment]"),
  span: document.querySelector("#value")
}
console.log(refs.buttonDecrement);
console.log(refs.buttonIncrement);
console.log(refs.span);

let result = 0;

refs.buttonDecrement.addEventListener("click", event => {

   result -= event.pointerId;
  return refs.span.textContent = result;

});


refs.buttonIncrement.addEventListener("click", event => {

  result += event.pointerId;
  return refs.span.textContent = result;


  

});


