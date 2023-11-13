
async function combat() {
    let currentEnemy = loadEnemy()
    let playerTurn = true
    let enemyTurn = false

    while (currentHealth >= 0 && currentEnemy.health) {
        if (currentHealth <= 0) {
            console.log("You ded bud")
            //gameover func
            break
        } 
        if (playerTurn == true && enemyTurn == false) {
            playerAttack(playerTurn, enemyTurn)
        }
        if (currentEnemy.health <= 0) {
            console.log(`You have defeated the ${currentEnemy.name}!`)
            //function for itrm drop
            //function for xp and level up
            break
        }
        if (enemyTurn == true && playerTurn == false) {
            enemyAttack(playerTurn, enemyTurn, currentEnemy)
        }
    }
    await combatRound();
}



// fix all this so its functions 