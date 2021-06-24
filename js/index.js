const timer = new Timer();
timer.reset();

const action = (action = 'stop') => {
  switch (action.toLowerCase()) {
    case 'start':
      timer.start();
      break;
    default:
      timer.stop();
      break;
  }
};

// navigation
const navLinks = document.querySelectorAll('.nav > ul > li');
const navBg = document.getElementById('indicator');

navLinks.forEach((navItem, i) => {
  navItem.addEventListener('click', () => {
    navLinks.forEach((link) => {
      link.classList.remove('active');
      navBg.style.marginLeft = `calc(calc(100% / 3) * ${i})`;
      navItem.classList.add('active');
    });
  });
});
