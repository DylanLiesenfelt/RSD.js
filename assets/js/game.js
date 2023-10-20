/*=============================================
=                  Variables                 =
=============================================*/
/*----------  Window Variables ----------*/
const startWindow = document.getElementById('startWindow');
const gameWindow = document.getElementById('gameWindow')

/*----------  Element Variables  ----------*/
const startButton = document.getElementById('startButton');
/* Player Display Elements */
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
const currentExp = document.getElementById('currentExp')
const nextLevelExp = document.getElementById('nextLevelExp')
const inventoryWeight = document.getElementById('inventoryWeight');
const currentWeight = document.getElementById('currentWeight')
const maxWeight = document.getElementById('maxWeight')

/* Story Display Elements */
const gameClockDisplay = document.getElementById('gameClockDisplay')

/*=============================================
=                  Functions                  =
=============================================*/

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
=                   Player                    =
=============================================*/

/* Combat Skills */
let health = 10;
healthLevel.textContent = `HEALTH: ${health}`;
let atk = 1;
attackLevel.textContent = `ATK: ${atk}`;
let def = 1;
defenseLevel.textContent = `DEF: ${def}`;
let dex = 1;
dexterityLevel.textContent = `DEX: ${dex}`;
let magic = 1;
magicLevel.textContent = `MAGIC: ${magic}`;
let luck = 1;
luckLevel.textContent = `LUCK ${luck}`;
/* Non-Combat Skills */
let cook = 1;
cookingLevel.textContent = `COOK: ${cook}`;
let smith = 1;
smithingLevel.textContent = `SMITH: ${smith}`;
let fish = 1;
fishingLevel.textContent = `FISH: ${fish}`;
/* Experience */
let level = 1;
playerLevel.textContent = `LVL: ${level}`;
let numeratorExp = 0;
currentExp.textContent = `${numeratorExp} /`;
let denominatorExp = 100;
nextLevelExp.textContent = `/ ${denominatorExp} `;
/* Inventory */
let heldWeight = 0;
currentWeight.textContent = `${heldWeight}`
let overcumber = 100;
maxWeight.textContent = `${overcumber} LBS`








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

