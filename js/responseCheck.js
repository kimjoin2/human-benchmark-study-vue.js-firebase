function setTitleAndButtonString(title, button){
    document.getElementById(getGameStatusId()).innerText = title;
    document.getElementById(getGameMainButtonId()).innerText = button;
}
function setGameStart(){
    let currentTime = +new Date();
    document.getElementById(getStartedTimeId()).innerText = currentTime.toString(10);
    let isStarted = (document.getElementById(getGameStatusId()).innerText === getGameReadyString());
    if(isStarted){
        setTitleAndButtonString(getGameStartedString(), getMainButtonClick());
    }
}
let gameTimer;
function setGameReady(){
    setTitleAndButtonString(getGameReadyString(), getMainButtonReady());
    let randomMSecond = Math.round(Math.random()*5000);
    gameTimer = setTimeout(function(){setGameStart();}, randomMSecond);
}
function calcTime(){
    let currentTime = +new Date();
    let diffTime = parseInt(document.getElementById(getStartedTimeId()).innerText);
    return ((currentTime - diffTime) / 1000.0);
}
function setGameClickedStarted(){
    inputRecord();
    initGame();
}
function setGameClickedNotStarted(){
    alert("game is not started!");
    initGame();
}
function initGame(){
    setTitleAndButtonString(getGameInitStatusString(), getMainButtonStartGame());
    clearTimeout(gameTimer);
}

function gameMainButtonClicked() {
    const statusText = document.getElementById(getGameStatusId()).innerText;
    switch(statusText){
        case getGameInitStatusString():
            // init status
            setGameReady();
            break;
        case getGameReadyString():
            // game ready status
            setGameClickedNotStarted();
            break;
        case getGameStartedString():
            // game is started
            setGameClickedStarted();
            break;
        default:
            // ignore
            initGame();
            break;
    }
}

function resetGameButtonClicked() {
    initGame();
}

