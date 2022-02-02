const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');
console.log(ingredientsListRef);

ingredients.forEach(ingredient => {
  
  const item = document.createElement('li');
  item.innerHTML = ingredient;
  item.classList.add('item');

  ingredientsListRef.append(item);
  });
