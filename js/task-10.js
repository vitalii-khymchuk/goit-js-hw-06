const refs = {
  inputNumber: document.querySelector("#controls input"),
  createMarkupBtn: document.querySelector("[data-create]"),
  destroyMarkupBtn: document.querySelector("[data-destroy]"),
  markupWrapper: document.querySelector("#boxes"),
};

let numberOfMarkup = 0;

const onInputNumber = (event) => {
  numberOfMarkup = event.currentTarget.value;
};

const addMarkupToDocument = (markup) => (refs.markupWrapper.innerHTML = markup);

const onCreateMarkupBtn = () => {
  let width = 30;
  let height = 30;
  let markup = `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`;

  for (let i = 1; i < numberOfMarkup; i += 1) {
    width += 10;
    height += 10;
    markup += `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  addMarkupToDocument(markup);
};

const clearMarkup = () => {
  refs.markupWrapper.innerHTML = "";
};

refs.createMarkupBtn.addEventListener("click", onCreateMarkupBtn);
refs.inputNumber.addEventListener("input", onInputNumber);
refs.destroyMarkupBtn.addEventListener("click", clearMarkup);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
