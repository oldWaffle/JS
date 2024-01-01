const textElement = document.getElementById('text')
const gameConsoleElement = document.getElementById('gameEventText')
const fishingPoleElement = document.getElementById('buyFishingPole')
let title = "Javascript Text Adventure Game"
let textNum = 1;
let merchantTradesOpen = false;






function mainLoop() {
    if (textNum == 1) {
        textElement.innerHTML = title + "<br/>" + "Wood: " + woodnum + "<br/>" + "Merchant: " + merchantArrival + "<br/>Fishingpole: " + fishingPoleTrue;
    }


}




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function restart() {
    woodnum = 0;
    merchantArrival = 0;
    fishingPoleTrue = 0;
    saveGame();
    gameConsoleElement.innerHTML = "";
    window.location.reload();

}

function clearGameConsole() {
    gameConsoleElement.innerHTML = "";
}



var intervalKeyEvents = setInterval(mainLoop, 10);


gameConsoleElement.innerHTML = "";