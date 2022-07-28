'use strict';

// VARIBALES THAT STORE DATA
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalCloseBtn = document.querySelector('.close-modal');
const modalOpenBtn = document.querySelectorAll('.show-modal');

// OPEN MODAL FUN()
const openModalFunctionality = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// LOOP FOR EACH MODAL
for (let i = 0; i < modalOpenBtn.length; i++) {
  modalOpenBtn[i].addEventListener('dblclick', openModalFunctionality);
}

// CLOSE MODAL FUN()
const closeModalFunctionality = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// CALL CLOSE MODAL FUN() ON CROSS ARROW AND OVERLAY
modalCloseBtn.addEventListener('click', closeModalFunctionality);
overlay.addEventListener('click', closeModalFunctionality);

// Esc KEY TO CLOSE MODAL
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModalFunctionality();
    }
  }
});
