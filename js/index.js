let timer = new Timer();
timer.reset();

const control = (action) => {
  switch (action.toLowerCase()) {
    case 'start':
      timer.start();
      break;
    default:
      timer.stop();
      break;
  }
};

const navLinks = document.querySelectorAll('nav div');
for (let link of navLinks) {
  link.addEventListener('click', (e) => {
    toggleActiveLink(e.currentTarget);
  });
}
function toggleActiveLink(targetLink) {
  for (let link of navLinks) {
    link.classList.remove('active');
  }
  targetLink.classList.add('active');
}
