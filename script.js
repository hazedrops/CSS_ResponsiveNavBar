'use strict';

const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.navMenu');
const socialMedia = document.querySelector('.socialMedia');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  socialMedia.classList.toggle('active');
});