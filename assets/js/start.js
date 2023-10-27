function startMenu(start, game) {
    start.style.visibility = 'hidden'
    game.style.visibility = 'visible'
};

function loadEntrance(imageDisplay, roomCounterValue, roomCounter, roomName, textDisplay, choice1Button) {
    imageDisplay.style.backgroundImage = `url(${entrance.image})`;
    roomCounterValue += 1;
    roomCounter.textContent = roomCounterValue;
    roomName.textContent = entrance.name;
    textDisplay.textContent = entrance.message;
    choice1Button.style.visibility = 'visible';
    choice1Button.textContent = 'YES';
};