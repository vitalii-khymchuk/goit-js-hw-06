const inputRef = document.querySelector("#validation-input");

const changeClass = (newClass, oldClass) => {
  inputRef.classList.add(newClass);
  inputRef.classList.remove(oldClass);
};

const onInputValidation = (event) => {
  Number(inputRef.dataset.length) === Number(event.currentTarget.value.length)
    ? changeClass("valid", "invalid")
    : changeClass("invalid", "valid");
};

inputRef.addEventListener("blur", onInputValidation);
