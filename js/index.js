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
