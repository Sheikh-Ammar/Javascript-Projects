'use strict';

///////////////////////////////////////
// Modal window
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// OPNE CLOSE MODEL FUNCTIONALITY
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//----------------------------------------------------------------------//
//                          LECTURES PRASTICE                          //
//----------------------------------------------------------------------//
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
document.querySelector('.header');
let allSection = document.querySelectorAll('.section');
console.log(allSection);
let allButton = document.getElementsByTagName('button');
console.log(allButton);
//---------------------------- CREATE ELEMENTS ------------------------------//
//.insertAdjancentElement;
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies to add functionlaity and analytic. <button class="btn btn--close-cookie">Got It</button>';
header.prepend(message); //show message on top of header
//header.append(message); //show message on end of header
// header.append(message.cloneNode(true)); //show message on top and end of header
//---------------------------- DELETE ELEMENTS ------------------------------//
console.log(document.getElementsByTagName('button'));
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //message.parentElement.removeChild(message);
  });
//---------------------------- CSS STYLING ------------------------------//
message.style.backgroundColor = '#'
