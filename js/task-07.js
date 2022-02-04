const fontSizeControlRef = document.querySelector('#font-size-control');
// console.log(fontSizeControlRef);
const textRef = document.querySelector('#text');
// console.log(textRef);

fontSizeControlRef.addEventListener('input', () => { 
    textRef.style.fontSize = fontSizeControlRef.value + 'px';
});