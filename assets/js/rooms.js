/*=============================================
=                    Rooms                    =
=============================================*/

const roomName = document.getElementById('roomName');
const roomCounter = document.getElementById('roomCounter');
const imageDisplay = document.getElementById('imageDisplay');

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
