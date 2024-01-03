let autoSaveTimer = 30; //In Seconds
let announceSave;
let woodnum = +localStorage.getItem("woodNumber")
let fishnum = +localStorage.getItem("fishNumber")
let carpenterArrival = +localStorage.getItem("carpenterHasArrived")
let carpenterName = localStorage.getItem("carpenterName")
let carpenterButtonPresses = +localStorage.getItem("carpenterButtonPresses")
let houseNumber = +localStorage.getItem("houseNumber")
let merchantArrival = +localStorage.getItem("merchantHasArrived");
let merchantName = localStorage.getItem("merchantName")
let fishingPole = +localStorage.getItem("hasFishingPole") // 0 means player doesn't have fishing pole, 1 means player has old fishing pole. 
let loginCount = +localStorage.getItem("loginCount")


function saveGame(announceSave) {
    localStorage.setItem("woodNumber", woodnum);
    localStorage.setItem("merchantHasArrived", merchantArrival);
    localStorage.setItem("merchantName", merchantName)
    localStorage.setItem("hasFishingPole", fishingPole);
    localStorage.setItem("fishNumber", fishnum);
    localStorage.setItem("carpenterHasArrived", carpenterArrival);
    localStorage.setItem("carpenterName", carpenterName)
    localStorage.setItem("carpenterButtonPresses", carpenterButtonPresses)
    localStorage.setItem("houseNumber", houseNumber)
    localStorage.setItem("loginCount", loginCount);
    

    if (announceSave == true) {
        gameConsoleElement.innerHTML += "Game has been saved. <br/>"
    }
}



setInterval(saveGame, autoSaveTimer * 1000)