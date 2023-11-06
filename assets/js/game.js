/*=============================================
=                  Variables                 =
=============================================*/

/*----------  Window Variables ----------*/
const startWindow = document.getElementById('startWindow');
const gameWindow = document.getElementById('gameWindow');
/*----------  Element Variables  ----------*/
const startButton = document.getElementById('startButton');
/* Player Display Elements */
const playerName = document.getElementById('playerName');

const healthLevel = document.getElementById('health');
const attackLevel = document.getElementById('attack');
const strengthLevel = document.getElementById('strength')
const defenseLevel = document.getElementById('defense');
const dexterityLevel = document.getElementById('dexterity');
const intelligenceLevel = document.getElementById('intelligence');

const playerLevel = document.getElementById('playerLevel');
const expBar = document.getElementById('expBar');
const currentExp = document.getElementById('currentExp');
const nextLevelExp = document.getElementById('nextLevelExp');

const equipDisplay = document.getElementById('equipDisplay')
const equpimentButton = document.getElementById('equipmentButton')
const playerEquipment = document.getElementById('playerEquipment')
const inventoryButton = document.getElementById('inventoryButton')
const inventoryDisplay = document.getElementById('inventoryDisplay')
/* Story Display Elements */
const roomName = document.getElementById('roomName');
const roomCounter = document.getElementById('roomCounter');

const imageDisplay = document.getElementById('imageDisplay');

const enemyNameDisplay = document.getElementById('enemyNameDisplay')
const enemyDisplay = document.getElementById('enemyDisplay');
const enemyInfo = document.getElementById('enemyInfo');

const gameClockDisplay = document.getElementById('gameClockDisplay');
const textDisplay = document.getElementById('textDisplay');

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');


/*=============================================
=                    Rooms                    =
=============================================*/
let roomCounterValue = 0
class Room {
    constructor(name, image, message) {
        this.name = name;
        this.image = image;
        this.message = message;
    };
};
//Starting room default
const entrance = new Room('Entrance', 'assets/images/Rooms/Entrance.jpg', 'You\'ve found the entrance to a Dungeon, do you wish to enter?');

//All randomly selected based off of even (right) or odd (left)index.length numbers
const roomList = []; 

/*=============================================
=                   Enemies                   =
=============================================*/
class Enemy {
    constructor(name, level, health, attack, defense, dexterity, image) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.dexterity = dexterity;
        this.image = image;
    };
};

const rat = new Enemy('Rat', 1, 5, 1, 1, 1, 'assets/images/Enemies/rat.png');
const slime = new Enemy('Slime', 2, 10, 1, 2, 1, 'assets/images/Enemies/slime.png'); 
const gobbler = new Enemy('Gobbler', 3, 10, 3, 3, 2, ''); //goblin. but more gobble, maybe that thing turkeys got on thier throats
const basklisk = new Enemy('Basklisk', 5, 20, 5, 10, 5, ''); //beefy lizard
const gardenHermit = new Enemy('Garden Hermit', 5, 15, 3, 3, 10, ''); // old man wearing a trash bag 
const lizardMan = new Enemy('Lizard Man', 10, 50, 5, 3, 2, 'assets/images/Enemies/lizardMan.jpeg'); // Mitch McConnel
const jackedRabbit = new Enemy('Jacked Rabbit', 12, 60, 4, 2, 6, 'assets/images/Enemies/jackedRabbit.webp') // play on jack rabbit, also this image https://ehkern.files.wordpress.com/2016/07/e28098the-smithfield-decretals_-decretals-of-gregory-ix-with-glossa-ordinaria-tolouse-ca-1300-illuminations-added-in-london-ca-1340-british-library-royal-10-e-iv-fol-61v.jpg?w=300&h=290
const sentinel = new Enemy('Sentinel', 15, 75, 4, 10, 1, 'assets/images/Enemies/sentinel.jpeg') // A Statue with black eyeholes, like those greek ones
const ashman = new Enemy('Ash Man', 20, 40, 20, 10 , 15, ''); //zombie smoke ash kinda guy
const hydra = new Enemy();
const banshee = new Enemy();
const cavewhale = new Enemy(); //a small whale made out of rocks and stuff
const bat = new Enemy();
const blackShuck = new Enemy();
const gjenganger = new Enemy();
const wako = new Enemy();
const babayaga = new Enemy();
const jinn = new Enemy();
const tejujagua = new Enemy();
const anansi = new Enemy();
const wani = new Enemy();
const huldfolk = new Enemy();
const troll = new Enemy();
const krampus = new Enemy();
const yetti = new Enemy();
const windogo = new Enemy();
const skunkape = new Enemy();


const enemyList = [rat, slime, jackedRabbit, lizardMan, sentinel];


/*=============================================
=                   Items                    =
=============================================*/





/*=============================================
=                   Player                    =
=============================================*/
/* Combat Skills */
let health = 10;
healthLevel.textContent = `${health}`;
let atk = 4;
attackLevel.textContent = `${atk}`;
let str = 4;
strengthLevel.textContent = `${atk}`;
let def = 4;
defenseLevel.textContent = `${def}`;
let dex = 5;
dexterityLevel.textContent = `${dex}`;
let int = 2;
intelligenceLevel.textContent = `${int}`;
/* Experience */
let level = 15;
playerLevel.textContent = `LVL: ${level}`;

// let numeratorExp = 0;
// currentExp.textContent = `${numeratorExp}`;
// let denominatorExp = 100;
// nextLevelExp.textContent = `/ ${denominatorExp} `;
 
/*=============================================
=                Game Runtime                =
=============================================*/
equpimentButton.addEventListener("click", function() {
    playerEquipment.style.display = 'block'
    inventoryDisplay.style.display = 'none'
    equpimentButton.style.backgroundColor = 'orangered'
    inventoryButton.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'
})

inventoryButton.addEventListener("click", function() {
    playerEquipment.style.display = 'none'
    inventoryDisplay.style.display = 'block'
    inventoryButton.style.backgroundColor = 'orangered'
    equpimentButton.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'

})

function game() {
    
    
};

startButton.addEventListener("click", startGame);


