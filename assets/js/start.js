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
    startMenu(startWindow, gameWindow, choice1Button);
    console.log("Game Start");
    timeElapsed = gameClock();

    choice1Button.style.visibility = 'visible'
    choice1Button.textContent = 'YES';

    imageDisplay.style.backgroundImage = `url(${entrance.image})`;
    textDisplay.textContent = entrance.message;
    roomName.textContent = entrance.name;
    
    choice1Button.addEventListener("click", function() {
        choice1Button.style.visibility = 'hidden'
        roomCounterValue += 1;
        roomCounter.textContent = roomCounterValue;
    })
    // First combat
    combat()
}
    
