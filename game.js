const textElement = document.getElementById('text')
const gameConsoleElement = document.getElementById('gameEventText')
let title = "Javascript Text Adventure Game"
let textNum;







function mainLoop() {
    if (textNum == 1) {
        textElement.innerHTML = title + "<br/> Wood: " + woodnum + "<br/> Carpenter: " + carpenterArrival + "<br/> Fishing pole: " + fishingPole + "<br/> Houses: " + houseNumber;
    }
    if (loginCount == 1) {
        textNum = 2;
        loginCount = 2;
        backstory();
    }
    if (loginCount > 2) {
        textNum = 1;
    }

}

function backstory() {
    if (textNum == 2) {
        woodButtonElement.style.visibility = 'hidden'
        inventoryButtonElement.style.visibility = 'hidden'
        clearGameConsoleButtonElement.style.visibility = 'hidden'
        saveButtonElement.style.visibility = 'hidden'
        restartButtonElement.style.visibility = 'hidden'

        animateText(100, 6, "You ", "wake ", "up ", "in ", "a ", "forest.") // This is an example and will be changed later. The point of the game is to raise a town, and eventually it can possibly progress to become an empire. It will have multiple endings and lots of different situations and events.

        setTimeout(() => { loginCount = 3 }, 2000);
        setTimeout(() => { inventoryButtonElement.style.visibility = 'visible' }, 2000);
        setTimeout(() => { woodButtonElement.style.visibility = 'visible' }, 2000);
        setTimeout(() => { clearGameConsoleButtonElement.style.visibility = 'visible' }, 2000);
        setTimeout(() => { saveButtonElement.style.visibility = 'visible' }, 2000);
        setTimeout(() => { restartButtonElement.style.visibility = 'visible' }, 2000);
        setTimeout(() => { saveGame() }, 2000);
    }

}




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function restart() {
    woodnum = 0;
    fishnum = 0;
    carpenterArrival = 0;
    carpenterButtonPresses = 0;
    houseNumber = 0;
    merchantArrival = 0;
    fishingPole = 0;
    loginCount = 0;
    saveGame();
    window.location.reload();
    gameConsoleElement.innerHTML = "";
}


function clearGameConsole() {
    gameConsoleElement.innerHTML = "";
}

setInterval(mainLoop, 10);


loginCount += 1;
saveGame();
textElement.innerHTML = ""
gameConsoleElement.innerHTML = "";