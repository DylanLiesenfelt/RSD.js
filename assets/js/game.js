//Window variables
const startButton = document.getElementById('startButton');
const startWindow = document.getElementById('startWindow');
const gameWindow = document.getElementById('gameWindow')

//Main game function
function startGame() {
    startWindow.style.visibility = "hidden";
    gameWindow.style.visibility = 'visible';
    console.log("Game Start");
};

startButton.addEventListener("click", startGame);

//Player class

//level class and array

//enemy class and array

//loot, loot array and loot tables

//combat functions

//testing area
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
`~`
const test = document.getElementById('testButton');
