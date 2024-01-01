let autoSaveTimer = 60; //In Seconds

function saveGame() {
    localStorage.setItem("woodNumber", woodnum);
    localStorage.setItem("merchantHasArrived", merchantArrival);
    localStorage.setItem("hasFishingPole", fishingPoleTrue);
    gameConsoleElement.innerHTML += "Game has been saved. <br />"
}



var intervalKeyEvents = setInterval(saveGame, autoSaveTimer * 1000)