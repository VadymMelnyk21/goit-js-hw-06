const decrementRef = document.querySelector('[data-action="decrement"]');
// console.log(decrementRef);
const incrementRef = document.querySelector('[data-action="increment"]');
// console.log(incrementRef);
const valueRef = document.querySelector('#value');
// console.log(valueRef);

let counterValue = 0;

decrementRef.addEventListener('click', event => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});

incrementRef.addEventListener('click', event => {
    counterValue += 1;
    valueRef.textContent = counterValue;
});
