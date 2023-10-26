Start Menu
start menu close after hitting start game button

game starts { game() }
game clock starts { gameClock() }

[first room is loaded
choice for room to enter room] { entrance() }

load enemy based off player level { loadEnemy() }

while player hp > 0
    { combat() }
    while enemy hp > 0
        players turn
        player uses item?
            player attacks
                magic or melee
                calculate damage player does to enemy {playerDamage()}

        calculate damage enemy does to player {enemyDamge()}
        
    else player wins 
        award exp { exp() }
        if players exp reachs cap for level, level up {levelUp()}
            if player levels up, award choice of skill point {skillPoint()}

        award player item enemy dropped {dropItem()}

    load new room
loop 

else player hp = 0  lost, game over
return to start menu
