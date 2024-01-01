const merchantButtonElement = document.getElementById('merchantButton')

let resourceGathering = false;
let woodHarvestTime = 2; // In Seconds
let woodnum = +localStorage.getItem("woodNumber");
let merchantArrival = +localStorage.getItem("merchantHasArrived"); // 0 means merchant has not arrived, 1 means merchant has just arrived in game tick, and 2 means merchant has arrived previously, but does not enable the message.
let fishingPoleTrue = +localStorage.getItem("hasFishingPole"); // 0 means player doesn't have fishing pole, 1 means player has fishing pole.


function resourceLoop() {
    if (woodnum > 30 && merchantArrival == 0) {
        merchantArrival = 1;
    }
    if (merchantArrival == 1) {
        gameConsoleElement.innerHTML += "A merchant has arrived.  <br/>";
        merchantArrival = 2;
        saveGame();
    }
    // Merchant
    if (merchantArrival == 2) {
        merchantButtonElement.style.visibility = 'visible'
    }
    else {
        merchantButtonElement.style.visibility = 'hidden'
    }

    if (merchantTradesOpen == true && fishingPoleTrue == 0) {
        merchantButtonElement.innerHTML = "Close Trades";
        fishingPoleElement.style.visibility = 'visible';
    }
    else {
        merchantButtonElement.innerHTML = "Merchant"
        fishingPoleElement.style.visibility = 'hidden'
    }



}

function gatherWood() {
    if (resourceGathering == false) {
        resourceGathering = true
        gameConsoleElement.innerHTML += "Gathering wood. This will take ten seconds. <br/>"
        setTimeout(() => { woodnum += getRandomInt(8, 11); }, woodHarvestTime * 1000);
        setTimeout(() => { woodGathering = false }, woodHarvestTime * 1000);
        setTimeout(() => { gameConsoleElement.innerHTML += "Wood has been gathered. <br/>" }, woodHarvestTime * 1000);
    }
}

function merchant() {
    if (merchantTradesOpen == false) {
        merchantTradesOpen = true;

    }
    else {
        merchantTradesOpen = false;
    }

}

function fishingPole() {
    if (fishingPoleTrue != 1 && woodnum > 29) {
        woodnum -= 30;
        fishingPoleTrue = 1;
        gameConsoleElement.innerHTML += "Fishing pole aquired."
        saveGame();
    }
}



var intervalKeyEvents = setInterval(resourceLoop, 10);