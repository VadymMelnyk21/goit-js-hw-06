const validationInputRef = document.querySelector('#validation-input');
// console.log(validationInputRef);

validationInputRef.addEventListener('blur', validationProof);

function validationProof(event) { 
    const inputLength = event.currentTarget.value.length;
    const dataLength = event.currentTarget.dataset.length;

    if (inputLength == dataLength) {
        this.classList.add('valid');
        this.classList.remove('invalid');
    } else { 
        this.classList.add('invalid');
        this.classList.remove('valid');
    }
};