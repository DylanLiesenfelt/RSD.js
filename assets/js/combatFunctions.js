function d20() {
    return Math.floor(Math.random() * 21)
}

function playerHitCheck(enemy) {
    let playerHitChance = d20() + atk
    let enemyEvadeChance = d20() + enemy.dexterity
    console.log(playerHitChance, enemyEvadeChance)
    if (playerHitChance > enemyEvadeChance) {
        return true
    } else {
        return false
    }
}

function enemyHitCheck(enemy) {
    let enemyHitChance = d20() + enemy.attack
    let playerEvadeChance = d20() + dex
    console.log(enemyHitChance, playerEvadeChance)
    if (enemyHitChance > playerEvadeChance) {
        return true
    } else {
        return false
    }
}

function critCheck(enemy) {
    let crit = d20() + luck
    let notCrit = d20() + enemy.defense

    if (crit > notCrit) {
        return true
    } else {
        return false
    }
}


function playerDamgeCalc() {
    let damage = Math.ceil(d20() * (str/10))
    console.log('Player Damage:', damage)
    return damage
}

function enemyDamageCalc(enemy) {
    let damage = Math.ceil(d20() * (enemy.strength/10))
    console.log('Enemy Damage:', damage)
    return damage
}

function setCombatControls(melee, magic, item) {
    button1.textContent = 'MELEE';
    button1.style.background = 'orangered'
    button2.textContent = 'MAGIC';
    button2.style.background = 'orangered'
    button3.textContent = 'ITEM';
    button3.style.background = 'orangered'

    
    button1.addEventListener('click', function() {
        return meleeSelected = true
        
    })

    button2.addEventListener('click', function() {
        return magicSelected = true
    })

    button3.addEventListener('click', function() {
        return itemSelected = true
    })
}

function setEnemyHealth(currentEnemy) {
    const maxEnemyHp = currentEnemy.health
    let currentEnemyHp = currentEnemy.health
    let enemyHpPercent = (currentEnemyHp/maxEnemyHp) * 100
    enemyHpBarFill.style.width = enemyHpPercent + '%'
}

function updatePlayerDamage(damage, currentEnemy, hit, crit) {
   if (hit == true) {
    if (crit == true) {
        currentEnemy.health -= damage;
        textDisplay.textContent = `You landed a critical hit, ${currentEnemy.name} took ${damage} damage!`;
    } else {
        currentEnemy.health -= (damage - currentEnemy.defense);
        textDisplay.textContent = `${currentEnemy.name} took ${damage - currentEnemy.defense} damage`;
    }
   } else {
    textDisplay.textContent = "You missed your attack!"
   }

   console.log('curHp:' + currentEnemyHp,
                'max:' + maxEnemyHp,
                '%:' + enemyHpPercent,
                'style:' + enemyHpBarFill.style.width)
   playerTurn = false
   enemyTurn = true
}
    let meleeSelected = false
    let magicSelected = false
    let itemSelected  = false
function playerAttack(playerTurn, enemyTurn) {
    
    setCombatControls(meleeSelected, magicSelected, itemSelected)

    if (playerTurn == true) {
        if (meleeSelected == true) {
            let hit = playerHitCheck(currentEnemy)
            let crit = critCheck(currentEnemy)
            let damage = playerDamgeCalc()
            updatePlayerDamage(damage, currentEnemy, hit,crit)
        }
        if (magicSelected == true) {
            console.log('spell cast')
        }
        if (itemSelected == true) {
            console.log('item Selected')
        }
    }    
    console.log('Player Turn: ', playerTurn,
                'Enemy Turn: ', enemyTurn)
}

function updateEnemyDamage(currentEnemy) {
    let enemyDamge = enemyDamageCalc(currentEnemy)
    let enemyHit = enemyHitCheck(currentEnemy)
    if (enemyHit == true) {
        let finalEnemyDamage = (enemyDamge - def)
        currentHealth - finalEnemyDamage
        console.log("Enemy Damage:", finalEnemyDamage)
        textDisplay.textContent = `${currentEnemy.name} did ${finalEnemyDamage} damgage to you.`
        
    } else {
        textDisplay.textContent = `${currentEnemy.name} missed it's attack!` 
    }
    playerTurn = true
    enemyTurn = false
}

function enemyAttack(playerTurn, enemyTurn, currentEnemy) {
    updateEnemyDamage(currentEnemy)
    console.log('Player Turn: ', playerTurn,
                'Enemy Turn: ', enemyTurn)
}   