const inputName = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');

inputName.addEventListener('input', handlerEnterText);

function handlerEnterText() {
    textEl.textContent = inputName.value.trim();
    if (!inputName.value.trim()) {
        textEl.textContent = 'Anonymous';
    };
};