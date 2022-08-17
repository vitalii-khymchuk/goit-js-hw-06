const loginFormRef = document.querySelector(".login-form");

const saveInputData = (email, password) => {
  const inputData = {};
  inputData.email = email;
  inputData.password = password;
  console.log(inputData);
};

const onLoginFormSubmit = (event) => {
  event.preventDefault();
  const formEmail = event.currentTarget.elements.email.value;
  const formPassword = event.currentTarget.elements.password.value;
  const isFormFilledCorrect = !(formEmail === "") && !(formPassword === "");

  isFormFilledCorrect
    ? saveInputData(formEmail, formPassword)
    : alert("Всі поля повинні бути заповнені не халтурь))");
};

loginFormRef.addEventListener("submit", onLoginFormSubmit);
