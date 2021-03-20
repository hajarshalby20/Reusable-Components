'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const closeModelBtn = document.querySelector('.close-modal');
const openModelBtns = document.querySelectorAll('.show-modal');

const openModel = () => {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

const closeModel = () => {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < openModelBtns.length; i++) {
  openModelBtns[i].addEventListener('click', openModel);
}

closeModelBtn.addEventListener('click', closeModel);
overLay.addEventListener('click', closeModel);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});

