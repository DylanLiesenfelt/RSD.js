function calcMagicDamage() {
    Math.random()
}

function calcMeleeDamage() {
    
}

function playerAttack(melee, magic) {
    if (magic == true) {
        damage = calcMagicDamage()
    }
    else if (melee == true) {
        damage = calcMeleeDamage()
    }
    return damage
}



function enemyTakesDamage(damage, enemy) {

}


function combat() {
    loadEnemy()
    while (enemy.health > 0) {
        damageToEnemy = playerAttack()
        damageToEnemy(damageToEnemy, enemy)
        enemyAttack()
        damageToPlayer()
    } 
    if (enemy.health <= 0) {
        rewardExp()
        rewardItem()
    }
   
}


// /*----------  Load Enemy  ----------*/
// function pullEnemy() {
//     let randomEnemy = Math.floor(Math.random() * enemyList.length);
//     let selectedEnemy = enemyList[randomEnemy];

//     while (selectedEnemy.level > level + 2 || selectedEnemy.level < level - 5) {
//         randomEnemy = Math.floor(Math.random() * enemyList.length);
//         selectedEnemy = enemyList[randomEnemy];
//     };

//     return selectedEnemy;
// };

// let enemy = pullEnemy(enemyList, level);

// function loadEnemy(enemy) {
//     textDisplay.textContent = `You are being attacked by a level ${enemy.level} ${enemy.name}`
//     enemyDisplay.style.backgroundImage = `url(${enemy.image})`;
//     enemyInfo.textContent = `HP: ${enemy.health}`;
    
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