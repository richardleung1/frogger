const game = document.querySelector('#game');
const timeDisplay = document.querySelector('#time');
const startDisplay = document.querySelector('#start');
const restartDisplay = document.querySelector('#restart');
const frogImg = new Image();
frogImg.src = 'frog.png'

const computedStyle = getComputedStyle(game);
const height = computedStyle.height;
const width = computedStyle.width;

let time = 150;
function timeCount() {
    timeDisplay.textContent = `Time Left: ${time} seconds`;
    time--;
    if (time === 0) {
        frog.alive = false;
    };
}

game.height = height.replace('px', '');
game.width = width.replace('px', '');
const ctx = game.getContext('2d');

class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.alive = true;
    }
    render() {
        ctx.drawImage(frogImg, this.x, this.y, this.width, this.height);
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
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

class Vehicle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

class Thing {
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


const frog = new Player(300, 575, 25, 25);

const safeLanes = [new Lane(425, "lightgrey"), new Lane(275, "#93BFE2"), new Lane(125, "#593DDA"), new Lane(0, "#87DA3D")];

const lane1 = [new Vehicle(0, 550, 25, 25), new Vehicle(100, 550, 25, 25), new Vehicle(200, 550, 25, 25)];

const lane2 = [new Vehicle(100, 525, 25, 25), new Vehicle(250, 525, 25, 25), new Vehicle(400, 525, 25, 25)];

const lane3 = [new Vehicle(125, 500, 25, 25), new Vehicle(325, 500, 25, 25), new Vehicle(525, 500, 25, 25)];

const lane4 = [new Vehicle(50, 475, 25, 25), new Vehicle(225, 475, 25, 25), new Vehicle(400, 475, 25, 25)];

const lane5 = [new Vehicle(0, 450, 25, 25), new Vehicle(200, 450, 25, 25), new Vehicle(400, 450, 25, 25)];

const lane6 = [new Vehicle(0, 400, 25, 25), new Vehicle(100, 400, 25, 25), new Vehicle(200, 400, 25, 25), new Vehicle(300, 400, 25, 25)];

const lane7 = [new Vehicle(50, 375, 25, 25), new Vehicle(175, 375, 25, 25), new Vehicle(300, 375, 25, 25), new Vehicle(425, 375, 25, 25)];

const lane8 = [new Vehicle(100, 350, 25, 25), new Vehicle(250, 350, 25, 25), new Vehicle(400, 350, 25, 25), new Vehicle(550, 350, 25, 25)];

const lane9 = [new Vehicle(0, 325, 25, 25), new Vehicle(175, 325, 25, 25), new Vehicle(350, 325, 25, 25), new Vehicle(525, 325, 25, 25)];

const lane10 = [new Vehicle(0, 300, 25, 25), new Vehicle(150, 300, 25, 25), new Vehicle(300, 300, 25, 25), new Vehicle(450, 300, 25, 25)];

const lane11 = [new Vehicle(0, 250, 40, 25), new Vehicle(300, 250, 40, 25)];

const lane12 = [new Vehicle(100, 225, 40, 25), new Vehicle(250, 225, 40, 25), new Vehicle(500, 225, 40, 25)];

const lane13 = [new Vehicle(0, 200, 40, 25), new Vehicle(200, 200, 40, 25), new Vehicle(400, 200, 40, 25)];

const lane14 = [new Vehicle(0, 175, 40, 25), new Vehicle(150, 175, 40, 25), new Vehicle(300, 175, 40, 25), new Vehicle(450, 175, 40, 25)];

const lane15 = [new Vehicle(0, 150, 40, 25), new Vehicle(150, 150, 40, 25), new Vehicle(300, 150, 40, 25), new Vehicle(450, 150, 40, 25)];

const water1 = [new Thing(50, 100, "#3FA6F7", 50, 25), new Thing(150, 100, "#3FA6F7", 50, 25), new Thing(250, 100, "#3FA6F7", 50, 25), new Thing(350, 100, "#3FA6F7", 50, 25), new Thing(450, 100, "#3FA6F7", 150, 25)];

const water2 = [new Thing(0, 75, "#3FA6F7", 50, 25), new Thing(150, 75, "#3FA6F7", 50, 25), new Thing(300, 75, "#3FA6F7", 50, 25), new Thing(450, 75, "#3FA6F7", 50, 25)];

const water3 = [new Thing(50, 50, "#3FA6F7", 75, 25), new Thing(175, 50, "#3FA6F7", 75, 25), new Thing(300, 50, "#3FA6F7", 75, 25), new Thing(425, 50, "#3FA6F7", 75, 25), new Thing(550, 50, "#3FA6F7", 50, 25)];

const water4 = [new Thing(75, 25, "#3FA6F7", 75, 25), new Thing(225, 25, "#3FA6F7", 75, 25), new Thing(375, 25, "#3FA6F7", 75, 25), new Thing(525, 25, "#3FA6F7", 75, 25)];

const turtles1 = [new Thing(0, 100, "#C6C0C0 ", 50, 25), new Thing(100, 100, "#C6C0C0 ", 50, 25), new Thing(200, 100, "#C6C0C0 ", 50, 25), new Thing(300, 100, "#C6C0C0 ", 50, 25), new Thing(400, 100, "#C6C0C0 ", 50, 25)];

const logs1 = [new Thing(50, 75, "brown", 100, 25), new Thing(200, 75, "brown", 100, 25), new Thing(350, 75, "brown", 100, 25), new Thing(500, 75, "brown", 100, 25)];

const turtles2 = [new Thing(0, 50, "#C6C0C0 ", 50, 25), new Thing(125, 50, "#C6C0C0 ", 50, 25), new Thing(250, 50, "#C6C0C0 ", 50, 25), new Thing(375, 50, "#C6C0C0 ", 50, 25), new Thing(500, 50, "#C6C0C0 ", 50, 25)];

const logs2 = [new Thing(0, 25, "brown", 75, 25), new Thing(150, 25, "brown", 75, 25), new Thing(300, 25, "brown", 75, 25), new Thing(450, 25, "brown", 75, 25)];

const traffic = [lane1, lane2, lane3, lane4, lane5, lane6, lane7, lane8, lane9, lane10, lane11, lane12, lane13, lane14, lane15];

const river = [water1, water2, water3, water4];
const things = [turtles1, turtles2, logs1, logs2];

const logRiver = [water2, logs1, water4, logs2];
const turtleRiver = [water1, turtles1, water3, turtles2];

traffic.forEach(function (lane) {
    lane.forEach(function (vehicle) {
            vehicle.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    })
})

document.getElementById('start').addEventListener('click', function() {

    frog.alive = true;
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
    setInterval(function(){moveVehicle(lane15);}, 10)];
    
    let riverInterval = [
    setInterval(function(){waterFlow(water1, "left");}, 50),
    setInterval(function(){waterFlow(turtles1, "left");}, 50),
    setInterval(function(){waterFlow(water2, "right");}, 50),
    setInterval(function(){waterFlow(logs1, "right");}, 50),
    setInterval(function(){waterFlow(water3, "left");}, 50),
    setInterval(function(){waterFlow(turtles2, "left");}, 50),
    setInterval(function(){waterFlow(water4, "right");}, 50),
    setInterval(function(){waterFlow(logs2, "right");}, 50)];
    

    document.querySelector('#reset').addEventListener('click', function() {
        ctx.clearRect(0, 0, game.width, game.height);
        frog.x = 300;
        frog.y = 575;
        clearInterval(timeInterval);
        clearInterval(paintInterval);
        timeDisplay.textContent = '';
        time = 150;
        trafficInterval.forEach(function (interval) {
            clearInterval(interval);
        })
        riverInterval.forEach(function (interval) {
            clearInterval(interval);
        })
        document.removeEventListener('keyup', moveFrog);
    })

});

function moveFrog(evt) {
    if (evt.key === 'w') {
        frog.y -= 25;
    } else if (evt.key === 'a' && frog.x > 0) {
        frog.x -= 25;
    } else if (evt.key === 's' && frog.y < 575) {
        frog.y += 25;
    } else if (evt.key === 'd' && frog.x < 575) {
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
                if ((lane === turtles1 || lane === turtles2)
                && frog.x >= element.x
                && frog.x + frog.width <= element.x + element.width 
                && frog.y === element.y) {
                    frog.x -= 1;
                }
            }
        } else {
            if (element.x === 600) {
                element.x = 0;
            } else {
                element.x += 1;
                if ((lane === logs1 || lane === logs2)
                && frog.x >= element.x
                && frog.x + frog.width <= element.x + element.width 
                && frog.y === element.y) {
                    frog.x += 1;
                }
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

function detectHit() {
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

function detectDrown() {
    river.forEach(function (lane) {
        lane.forEach(function (water) {
            if (frog.x < water.x + water.width
                && frog.x + frog.width > water.x
                && frog.y < water.y + water.height
                && frog.y + frog.height > water.y) {
                frog.alive = false;
            }
        })
    })
};

function checkBorder() {
    if (frog.x < 0 || frog.x > 600) {
        frog.alive = false;
    }
}

function lossMessage() {
    ctx.clearRect(0, 0, game.width, game.height);
    timeDisplay.textContent = '';
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText('The frog has died. Please click the reset button to play again.', game.width/2, game.height/2, game.width);
}

function winMessage() {
    ctx.clearRect(0, 0, game.width, game.height);
    let score = Math.floor(100000 / frog.x);
    timeDisplay.textContent = `Score: ${score}`;
    ctx.font = "20px Arial";
    ctx.fillStyle = "green";
    ctx.textAlign = "center";
    ctx.fillText('Congratulations! You have reached the island. Please click the reset button to play again.', game.width/2, game.height/2, game.width);
}

function checkWin() {
    if (frog.y === 0) {
        winMessage();
    }
}

function rePaint() {
    ctx.clearRect(0, 0, game.width, game.height)
    safeLanes.forEach(function (lane) {
        lane.render();
    })
    traffic.forEach(function (lane) {
        lane.forEach(function (vehicle) {
            vehicle.render();
        })
    })
    river.forEach(function (lane) {
        lane.forEach(function (water){
            water.render();
        })
    })
    things.forEach(function (lane) {
        lane.forEach(function (thing){
            thing.render();
        })
    })
    if (frog.alive) {
        frog.render();
    } else {
        lossMessage();
    }
    detectHit();
    detectDrown();
    checkWin();
};