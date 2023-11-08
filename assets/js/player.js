/*=============================================
=                   Player                    =
=============================================*/
const playerName = document.getElementById('playerName');

const luckLevel = document.getElementById('luck');
const attackLevel = document.getElementById('attack');
const strengthLevel = document.getElementById('strength')
const defenseLevel = document.getElementById('defense');
const dexterityLevel = document.getElementById('dexterity');
const intelligenceLevel = document.getElementById('intelligence');
const playerLevel = document.getElementById('playerLevel');
const hpBarValue = document.getElementById('hpBarFill')
const manaBarValue = document.getElementById('manaBarFill')
const expBarValue =document.getElementById('playerExpBarFill')

/* Combat Skills */
let luck = 1;
luckLevel.textContent = `${luck}`;
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

let expGoal = 100;
let currentExp = 0;
let expPercent = (currentExp / expGoal) * 100;
expBarValue.style.width= expPercent + '%';


/* HP and Mana */
let maxHealth = 100;
let currentHealth = maxHealth;
let hpPercent = (currentHealth / maxHealth) * 100;
hpBarValue.style.height = hpPercent + '%';

let maxMana = 50;
let currentMana = maxMana;
let manaPercent = (currentMana / maxMana ) * 100;
manaBarValue.style.height = manaPercent + '%';