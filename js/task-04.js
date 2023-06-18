const counterEl = document.querySelector('#value');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');

buttonIncrement.addEventListener('click', handlerIncrement);
buttonDecrement.addEventListener('click', handlerDecrement);

let counterValue = 0;

function handlerIncrement() {
    counterValue += 1;
    counterEl.textContent = counterValue;
    
};

function handlerDecrement() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
    
};

