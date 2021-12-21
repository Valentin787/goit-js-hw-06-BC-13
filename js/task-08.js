const refs = {
  form: document.querySelector(".login-form"),
  inputEml: document.querySelector("[type=email]"),
  inputPwr: document.querySelector("[type=password]"),
  button: document.querySelector("[type=submit]")
}

const onSendInfo = (event) => {
  event.preventDefault();

  const inputValueEmail = event.srcElement.elements.email.value;
  const inputValuePassword = event.srcElement.elements.password.value;

  const elements = {
    email: inputValueEmail,
    password: inputValuePassword,
  };

  
  if (elements.email.length === 0 || elements.password.length === 0) {
    return alert("Заполните -->please--> все поля!!!")
  }
  console.log(` " Прошу, ==> ваш EMAIL: ${elements.email} и PASSWORD: ${elements.password} !! :) " `);
  event.currentTarget.reset();
}

refs.form.addEventListener("submit", onSendInfo);