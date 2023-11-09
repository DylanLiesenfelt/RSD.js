function d20() {
    return Math.floor(Math.random() * 21)
}

function playerHitCheck(enemy) {
    let playerHitChance = d20() + atk + luck
    let enemyEvadeChance = d20() + enemy.dex

    if (playerHitChance > enemyEvadeChance) {
        return true
    } else {
        return false
    }
}

function playerDamgeCalc() {
   let hit = playerHitCheck(currentEnemy)

   if (hit == true) {
        return d20() * (str/10)
   } else {
        console.log('miss hit')
        textDisplay.textContent = 'You missed your attack!'
        return 0
    }
}

function combat() {
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

    while (currentEnemy.health >= 0 && currentHealth >= 0) {
        if (currentHealth <= 0) {
            //gameover function
            console.log('You ded')
        } else {
            if (playerTurn == true) {
                if (meleeSelected == true) {
                    //critical hit check
                }
                if (magicSelected == true) {
                    console.log('spell cast')
                }
                if (itemSelected == true) {
                    console.log('item Selected')
                }
            }
        }   
    }

    // Exp Reward function
    //Item drop function

}


