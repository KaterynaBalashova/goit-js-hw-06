const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

input.addEventListener('input', handlerChangeTextSize);

function handlerChangeTextSize() {
    spanText.style.fontSize = `${input.value}px`;
};
