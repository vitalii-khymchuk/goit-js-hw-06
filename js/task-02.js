const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("ul#ingredients");

const makeIngredientMarkup = (ingredient) => {
  const ingredientElement = document.createElement("li");
  ingredientElement.classList.add("item");
  ingredientElement.textContent = ingredient;
  return ingredientElement;
};

const ingredientsMarkup = ingredients.map(makeIngredientMarkup);

ingredientsListRef.append(...ingredientsMarkup);

// Заборонений спосіб з парсом строки))

// const ingredientsListRef = document.querySelector("ul#ingredients");

// const ingredientsMarkup = ingredients
//   .map((ingredient) => {
//     return `<li class = "item">${ingredient}</li>`;
//   })
//   .join("");

// ingredientsListRef.innerHTML = ingredientsMarkup;
