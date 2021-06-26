const modal = document.querySelector('.modal');
const close = document.getElementById('close');
const upArrows = document.querySelectorAll('.fa-angle-up');
const downArrows = document.querySelectorAll('.fa-angle-down');
const timeInputs = document.querySelectorAll(
  '#pomodoro, #short__break, #long__break',
);

const fontBtns = document.querySelectorAll('.font > button');
const colorBtns = document.querySelectorAll('.color > button');
const container = document.querySelector('.container');
const gear = document.querySelector('.settings');
const apply = document.querySelector('#apply');

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

/* Change Settings -- Modal Theme */
fontBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    toggleActiveBtns(e.currentTarget);
  });
});
// helper function
function toggleActiveBtns(target) {
  fontBtns.forEach((btn) => {
    btn.classList.remove('font-active');
  });
  target.classList.add('font-active');
}

// adjust time
upArrows.forEach((arrow) => {
  arrow.addEventListener('click', (e) => {
    timeInputs.forEach((input) => {
      if (e.currentTarget.classList.contains(input.id)) {
        input.value++;
      }
    });
  });
});

downArrows.forEach((arrow) => {
  arrow.addEventListener('click', (e) => {
    timeInputs.forEach((input) => {
      if (e.currentTarget.classList.contains(input.id)) {
        input.value--;
      }
    });
  });
});

// adjust font
fontBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('roboto-slab')) {
      modal.style.fontFamily = "'Roboto Slab', serif";
    } else if (e.currentTarget.classList.contains('space-mono')) {
      modal.style.fontFamily = "'Space Mono', serif";
    } else {
      modal.style.fontFamily = "'Kumbh Sans', sans-serif";
    }
  });
});

// adjust color
colorBtns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    toggleActiveColorBtn(e.currentTarget);
    // change colorgroups
    switch (btn.id) {
      case 'cyan':
        apply.style.backgroundColor = `var(--cyan)`;
        break;
      case 'purple':
        apply.style.backgroundColor = `var(--purple)`;
        break;
      default:
        apply.style.backgroundColor = `var(--orange)`;
        break;
    }
  }),
);
// helper function
function toggleActiveColorBtn(target) {
  for (let btn of colorBtns) {
    btn.classList.remove('color-active');
  }
  target.classList.add('color-active');
}

/* Change Settings -- Clock Theme */
