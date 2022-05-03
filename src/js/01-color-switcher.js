const body = document.querySelector('body');
let intervalId = null;

body.addEventListener('click', onBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startInterval() {
  body.style.backgroundColor = getRandomHexColor();
}

function onBtnClick(element) {
  if (element.target.textContent === 'Start') {
    element.target.disabled = true;
    element.target.nextElementSibling.disabled = false;
    intervalId = setInterval(() => {
      startInterval();
    }, 1000);
  } else {
    clearInterval(intervalId);
    element.target.disabled = true;
    element.target.previousElementSibling.disabled = false;
    intervalId = null;
  }
}

