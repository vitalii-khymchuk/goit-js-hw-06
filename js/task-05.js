const refs = {
  textInput: document.querySelector("#name-input"),
  textOutput: document.querySelector("#name-output"),
};

const onInputChange = (event) => {
  event.currentTarget.value === ""
    ? (refs.textOutput.textContent = "Anonymous")
    : (refs.textOutput.textContent = event.currentTarget.value);
};

refs.textInput.addEventListener("input", onInputChange);
