//Window variables
const startButton = document.getElementById('startButton');
const startWindow = document.getElementById('startWindow');
const gameWindow = document.getElementById('gameWindow')

//Game Clock
function gameClock (){
    for (let hours = 0; hours < 24; hours++) {
        for (let minuets = 0; minuets < 60; minuets++) {
            for (let seconds = 0; seconds < 60; seconds++) {
                setTimeout(() => console.log(hours,':',minuets,':',seconds), 1000)
            }
        }
    }
}


//Main game function
function startGame() {
    //Start up processes
    startWindow.style.visibility = "hidden";
    gameWindow.style.visibility = 'visible';
    console.log("Game Start");
    gameClock();
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
