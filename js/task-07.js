const fontSizeControlRef = document.querySelector('#font-size-control');
// console.log(fontSizeControlRef);
const textRef = document.querySelector('#text');
// console.log(textRef);

textRef.style.fontSize = fontSizeControlRef.value + 'px';

fontSizeControlRef.addEventListener('input', (event) => { 
    textRef.style.fontSize = event.currentTarget.value + 'px';
});