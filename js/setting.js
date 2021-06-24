const close = document.getElementById('close');
const upArrow = document.querySelector('.fa-angle-up');
const downArrow = document.querySelector('.fa-angle-down');
const kumbhBtn = document.getElementById('kumbh');
const roboBtn = document.getElementById('roboto-slab');
const spaceBtn = document.getElementById('space-mono');
const orangeBtn = document.getElementById('orange');
const cyanBtn = document.getElementById('cyan');
const purpleBtn = document.getElementById('purple');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');
const gear = document.querySelector('.settings');

// open modal
gear.addEventListener('click', (e) => {
  modal.classList.remove('hide');
  container.classList.add('hide');
});

// close modal
close.addEventListener('click', (e) => {
  modal.classList.add('hide');
  container.classList.remove('hide');
});

// adjust time
