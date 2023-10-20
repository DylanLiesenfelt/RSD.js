
/*----------  Window Variables ----------*/
const startWindow = document.getElementById('startWindow');
const gameWindow = document.getElementById('gameWindow')

/*----------  Element Variables  ----------*/

/* Player Display Elements */
const startButton = document.getElementById('startButton');
const playerName = document.getElementById('playerName');
const healthLevel = document.getElementById('healthLevel');
const attackLevel = document.getElementById('attackLevel');
const defenseLevel = document.getElementById('defenseLevel');
const dexterityLevel = document.getElementById('dexterityLevel');
const magicLevel = document.getElementById('magicLevel');
const luckLevel = document.getElementById('luckLevel');
const cookingLevel = document.getElementById('cookingLevel');
const smithingLevel = document.getElementById('smithingLevel');
const fishingLevel = document.getElementById('fishingLevel');
const playerLevel = document.getElementById('playerLevel');
const expBar = document.getElementById('expBar');
const inventoryWeight= document.getElementById('inventoryWeight');
const  = document.getElementById('');
const  = document.getElementById('');
const  = document.getElementById('');
const  = document.getElementById('');
const  = document.getElementById('');
const  = document.getElementById('');
const  = document.getElementById('');





/*----------  Game Clock  ----------*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function gameClock (){
    for (let hours = 0; hours < 24; hours++) {
        for (let minuets = 0; minuets < 60; minuets++) {
            for (let seconds = 0; seconds < 60; seconds++) {
                console.log(hours,':',minuets,':',seconds)
                await sleep(seconds * 1000);
            }
        }
    }
}

//Player class

//level class and array

//enemy class and array

//loot, loot array and loot tables

//combat functions

//testing area

/*=============================================
=                Game Runtime                =
=============================================*/
function startGame() {
    //Start up processes
    startWindow.style.visibility = "hidden";
    gameWindow.style.visibility = 'visible';
    console.log("Game Start");
    gameClock();
};

startButton.addEventListener("click", startGame);

