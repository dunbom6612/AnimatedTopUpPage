const card = document.querySelector('.card');
const modal = document.querySelector('#modal');
const backdrop = document.querySelector('#backdrop');

const closeBtnModal = modal.querySelector('.modal__close-btn');

const agreeBtnModal = modal.querySelector('.modal__agree-btn');

closeBtnModal.onclick = () => {
  modal.classList.remove('active');
  backdrop.classList.remove('active');
};

agreeBtnModal.onclick = () => {
  modal.classList.remove('active');
  backdrop.classList.remove('active');
};

// ---------- event onclick card ----------?
card.onclick = () => {
  card.classList.add('active');

  card.addEventListener('animationend', animationEndCallback);
};

var animationEndCallback = (e) => {
  card.removeEventListener('animationend', animationEndCallback);
  modal.classList.add('active');
  backdrop.classList.add('active');
};
