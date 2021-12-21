const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output")
};

refs.input.addEventListener("input", onInputSave);


function onInputSave(event) {
  
  if (event.currentTarget.value !== Number && event.currentTarget.value.length >= 0) {
    refs.span.textContent = event.currentTarget.value;
    
  };
  if (event.currentTarget.value.length === 0) {
    refs.span.textContent = "Anonymous";
    
  }
  return refs.span.textContent
}

