'use strict';
const toggles = document.querySelectorAll('.faq-toggle');
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
    console.log(toggle.parentNode);
    console.log(toggle);
  });
});
