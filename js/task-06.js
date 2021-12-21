const refs = {
  input: document.querySelector("#validation-input"),
};

const onInputValue = (event) => {
  refs.input.classList.add("invalid");

  if (event.currentTarget.value.length >= refs.input.dataset.length) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
  };
};
refs.input.addEventListener("blur", onInputValue);