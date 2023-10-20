
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
const inventoryWeight = document.getElementById('inventoryWeight');

const gameClockDisplay = document.getElementById('gameClockDisplay')


/*----------  Game Clock  ----------*/
//Function to delay itterations
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//Function to count time 
async function gameClock() {
    for (let hours = 0; hours < 24; hours++) {
        for (let minutes = 0; minutes < 60; minutes++) {
            for (let seconds = 0; seconds < 60; seconds++) {
                const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                gameClockDisplay.querySelector('#currentTime').textContent = timeString;
                await sleep(1000);
            }
        }
    }
}


/*=============================================
=                Game Runtime                =
=============================================*/
function startGame() {
    startWindow.style.visibility = "hidden";
    gameWindow.style.visibility = 'visible';
    console.log("Game Start");
    timeElapsed = gameClock();
}

startButton.addEventListener("click", startGame);

