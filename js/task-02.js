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

const addList = ingredients.map(ingredient => {
  
  const item = document.createElement('li');
  item.innerHTML = ingredient;
  item.classList.add('item');

  return item;
  });

  ingredientsListRef.append(...addList);