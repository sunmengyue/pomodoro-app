let timer = new Timer();

switch(timer.action.innerText) {
    case "stop":
        timer.start();
        break;
    default :
        timer.stop();
        break;
}


