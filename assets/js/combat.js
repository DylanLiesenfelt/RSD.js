/*=============================================
=                   Player                    =
=============================================*/
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

/* Combat Skills */
let health = 1;
healthLevel.textContent = `${health}`;
let atk = 1;
attackLevel.textContent = `${atk}`;
let str = 1;
strengthLevel.textContent = `${atk}`;
let def = 1;
defenseLevel.textContent = `${def}`;
let dex = 1;
dexterityLevel.textContent = `${dex}`;
let int = 1;
intelligenceLevel.textContent = `${int}`;
/* Experience */
let level = 1;
playerLevel.textContent = `LVL: ${level}`;

/*=============================================
=                   Enemies                   =
=============================================*/

const enemyNameDisplay = document.getElementById('enemyNameDisplay')
const enemyDisplay = document.getElementById('enemyDisplay');
const enemyInfo = document.getElementById('enemyInfo');

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

/*----------  Load Enemy  ----------*/
function pullEnemy() {
    let randomEnemy = Math.floor(Math.random() * enemyList.length);
    let selectedEnemy = enemyList[randomEnemy];

    while (selectedEnemy.level > level + 2 || selectedEnemy.level < level - 5) {
        randomEnemy = Math.floor(Math.random() * enemyList.length);
        selectedEnemy = enemyList[randomEnemy];
    };

    return selectedEnemy;
};

let enemy = pullEnemy(enemyList, level);

function loadEnemy(enemy) {
    textDisplay.textContent = `You are being attacked by a level ${enemy.level} ${enemy.name}`
    enemyDisplay.style.backgroundImage = `url(${enemy.image})`;
    enemyInfo.style.visibility = 'visible'
    enemyNameDisplay.textContent = `Lvl ${enemy.level} ${enemy.name}`
    button1.textContent = 'MELEE';
    button1.style.background = 'orangered'
    button2.textContent = 'MAGIC';
    button2.style.background = 'orangered'
    button3.textContent = 'ITEM';
    button3.style.background = 'orangered'
}

function combat() {
    loadEnemy(enemy)
}


// /*----------  Combat  ----------*/
//    //Combat function for the player
//     function playerMeleeCombat(attack, dexterity, luck, enemy) {

//         let playerHitChance = dexterity * ((Math.floor(Math.random() * 11)) + luck); //Rolls player value for hit calc
//         let enemyEvadeChance = enemy.dexterity * Math.floor(Math.random() * 11); // Rolls enemy value for hit calc
//         let playerMaxDamage = attack * ((Math.floor(Math.random() * 11)) + luck); //Rolls max damage value for what player can hit
//         let playerCritChance = luck * Math.floor(Math.random() * 11);
//         let enemyDamageTaken = playerMaxDamage - (enemy.defense * (Math.floor(Math.random() * 3)));

//         if (enemyEvadeChance > playerHitChance) {
//             console.log("Player Misses");
//             textDisplay.textContent = `You missed. -0 HP Damage to ${enemy.name}`;
//             console.log('Test', `Hit Chance: ${playerHitChance}`, `Enemy Evade: ${enemyEvadeChance}`, `Max Damage: ${playerMaxDamage}`, `Crit Chance: ${playerCritChance}`, `Damage Reg: ${enemyDamageTaken}`)
//             console.log(`Test`, `ATK: ${atk},`, `DEX: ${dex}`, `LUCK: ${luck}`)
//             console.log(`Test enemy dex:${enemy.dexterity}`)
//         } else {
//             if (playerCritChance > enemyEvadeChance) {
//                 console.log('Player Crits')
//                 enemy.health -= playerMaxDamage
//                 textDisplay.textContent = `You Got A Critical Hit! -${playerMaxDamage} HP to ${enemy.name}`
//                 console.log(`Damage: ${playerMaxDamage}`, `Enemy HP: ${enemy.health}`)
//                 console.log('Test', `Hit Chance: ${playerHitChance}`, `Enemy Evade: ${enemyEvadeChance}`, `Max Damage: ${playerMaxDamage}`, `Crit Chance: ${playerCritChance}`, `Damage Reg: ${enemyDamageTaken}`)
//                 console.log(`Test`, `ATK: ${atk},`, `DEX: ${dex}`, `LUCK: ${luck}`)
//                 console.log(`Test enemy dex:${enemy.dexterity}`)
//             } else {
//                 console.log('Player Hits')
//                 enemy.health -= enemyDamageTaken
//                 textDisplay.textContent = `You hit. -${enemyDamageTaken} HP to ${enemy.name}`
//                 console.log(`Damage: ${enemyDamageTaken}`, `Enemy HP: ${enemy.health}`)
//                 console.log('Test', `Hit Chance: ${playerHitChance}`, `Enemy Evade: ${enemyEvadeChance}`, `Max Damage: ${playerMaxDamage}`, `Crit Chance: ${playerCritChance}`, `Damage Reg: ${enemyDamageTaken}`)
//                 console.log(`Test`, `ATK: ${atk},`, `DEX: ${dex}`, `LUCK: ${luck}`)
//                 console.log(`Test enemy dex:${enemy.dexterity}`)
//             }
//             return enemy.health, enemyInfo.textContent = `HP: ${enemy.health}`;
//         }
//     };





    // // add a check for health value of player and enemy to determine if combat is over
    // meleeButton.addEventListener('click', function() {
    //     playerMeleeCombat(atk, dex, luck, enemy)
    //     //add enemy combat function
    // })
    
    // //add a check if combat is over give new choice for new room load. if left odd number lengths if right even number lengths of room index