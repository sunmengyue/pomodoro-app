let timer = new Timer();
timer.reset();
const navLinks = document.querySelectorAll('nav div');

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

const toggleThemeColor = (colorSet) => {
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      toggleActiveLinks(e.currentTarget);
      console.log(e.currentTarget.backgroundColor);
      console.log(getComputedStyle(e.currentTarget).backgroundColor);
    });
  });

  function toggleActiveLinks(target) {
    navLinks.forEach((item) => {
      item.classList.remove('active');
    });
    target.classList.add('active');
    target.backgroundColor = colorSet;
    // console.log(target.backgroundColor);
  }
};
