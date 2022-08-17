const loginFormRef = document.querySelector(".login-form");

const saveInputData = (email, password) => {
  const inputData = {};
  inputData.email = email;
  inputData.password = password;
  console.log(inputData);
};

const clearInput = (event) => {
  event.currentTarget.elements.email.value = "";
  event.currentTarget.elements.password.value = "";
};

const onLoginFormSubmit = (event) => {
  event.preventDefault();
  const formEmailValue = event.currentTarget.elements.email.value;
  const formPasswordValue = event.currentTarget.elements.password.value;

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
