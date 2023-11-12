/*=============================================
=                   Enemies                   =
=============================================*/

const enemyNameDisplay = document.getElementById('enemyNameDisplay')
const enemyDisplay = document.getElementById('enemyDisplay');
const enemyInfo = document.getElementById('enemyInfo');
const enemyHpBarFill = document.getElementById('enemyHpBarFill')


class Enemy {
    constructor(name, level, health, attack, strength, defense, dexterity, image) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.attack = attack;
        this.strength
        this.defense = defense;
        this.dexterity = dexterity;
        this.image = image;
    };
};

const rat = new Enemy('Rat', 1, 5, 1, 1, 1, 1, 'assets/images/Enemies/rat.png');
const slime = new Enemy('Slime', 2, 10, 1, 1, 1, 1, 'assets/images/Enemies/slime.png'); 
const gobbler = new Enemy('Gobbler', 3, 10, 3, 1, 3, 2, ''); //goblin. but more gobble, maybe that thing turkeys got on thier throats
const basklisk = new Enemy('Basklisk', 5, 20, 5, 1, 10, 5, ''); //beefy lizard
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

// let enemy = pullEnemy(enemyList, level);

function loadEnemy() {
    let enemy = pullEnemy()
    textDisplay.textContent = `You are being attacked by a level ${enemy.level} ${enemy.name}`
    enemyDisplay.style.backgroundImage = `url(${enemy.image})`;
    enemyInfo.style.visibility = 'visible'
    enemyNameDisplay.textContent = `Lvl ${enemy.level} ${enemy.name}`
    
    return enemy
}