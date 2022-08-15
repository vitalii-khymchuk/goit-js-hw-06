const categoriesRef = document.querySelectorAll("li.item");

const categoriesInfo = (categoriesRef) => {
  console.log(`Number of categories: ${categoriesRef.length}`);

  Array.from(categoriesRef).map((category) => {
    const nameOfCategory = category.firstElementChild.textContent;
    const elementsInCategory = category.lastElementChild.children.length;
    console.log(`Category: ${nameOfCategory}`);
    console.log(`Elements: ${elementsInCategory}`);
  });
};

categoriesInfo(categoriesRef);
