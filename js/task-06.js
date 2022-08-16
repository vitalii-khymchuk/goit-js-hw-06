const inputRef = document.querySelector("#validation-input");

const onInputValidation = (event) => {
  if (
    Number(inputRef.dataset.length) === Number(event.currentTarget.value.length)
  ) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", onInputValidation);
