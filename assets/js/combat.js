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

function critCheck(enemy) {
    let crit = d20() + luck
    let notCrit = d20() + enemy.defense

    if (crit > notCrit) {
        return true
    } else {
        return false
    }
}


function playerDamgeCalc(hit) {
    let damage = Math.ceil(d20() * (str/10))
    console.log(damage)
   if (hit == true) {
        return damage
   } else {
        console.log('miss hit')
        return 0
    }
}

async function combat() {
    button1.textContent = 'MELEE';
    button1.style.background = 'orangered'
    button2.textContent = 'MAGIC';
    button2.style.background = 'orangered'
    button3.textContent = 'ITEM';
    button3.style.background = 'orangered'

    let meleeSelected = false
    let magicSelected = false
    let itemSelected  = false

    button1.addEventListener('click', function() {
        meleeSelected = true
        magicSelected = false
        itemSelected = false
    })

    button2.addEventListener('click', function() {
        meleeSelected = false
        magicSelected = true
        itemSelected = false
    })

    button3.addEventListener('click', function() {
        meleeSelected = false
        magicSelected = false
        itemSelected = true
    })

    let currentEnemy = loadEnemy()
    let playerTurn = true
    let enemyTurn = false

    const maxEnemyHp = currentEnemy.health
    let currentEnemyHp = currentEnemy.health
    let enemyHpPercent = (currentEnemyHp/maxEnemyHp) * 100
    enemyHpBarFill.style.width = enemyHpPercent + '%'
    // console.log('curHp:' + currentEnemyHp,
    //             'max:' + maxEnemyHp,
    //             '%:' + enemyHpPercent,
    //             'style:' + enemyHpBarFill.style.width)

    while (currentEnemy.health > 0 && currentHealth > 0) {
        await new Promise(resolve => setTimeout(resolve, 0));

        if (currentHealth <= 0) {
            //gameover function
            console.log('You ded')
        } else {
            if (playerTurn == true) {
                if (meleeSelected == true) {
                    
                    let crit = critCheck(currentEnemy)
                    let hitChance = playerHitCheck(currentEnemy);
                    let damage = playerDamgeCalc(hitChance)
                    //need if miss no hit, if hit check crit
                    if (crit == true) {
                        currentEnemy.health -= damage
                        textDisplay.textContent = `${currentEnemy.name} took ${damage} damage`
                        currentEnemyHp -= damage
                        enemyHpPercent
                        console.log('curHp:' + currentEnemyHp,
                                    'max:' + maxEnemyHp,
                                    '%:' + enemyHpPercent,
                                    'style:' + enemyHpBarFill.style.width)
                        playerTurn = false
                        enemyTurn = true
                        console.log('crit go brr')
                        console.log(playerTurn, enemyTurn)
                    }   else {
                        currentEnemy.health -= (damage - currentEnemy.defense)
                        textDisplay.textContent = `${currentEnemy.name} took ${damage - currentEnemy.defense} damage`
                        currentEnemyHp -= (damage - currentEnemy.defense)
                        console.log('curHp:' + currentEnemyHp,
                                    'max:' + maxEnemyHp,
                                    '%:' + enemyHpPercent,
                                    'style:' + enemyHpBarFill.style.width)
                        playerTurn = false
                        playerTurn = false
                        enemyTurn = true
                        console.log('normal hitt')
                        console.log(playerTurn, enemyTurn)
                    }
                }
                if (magicSelected == true) {
                    console.log('spell cast')
                }
                if (itemSelected == true) {
                    console.log('item Selected')
                }
            }
         
        if (enemyTurn == true) {

            }    
        } 
        
        if (currentEnemy.health <= 0) {
            //new room
            console.log('ENEMY DEAD')
            // Exp Reward function
            // Item drop function
        }
    }
    await combatRound();
}



