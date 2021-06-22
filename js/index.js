let timer = new Timer();
timer.reset();

switch(timer.action.innerText) {
    case "stop":
        timer.start();
        break;
    default :
        timer.stop();
        break;
}


