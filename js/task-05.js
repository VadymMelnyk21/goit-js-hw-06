let inputRef = document.querySelector('#name-input');
// console.log(inputRef);
let spanOutputRef = document.querySelector('#name-output');
// console.log(spanOutputRef);

inputRef.addEventListener('input', event => {
    inputRef = event.currentTarget.value;

    if (inputRef === '') {
        spanOutputRef.innerHTML = 'Anonymous';
    } else { 
        spanOutputRef.innerHTML = inputRef;
    }
});