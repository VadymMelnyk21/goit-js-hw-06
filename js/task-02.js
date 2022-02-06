const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');
// console.log(ingredientsListRef);
const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');

  fragment.appendChild(item);
});
  
ingredientsListRef.appendChild(fragment);