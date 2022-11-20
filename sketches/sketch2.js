let flakeImg;
let snowflakes = [];
const NUM_SNOWFLAKES = 1500;

function preload() {
    flakeImg = loadImage('snowflake25.png');
}

function setup() {
    background(0);
    createCanvas(innerWidth, innerHeight);

    for (let i = 0; i < NUM_SNOWFLAKES; i++) {
        snowflakes.push(new Snowflake());
    }
}

function draw() {
    background(0);
    snowflakes.forEach(flake => {
        flake.update();
        flake.draw();
    })
}


class Snowflake {

    constructor() {
        this.size = random(3, 8);
        this.pos = createVector(random(0, width), random(-20000, -100));
        this.startX = this.pos.x;
        this.velY = random(0.1, 0.5);
        this.accY = random(0.00001, 0.00002);
        this.radius = random(40, 60);
        this.rate = random(100, 400);
    }

    update() {

        this.velY+=this.accY;
        this.pos.x=this.startX + sin(frameCount/this.rate) * this.radius;
        this.pos.y+=this.velY;
        
        if(this.pos.y > height + this.size) {
            this.pos.y = -20;
        }
    }

    draw() {
        image(flakeImg, this.pos.x, this.pos.y, this.size, this.size);
        textSize(20);
        fill(255);
    }
}