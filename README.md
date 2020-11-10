# Frogger

Frogger is a computer game which the objective is to help the frog reach its home by crossing the dangerous roads and a dangerous river.

# Table of Contents
[How To Play](#how-to-play)
[Code Breakdown](#code-breakdown)
[HTML](#HTML)
[CSS](#CSS)
[JAVASCRIPT](#JAVASCRIPT)
[Constructor Methods](#constructor-methods)
[Event Listeners](#event-listeners)
[Functions](#Functions)
[Javascript Functions](#javascript-functions)

# How To Play
To begin, click the Start the game button. The frog will appear on the bottom center of the canvas. The frog moves by the awsd keys. The frog needs to croos the roads and river to reach its home. The frog needs to avoid the vehicles and ride the thing on the river. After you've won or lost, click the reset button to clear the screen. Then, click the start the game button to play again. The score is calculated by the using the time taken, lives remaining and the x coordinate of the frog.

# Code Breakdown

# HTML
The container div holds the canvas element and aside elements. The footer holds the instructions, my github link, and an embeded link to a spotify playlist.
```html
<div id="container">
    <aside id="top-left"><h1>FROGGER</h1></aside>
    <aside id="top-right"><h3 id="time"></h3></aside>
    <main>
        <canvas id="game" width="600" height="600"></canvas>
    </main>
    <aside id="btm-left"><h2 id ="reset">RESET</h2></aside>
    <aside id="btm-right"><h2 id="start">START THE GAME</h2></aside>
</div>
<footer>
    <h3>Instructions</h3>
    <h4>Help the frog reach its on the top before time runs out. Move the frog by using awsd keys. Avoid the vehicles on the road. Ride the turtles and logs to avoid falling into the water.</h4><br>
    <a href="https://github.com/richardleung1/frogger"><img src="https://miro.medium.com/max/700/1*J8O2xd9ZqxWr2x6EP4MHmg.png" alt="Github"></a><br><br>
    <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0" width="500" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
</footer>
```

# CSS
The CSS formats the container and other elements.
```css
html,body {
    margin: 0;
    padding: 0;
}

body {
    padding-top: 1em;
    text-align: center;
    background-image: url(https://media-cdn.tripadvisor.com/media/photo-c/2560x500/0f/38/c0/5c/view-of-the-lake-from.jpg);
    background-size: cover;
    font-family: 'Playfair Display', serif;
}

h1 {
    color: goldenrod;
    font-size: 40px;
}

h2, h3 {
    color: lightgoldenrodyellow;
}

aside {
    background-color: rgb(167, 167, 145);
}

canvas {
    background-color:black;
}

#container {
    max-width: 650px;
    background-color: lightblue;
    margin: 0 auto;
    padding: 1em;
    display: grid;
    grid-gap: 5px;
    grid-template-rows: auto;
    grid-template-columns: 33% 33% 33%;
    grid-template-areas: "top-left top-left top-right"
        "game game game"
        "btm-left btm-right btm-right";
}

#top-left, #top-right, #btm-left, #btm-right {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(69, 69, 69);
}

#top-left {
    grid-area: top-left;
}

#top-right {
    grid-area: top-right;
}

main {
    grid-area: game;
}


#btm-left {
    grid-area: btm-left;
}

#btm-right {
    grid-area: btm-right;
}

footer {
    margin: 0 auto;
    max-width: 700px;
    color: white;
    margin-top: 20px;
}
```

# JAVASCRIPT
# Constructor Methods
Constructor methods used to create objects
```javascript
class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.lives = 3;
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

class River {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render() {
        ctx.drawImage(waterImg, this.x, this.y, this.width, this.height);
    }
};

class Log {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render() {
        ctx.drawImage(logImg, this.x, this.y, this.width, this.height);
    }
};

class Turtle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render() {
        ctx.drawImage(turtleImg, this.x, this.y, this.width / 2, this.height);
        ctx.drawImage(turtleImg, this.x + this.width / 2, this.y, this.width / 2, this.height);
    }
};
```

# Event Listeners
A click event listener is added to the start button which calls the functions at  specific intervals and reassign variables. A click event listener is added to the reset button which clears the canvas and intervals and removes the keyup event listener.
```javascript
document.getElementById('start').addEventListener('click', function() {

    time = 150;
    frog.lives = 3;
    frog.x = 300;
    frog.y = 575;
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
    setInterval(function(){waterFlow(turtles1, "left");}, 50),
    setInterval(function(){waterFlow(logs1, "right");}, 50),
    setInterval(function(){waterFlow(turtles2, "left");}, 50),
    setInterval(function(){waterFlow(logs2, "right");}, 50)];

    document.querySelector('#reset').addEventListener('click', function() {
        ctx.clearRect(0, 0, game.width, game.height);
        clearInterval(timeInterval);
        clearInterval(paintInterval);
        timeDisplay.textContent = '';
        trafficInterval.forEach(function (interval) {
            clearInterval(interval);
        })
        riverInterval.forEach(function (interval) {
            clearInterval(interval);
        })
        document.removeEventListener('keyup', moveFrog);
    })
});
```
# Functions
The functions help paint the canvas, move the objects on screen, and detect collision.
```javascript
function timeCount() {
    timeDisplay.textContent = `Time Left: ${time} seconds
    Lives: ${frog.lives}`;
    time--;
    if (time === 0) {
        frog.lives = 0;
    };
};

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
                && frog.x >= element.x - 12.5
                && frog.x + frog.width <= element.x + element.width + 12.5
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
                && frog.x >= element.x - 12.5
                && frog.x + frog.width <= element.x + element.width + 12.5
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
                frog.lives--;
                if (frog.y > 425 && frog.y < 575) {
                    frog.x = 300;
                    frog.y = 575;
                } else if (frog.y > 275 && frog.y < 425) {
                    frog.x = 300;
                    frog.y = 425;
                } else if (frog.y > 125 && frog.y < 275) {
                    frog.x = 300;
                    frog.y = 275;
                }
            }
        })
    })
};

function onPlatform() {
    for (let i = 0; i < things.length; i++) {
        const lane = things[i];
        for (let j = 0; j < lane.length; j++) {
            const element = lane[j];
            if (frog.x >= element.x - 12.5
            && frog.x + frog.width <= element.x + element.width + 12.5
            && frog.y === element.y) {
                return true;
            } else {
                continue;
            }
        }   
    }
}

function detectDrown() {
    if (frog.y < 125 && frog.y > 0) {
        if (!onPlatform()) {
            frog.lives--;
            frog.x = 300;
            frog.y = 125;
        }
    }
};

function checkBorder() {
    if (frog.x < 0 || frog.x > 600) {
        frog.lives--;
        frog.x = 300;
        frog.y = 125;
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
    let score = Math.floor(100000 / frog.x * frog.lives);
    timeDisplay.textContent = `Score: ${score}`;
    ctx.font = "20px Arial";
    ctx.fillStyle = "green";
    ctx.textAlign = "center";
    ctx.fillText('Congratulations! The frog has reached its home. Please click the reset button to play again.', game.width/2, game.height/2, game.width);
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
    river.render();

    things.forEach(function (lane) {
        lane.forEach(function (thing){
            thing.render();
        })
    })
    if (frog.lives > 0) {
        frog.render();
    } else {
        lossMessage();
    }
    detectHit();
    detectDrown();
    checkWin();
    checkBorder();
};
```

# Javascript Functions

| Functions | Description |
| ----------- | ----------- |
| `timeCount()` | displays timecount and player lives and kills the frog when time runs out |
| `moveFrog(evt)` | move the frog when evt.key is equal to 'a', 's', 'w', or 'd' |
| `waterFlow(lane, direction)` | moves the things on the river in the direction and move frog with river if on a thing |
| `moveVehicle(vehicles)` | move vehicles in a loop |
| `detectHit()` | detect collision between frog and vehicles |
| `onPlatform()` | determine if frog is on a thing in river |
| `detectDrown()` | detect if frog fell in water |
| `checkBorder()` | detect if frog is outside of border |
| `lossMessage()` | display message if player has loss |
| `winMessage()` | display message if player has won |
| `checkWin()` | check if player has reached its home |
| `rePaint()` | clear and repaint canvas and call other functions |
