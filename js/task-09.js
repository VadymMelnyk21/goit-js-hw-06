function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColorRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', changeColor);

function changeColor() { 
  const colorRandom = getRandomHexColor();

  document.body.style.backgroundColor = colorRandom;

  spanColorRef.textContent = colorRandom;
};