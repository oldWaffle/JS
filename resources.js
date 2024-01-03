const woodButtonElement = document.getElementById('woodGatheringButton')
const inventoryButtonElement = document.getElementById('inventoryButton')
const carpenterButtonElement = document.getElementById('carpenterButton')
const merchantButtonElement = document.getElementById('merchantButton')
const fishingButtonElement = document.getElementById('fishingButton')
const optionButtonElement = document.getElementById('optionButton')
const saveButtonElement = document.getElementById('saveButton')
const restartButtonElement = document.getElementById('restartButton')
const clearGameConsoleButtonElement = document.getElementById('clearGameConsole')


let resourceGathering = false;
let woodHarvestTime = 2; // In Seconds
let fishHarvestTime = 2;
let fishingOutcome;
let calcFishingOutcome;



function gatherWood() {
    if (resourceGathering == false) {
        resourceGathering = true;
        gameConsoleElement.innerHTML += "Gathering wood. <br/>"
        setTimeout(() => { woodnum += getRandomInt(8, 11) }, woodHarvestTime * 1000);
        setTimeout(() => { woodGathering = false }, woodHarvestTime * 1000);
        setTimeout(() => { gameConsoleElement.innerHTML += "Wood has been gathered. <br/>" }, woodHarvestTime * 1000);
        setTimeout(() => { resourceGathering = false }, woodHarvestTime * 1000);
    }
}

function fish() { // Different fishing tables for different poles. Pole 1 is the old Pole, the starting pole.
    if (fishingPole == 1 && resourceGathering == false) {
        resourceGathering = true;
        gameConsoleElement.innerHTML += "Gathering Fish. <br/>";
        calcFishingOutcome = getRandomInt(1, 10000);
        setTimeout(() => { gameConsoleElement.innerHTML += fishingOutcome + "<br/>" }, fishHarvestTime * 1000);
        setTimeout(() => { resourceGathering = false }, fishHarvestTime * 1000)

        if (calcFishingOutcome >= 1 && calcFishingOutcome <= 4000) {
            fishingOutcome = "You did not catch anything."
        }
        if (calcFishingOutcome >= 3001 && calcFishingOutcome <= 7500) {
            fishingOutcome = "You caught a fish."
            fishnum += 1;
        }
    }
}


