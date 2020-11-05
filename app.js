const game = document.querySelector('#game');
const timeDisplay = document.querySelector('#time');
const startDisplay = document.querySelector('#start')
const restartDisplay = document.querySelector('#restart')

const computedStyle = getComputedStyle(game);
const height = computedStyle.height;
const width = computedStyle.width;

let time = 300;
function timeCount() {
    timeDisplay.textContent = `Time Left: ${time} seconds`;
    time--;
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

class Lane {
    constructor(y, color) {
        this.x = 0;
        this.y = y;
        this.color = color;
        this.width = 600;
        this.height = 25;
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


const frog = new Player(300,  575,  "#50C878", 25, 25);

const safeLanes = [new Lane(425, "lightgrey"), new Lane(275, "#228B22"), new Lane(125, "#00AB66"), new Lane(0, "#8cc751")]

const lane1 = [new Vehicle(0,  550,  "red", 25, 25), new Vehicle(100,  550,  "orange", 25, 25), new Vehicle(200,  550,  "cyan", 25, 25)];

const lane2 = [new Vehicle(100,  525,  "red", 25, 25), new Vehicle(250,  525,  "orange", 25, 25), new Vehicle(400,  525,  "cyan", 25, 25)];

const lane3 = [new Vehicle(125,  500,  "red", 25, 25), new Vehicle(325,  500,  "orange", 25, 25), new Vehicle(525,  500,  "cyan", 25, 25)];

const lane4 = [new Vehicle(50,  475,  "red", 25, 25), new Vehicle(225,  475,  "orange", 25, 25), new Vehicle(400,  475,  "cyan", 25, 25)];

const lane5 = [new Vehicle(0,  450,  "red", 25, 25), new Vehicle(200,  450,  "orange", 25, 25), new Vehicle(400,  450,  "cyan", 25, 25)];

const lane6 = [new Vehicle(0,  400,  "red", 25, 25), new Vehicle(100,  400,  "orange", 25, 25), new Vehicle(200,  400,  "cyan", 25, 25), new Vehicle(300,  400,  "purple", 25, 25)];

const lane7 = [new Vehicle(50,  375,  "red", 25, 25), new Vehicle(175,  375,  "orange", 25, 25), new Vehicle(300,  375,  "cyan", 25, 25), new Vehicle(425,  375,  "purple", 25, 25)];

const lane8 = [new Vehicle(100,  350,  "red", 25, 25), new Vehicle(250,  350,  "orange", 25, 25), new Vehicle(400,  350,  "cyan", 25, 25), new Vehicle(550,  350,  "purple", 25, 25)];

const lane9 = [new Vehicle(0,  325,  "red", 25, 25), new Vehicle(175,  325,  "orange", 25, 25), new Vehicle(350,  325,  "cyan", 25, 25), new Vehicle(525,  325,  "purple", 25, 25)];

const lane10 = [new Vehicle(0,  300,  "red", 25, 25), new Vehicle(150,  300,  "orange", 25, 25), new Vehicle(300,  300,  "cyan", 25, 25), new Vehicle(450,  300,  "purple", 25, 25)];

const lane11 = [new Vehicle(0,  250,  "red", 40, 25), new Vehicle(300,  250,  "orange", 40, 25)];

const lane12 = [new Vehicle(100,  225,  "red", 40, 25), new Vehicle(250,  225,  "orange", 40, 25), new Vehicle(500,  225,  "cyan", 40, 25)];

const lane13 = [new Vehicle(0,  200,  "red", 40, 25), new Vehicle(200,  200,  "orange", 40, 25), new Vehicle(400,  200,  "cyan", 40, 25)];

const lane14 = [new Vehicle(0,  175,  "red", 40, 25), new Vehicle(150,  175,  "orange", 40, 25), new Vehicle(300,  175,  "cyan", 40, 25), new Vehicle(450,  175,  "purple", 40, 25)];

const lane15 = [new Vehicle(0,  150,  "red", 40, 25), new Vehicle(150,  150,  "orange", 40, 25), new Vehicle(300,  150,  "cyan", 40, 25), new Vehicle(450,  150,  "purple", 40, 25)];

const water1 = [new Vehicle(50,  100,  "#35C0ED", 50, 25), new Vehicle(150,  100,  "#35C0ED", 50, 25), new Vehicle(250,  100,  "#35C0ED", 50, 25), new Vehicle(350,  100,  "#35C0ED", 50, 25), new Vehicle(450,  100,  "#35C0ED", 150, 25)];

const water2 = [new Vehicle(0,  75,  "#35C0ED", 50, 25), new Vehicle(150,  75,  "#35C0ED", 50, 25), new Vehicle(300,  75,  "#35C0ED", 50, 25), new Vehicle(450,  75,  "#35C0ED", 50, 25)];

const water3 = [new Vehicle(50,  50,  "#35C0ED", 75, 25), new Vehicle(175,  50,  "#35C0ED", 75, 25), new Vehicle(300,  50,  "#35C0ED", 75, 25), new Vehicle(425,  50,  "#35C0ED", 75, 25), new Vehicle(550,  50,  "#35C0ED", 50, 25)];

const water4 = [new Vehicle(75,  25,  "#35C0ED", 75, 25), new Vehicle(225,  25,  "#35C0ED", 75, 25), new Vehicle(375,  25,  "#35C0ED", 75, 25), new Vehicle(525,  25,  "#35C0ED", 75, 25)];

const turtles1 = [new Vehicle(0,  100,  "#C6C0C0 ", 50, 25), new Vehicle(100,  100,  "#C6C0C0 ", 50, 25), new Vehicle(200,  100,  "#C6C0C0 ", 50, 25), new Vehicle(300,  100,  "#C6C0C0 ", 50, 25), new Vehicle(400,  100,  "#C6C0C0 ", 50, 25)];

const logs1 = [new Vehicle(50,  75,  "brown", 100, 25), new Vehicle(200,  75,  "brown", 100, 25), new Vehicle(350,  75,  "brown", 100, 25), new Vehicle(500,  75,  "brown", 100, 25)];

const turtles2 = [new Vehicle(0,  50,  "#C6C0C0 ", 50, 25), new Vehicle(125,  50,  "#C6C0C0 ", 50, 25), new Vehicle(250,  50,  "#C6C0C0 ", 50, 25), new Vehicle(375,  50,  "#C6C0C0 ", 50, 25), new Vehicle(500,  50,  "#C6C0C0 ", 50, 25)];

const logs2 = [new Vehicle(0,  25,  "brown", 75, 25), new Vehicle(150,  25,  "brown", 75, 25), new Vehicle(300,  25,  "brown", 75, 25), new Vehicle(450,  25,  "brown", 75, 25)];

const traffic = [lane1, lane2, lane3, lane4, lane5, lane6, lane7, lane8, lane9, lane10, lane11, lane12, lane13, lane14, lane15, water1, water2, water3, water4]

const things = [turtles1, turtles2, logs1, logs2]

const logRiver = [water2, logs1, water4, logs2]
const turtleRiver = [water1, turtles1, water3, turtles2]

document.getElementById('start').addEventListener('click', function() {

    frog.alive = true
    document.addEventListener('keyup', moveFrog);
    let timeInterval = setInterval(timeCount, 1000);
    let paintInterval = setInterval(rePaint, 1000/100);
    let trafficInterval = [
    setInterval(function(){moveVehicle(lane1);}, 12),
    setInterval(function(){moveVehicle(lane2);}, 14),
    setInterval(function(){moveVehicle(lane3);}, 11),
    setInterval(function(){moveVehicle(lane4);}, 12),
    setInterval(function(){moveVehicle(lane5);}, 10),
    setInterval(function(){moveVehicle(lane6);}, 15),
    setInterval(function(){moveVehicle(lane7);}, 14),
    setInterval(function(){moveVehicle(lane8);}, 13),
    setInterval(function(){moveVehicle(lane9);}, 12),
    setInterval(function(){moveVehicle(lane10);}, 10),
    setInterval(function(){moveVehicle(lane11);}, 9),
    setInterval(function(){moveVehicle(lane12);}, 15),
    setInterval(function(){moveVehicle(lane13);}, 13),
    setInterval(function(){moveVehicle(lane14);}, 12),
    setInterval(function(){moveVehicle(lane15);}, 10)]
    
    let riverInterval = [
    setInterval(function(){waterFlow(water1, "left");}, 15),
    setInterval(function(){waterFlow(turtles1, "left");}, 15),
    setInterval(function(){waterFlow(water2, "right");}, 15),
    setInterval(function(){waterFlow(logs1, "right");}, 15),
    setInterval(function(){waterFlow(water3, "left");}, 15),
    setInterval(function(){waterFlow(turtles2, "left");}, 15),
    setInterval(function(){waterFlow(water4, "right");}, 15),
    setInterval(function(){waterFlow(logs2, "right");}, 15)]

    document.querySelector('#reset').addEventListener('click', function() {
        ctx.clearRect(0, 0, game.width, game.height)
        frog.x = 300
        frog.y = 575
        clearInterval(timeInterval)
        clearInterval(paintInterval)
        timeDisplay.textContent = '';
        time = 300
        trafficInterval.forEach(function (interval) {
            clearInterval(interval);
        })
        riverInterval.forEach(function (interval) {
            clearInterval(interval);
        })
        document.removeEventListener('keyup', moveFrog)
    })

});

function moveFrog(evt) {
    if (evt.key === 'w') {
        frog.y -= 25;
    } else if (evt.key === 'a') {
        frog.x -= 25;
    } else if (evt.key === 's') {
        frog.y += 25;
    } else if (evt.key === 'd') {
        frog.x += 25;
    }
};

function waterFlow(lane, direction) {
    lane.forEach(function (element) {
        if (direction === "left") {
            if (element.x === -element.width) {
                element.x = 600 - element.width;
            } else {
                element.x -= 1;
                // if (frog.y === element.y) {
                //     frog.x -= 1;
                // }
            }
        } else {
            if (element.x === 600) {
                element.x = 0;
            } else {
                element.x += 1;
                // if (frog.y === element.y) {
                //     frog.x -= 1;
                // }
            }
        }
    })
}

function moveVehicle(vehicles) {
    vehicles.forEach(function (vehicle) {
        if (vehicle.x < -vehicle.width) {
            vehicle.x += (600 + vehicle.width);
        } else {
            vehicle.x -= 1;
        }
    })
}

function detectHit( ) {
    traffic.forEach(function (lane) {
        lane.forEach(function (vehicle) {
            if (frog.x < vehicle.x + vehicle.width
                && frog.x + frog.width > vehicle.x
                && frog.y < vehicle.y + vehicle.height
                && frog.y + frog.height > vehicle.y) {
                frog.alive = false;
            }
        })
    })
};


function rePaint() {
    ctx.clearRect(0, 0, game.width, game.height)
    safeLanes.forEach(function (lane) {
        lane.render()
    })
    traffic.forEach(function (lane) {
        lane.forEach(function (vehicle) {
            vehicle.render()
        })
    })
    logRiver.forEach(function (lane) {
        lane.forEach(function (water){
            water.render();
        })
    })
    turtleRiver.forEach(function (lane) {
        lane.forEach(function (water){
            water.render();
        })
    })
    if (frog.alive) {
        frog.render();
    // } else {
        
    }
    detectHit();
};

