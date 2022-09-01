'use strict';
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', (e) => {
    panels.forEach((p) => {
      p.classList.remove('active');
    });
    e.target.classList.add('active');
  });
});
