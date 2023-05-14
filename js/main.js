const modeBtn = document.querySelector('.mode-btn');
const body = document.querySelector('body');

modeBtn.addEventListener('click', (evt) => {
  body.classList.toggle('dark')
})