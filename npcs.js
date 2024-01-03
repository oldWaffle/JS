let merchantTradesOpen = false;
let carpenterTradesOpen = false;
let optionButton;
let houseBuilding = false;
let houseBuildTime = 10;


function npcLoop() {
    // Builder
    if (woodnum >= 30 && carpenterArrival == 0) {
        carpenterArrival = 1;
    }
    if (carpenterArrival == 1) {
        carpenterName = getName(1);
        carpenterArrival = 2;
        gameConsoleElement.innerHTML += "A traveler comes along looking for a place to stay. He says he is a carpenter. <br/>";
        saveGame();
    }
    if (carpenterArrival == 2) {
        carpenterButtonElement.style.visibility = 'visible';
    }
    if (carpenterArrival != 2) {
        carpenterButtonElement.style.visibility = 'hidden'; 
    }
    if (carpenterTradesOpen == true) {
        optionButtonElement.innerHTML = "Build a house? 100 Wood."
        optionButton = 2;
        optionButtonElement.style.visibility = 'visible';
        carpenterButtonElement.innerHTML = "Close";
    }
    if (carpenterTradesOpen == false) {
        carpenterButton.innerHTML = "Carpenter"
    }
    // Merchant
    if (woodnum >= 9999 && merchantArrival == 0) {
        merchantArrival = 1;
    }
    if (merchantArrival == 1) {
        merchantName = getName(1)
        gameConsoleElement.innerHTML += "A merchant has arrived. He says his name is " + merchantName + ". <br/>" + merchantName + " the merchant: \"I found an old pole. I'll give it to you for a cheap price.\" <br/>";
        merchantArrival = 2;
        saveGame();
    }

    if (merchantArrival == 2) {
        merchantButtonElement.style.visibility = 'visible'
    }
    else {
        merchantButtonElement.style.visibility = 'hidden'
    }

    if (merchantTradesOpen == true && fishingPole < 1) {
        merchantButtonElement.innerHTML = "Close Trades";
        optionButton = 1;
        optionButtonElement.innerHTML = "Buy \"Old Fishing Pole?\" 30 Wood." 
        optionButtonElement.style.visibility = 'visible';
    }
    if (merchantTradesOpen == false) {
        merchantButtonElement.innerHTML = "Merchant"
    }

    //Misc
    if (merchantTradesOpen == false && carpenterTradesOpen == false) {
        optionButtonElement.style.visibility = 'hidden'
    }

    if (fishingPole == 0) {
        fishingButtonElement.style.visibility = 'hidden';
    }
    if (fishingPole != 0) {
        fishingButtonElement.style.visibility = 'visible';
    }
}

function getName(npcGender) {
    npcRandomizer = getRandomInt(1, 2) 

    if (npcGender == 1) {
        if (npcRandomizer == 1) {
            randomName = "Willy"
        }
        if (npcRandomizer == 2) {
            randomName = "John"
        }
    }
    if (npcGender == 2) {

        
    }

    return randomName;
}
function carpenter() {
    if (carpenterTradesOpen == false) {
        carpenterTradesOpen = true;
        merchantTradesOpen = false;
        carpenterButtonPresses++;
    }
    else {
        carpenterTradesOpen = false;
    }
    if (carpenterButtonPresses == 1 && carpenterTradesOpen == true) {
        gameConsoleElement.innerHTML += "Carpenter:\"Hey, my name is " + carpenterName + ".\" <br/> " + carpenterName + " the carpenter: \"More people will come if you build houses.\" <br/>" 
    }

}

function merchant() {
    if (merchantTradesOpen == false) {
        merchantTradesOpen = true;
        carpenterTradesOpen = false;
    }
    else {
        merchantTradesOpen = false;
    }
}

function setOptionButton() {
    if (optionButton == 1) {
        buyOldPole();
    }
    if (optionButton == 2) {
        buildHouse();
    }
}

function buyOldPole() {
    if (fishingPole == 0 && woodnum >= 29) {
        woodnum -= 30;
        fishingPole = 1;
        gameConsoleElement.innerHTML += "You aquired the old fishing pole.<br/>" + merchantName + " the merchant: \"Thanks you for your purchase\" <br/>"
        optionButtonElement.style.visibility = 'hidden'
        saveGame();
    }
    else (gameConsoleElement.innerHTML += "You don't have enough resources to buy this item. <br/>")
}

function buildHouse() {
    if (woodnum >= 100 && houseBuilding == false) {
        woodnum -= 100;
        gameConsoleElement.innerHTML += "Building a house. <br/>"
        houseBuilding = true;
        setTimeout(() => { houseNumber++ }, houseBuildTime * 1000);
        setTimeout(() => { gameConsoleElement.innerHTML += "A house has been built. <br/>" }, houseBuildTime * 1000);
        setTimeout(() => { houseBuilding = false; }, houseBuildTime * 1000);
        setTimeout(() => { saveGame() }, houseBuildTime * 1000)
    }
    if (woodnum < 100 && houseBuilding == false) {
        gameConsoleElement.innerHTML += "You don't have enough resources to build this. <br/>"
    }
}


setInterval(npcLoop, 10);