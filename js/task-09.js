function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
};

const selectors = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

selectors.button.addEventListener('click', handlerClick);

function handlerClick() {
  selectors.body.style.backgroundColor = selectors.span.textContent = getRandomHexColor();
};