function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = 0;

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
stop.disabled = true;

const onStartBtnClick = () => {
  start.disabled = true;
  stop.disabled = false;
  document.body.style.backgroundColor = getRandomHexColor();

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const onStopBtnClick = () => {
  clearInterval(intervalId);
  stop.disabled = true;
  start.disabled = false;
};

start.addEventListener('click', onStartBtnClick);
stop.addEventListener('click', onStopBtnClick);