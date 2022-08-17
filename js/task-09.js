const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  currentColorWidget: document.querySelector(".color"),
  body: document.querySelector("body"),
};

const onChangeColorBtn = () => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.currentColorWidget.textContent = color;
};

refs.changeColorBtn.addEventListener("click", onChangeColorBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
