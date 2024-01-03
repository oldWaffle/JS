let inventory = ""

function checkInventory() {
    inventory = ""
    inventory += "Inventory: <br/>" + "Wood: " + woodnum + "<br/> Fish: " + fishnum + "<br/>";
    gameConsoleElement.innerHTML += inventory;

}
