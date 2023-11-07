function startMenu(start, game) {
    start.style.visibility = 'hidden'
    game.style.visibility = 'visible'
};

/*----------  Game Clock  ----------*/
//Function to delay itterations
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//Function to count time 
async function gameClock() {
    for (let hours = 0; hours < 24; hours++) {
        for (let minutes = 0; minutes < 60; minutes++) {
            for (let seconds = 0; seconds < 60; seconds++) {
                const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                gameClockDisplay.querySelector('#currentTime').textContent = timeString;
                await sleep(1000);
            };
        };
    };
};


function startGame() {
    startMenu(startWindow, gameWindow, button1);
    console.log("Game Start");
    timeElapsed = gameClock();

    button1.textContent = 'YES';
    button1.style.background = 'orangered'

    imageDisplay.style.backgroundImage = `url(${entrance.image})`;
    textDisplay.textContent = entrance.message;
    roomName.textContent = entrance.name;
    
    button1.addEventListener("click", function() {
        button1.style.background = 'rgba(255, 68, 0, 0.5)'
        button1.textContent = ' '
        roomCounterValue += 1;
        roomCounter.textContent = roomCounterValue;
        game()
    })
    
    
}
    
startButton.addEventListener("click", startGame);