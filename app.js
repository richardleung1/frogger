const game = document.querySelector('#game');
const timeDisplay = document.querySelector('#time');
const startDisplay = document.querySelector('#start')
const restartDisplay = document.querySelector('#restart')

const computedStyle = getComputedStyle(game);
const height = computedStyle.height;
const width = computedStyle.width;

let time = 0;
function timeCount() {
    time++;
    timeDisplay.textContent = `Time Used: ${time} seconds`;
}

game.height = height.replace('px', '')
game.width = width.replace('px', '')
const ctx = game.getContext('2d');

class Player {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;
    }
    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
};

class Vehicle {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
    }
    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
};

const frog = new Player(290,  580,  "green", 20, 20);
const cars = [new Vehicle(200,  560,  "red", 20, 20), new Vehicle(300,  560,  "orange", 20, 20), new Vehicle(400,  560,  "cyan", 20, 20), new Vehicle(500,  560,  "purple", 20, 20)];

// console.log(cars)
// cars.forEach(function (car) {
//     car.render()
// });

document.getElementById('start').addEventListener('click', function() {

    setInterval(timeCount, 1000);
    setInterval(rePaint, 1000/60);
    moveFrog();
    setInterval(function(){moveVehicle(cars);}, 1000)
});

function moveFrog() {
    document.addEventListener('keyup', function(evt) {
        if (evt.key === 'w') {
            frog.y -= 20;
        } else if (evt.key === 'a') {
            frog.x -= 20;
        } else if (evt.key === 's') {
            frog.y += 20;
        } else if (evt.key === 'd') {
            frog.x += 20;
        }
    })
};

function moveVehicle(vehicles) {
    vehicles.forEach(function (vehicle) {
        if (vehicle.x === 0) {
            vehicle.x = 600;
        } else {
            vehicle.x -= 20;
        }
    })
}

// function detectHit(vehicles) {
//     if (vehicles) {
//         frog.alive = false;
//     }
// };

function rePaint() {
    ctx.clearRect(0, 0, game.width, game.height)
    if (frog.alive){
        frog.render()
    }
    cars.forEach(function (car) {
        car.render()
    })
};

