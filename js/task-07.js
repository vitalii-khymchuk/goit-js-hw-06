const refs = {
  inputRange: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const onFontSizeInput = (event) => {
  let fontSize = event.currentTarget.value;
  refs.text.style.fontSize = `${fontSize}px`;
};

refs.inputRange.addEventListener("input", onFontSizeInput);
