/*=============================================
=                  Variables                 =
=============================================*/

/*----------  Window Variables ----------*/
const startWindow = document.getElementById('startWindow');
const gameWindow = document.getElementById('gameWindow');
/*----------  Controls Variables  ----------*/
const startButton = document.getElementById('startButton');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');

/* Player Display Elements */
const equipDisplay = document.getElementById('equipDisplay')
const equpimentButton = document.getElementById('equipmentButton')
const playerEquipment = document.getElementById('playerEquipment')
const inventoryButton = document.getElementById('inventoryButton')
const inventoryDisplay = document.getElementById('inventoryDisplay')

/* Story Display Elements */
const roomName = document.getElementById('roomName');
const roomCounter = document.getElementById('roomCounter');
const imageDisplay = document.getElementById('imageDisplay');

const gameClockDisplay = document.getElementById('gameClockDisplay');
const textDisplay = document.getElementById('textDisplay');


/*=============================================
=                    Rooms                    =
=============================================*/
let roomCounterValue = 0
class Room {
    constructor(name, image, message) {
        this.name = name;
        this.image = image;
        this.message = message;
    };
};
//Starting room default
const entrance = new Room('Entrance', 'assets/images/Rooms/Entrance.jpg', 'You\'ve found the entrance to a Dungeon, do you wish to enter?');

//All randomly selected based off of even (right) or odd (left)index.length numbers
const roomList = []; 

 
/*=============================================
=                Game Runtime                =
=============================================*/
equpimentButton.addEventListener("click", function() {
    playerEquipment.style.display = 'block'
    inventoryDisplay.style.display = 'none'
    equpimentButton.style.backgroundColor = 'orangered'
    inventoryButton.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'
})

inventoryButton.addEventListener("click", function() {
    playerEquipment.style.display = 'none'
    inventoryDisplay.style.display = 'block'
    inventoryButton.style.backgroundColor = 'orangered'
    equpimentButton.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'

})

function game() {
    combat()
    
};




