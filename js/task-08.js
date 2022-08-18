const loginFormRef = document.querySelector(".login-form");

const saveInputData = (email, password) => {
  const inputData = {};
  inputData.email = email;
  inputData.password = password;
  console.log(inputData);
};

const clearInput = (event) => {
  loginFormRef.reset();
};

const onLoginFormSubmit = (event) => {
  event.preventDefault();
  const formEmailValue = event.currentTarget.elements.email.value.trim();
  const formPasswordValue = event.currentTarget.elements.password.value.trim();

  const isFormFilledCorrect =
    !(formEmailValue === "") && !(formPasswordValue === "");

  if (isFormFilledCorrect) {
    saveInputData(formEmailValue, formPasswordValue);
    clearInput(event);
  } else {
    alert("Всі поля повинні бути заповнені не халтурь))");
  }
};

loginFormRef.addEventListener("submit", onLoginFormSubmit);
