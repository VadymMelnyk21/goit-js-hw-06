function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes');
const createRef = document.querySelector('[data-create]');
const destroyRef = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('#controls').firstElementChild;

createRef.addEventListener('click', takeInput);

function takeInput() {
  const amount = inputRef.value;
  createBoxes(amount);
};

function createBoxes(amount) { 
  const firstBox = 30;
  const nextBoxes = [];

  for (let i = 0; i < amount; i += 1) { 
    const divEl = document.createElement('div');
    divEl.style.width = firstBox + i * 10 + 'px';
    divEl.style.height = firstBox + i * 10 + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    nextBoxes.push(divEl);
  };
  boxesRef.append(...nextBoxes);
};

destroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes() { 
  boxesRef.innerHTML = '';
};