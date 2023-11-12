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
    

    while (currentEnemy.health > 0 && currentHealth > 0) {
        await new Promise(resolve => setTimeout(resolve, 0));

        if (currentHealth <= 0) {
            //gameover function
            console.log('You ded')
        } else {
            if (playerTurn == true) {
                if (meleeSelected == true) {
                    let hit = playerHitCheck(currentEnemy)
                    let crit = critCheck(currentEnemy)
                    let damage = playerDamgeCalc()
                    if (hit == true) {
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
                            enemyTurn = true
                            console.log('normal hitt')
                        }
                    } else {
                        playerTurn = false
                        enemyTurn = true
                        textDisplay.textContent = "You Missed"
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
            
        } else {
            if (currentEnemy.health <= 0) {
                //new room
                console.log('ENEMY DEAD')
                // Exp Reward function
                // Item drop function
            }   else {
                let enemyDamge = enemyDamageCalc(currentEnemy)
                let enemyHit = enemyHitCheck(currentEnemy)

                if (enemyHit == true) {
                    let finalEnemyDamage = (enemyDamge - def)
                    currentHealth - finalEnemyDamage
                    console.log("Enemy Damage:", finalEnemyDamage
                                )
                    textDisplay.textContent = `${currentEnemy.name} did ${finalEnemyDamage} damgage to you.`
                    playerTurn = true
                    enemyTurn = false
                } else {
                    textDisplay.textContent = `${currentEnemy.name} missed`
                }
            } 
        } 
        }
    }
    await combatRound();
}



// fix all this so its functions 