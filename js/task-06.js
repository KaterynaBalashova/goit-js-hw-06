const input = document.querySelector('#validation-input');

input.addEventListener('blur', handlerBlur);

function handlerBlur() {
    const textLength = input.getAttribute('data-length');

    if (Number(input.value.length) === Number(textLength)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
         
};