let flakeImg;
let snowflakes = [];
const NUM_SNOWFLAKES = 2000;

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
        this.size = 12;
        this.pos = createVector(random(0, width), random(-10000, -1000));
        this.vel = createVector(random(-0.05, 0.05), .1);
        this.acc = createVector(0, random(0.003, 0.005));
        this.drag = 0.999;
    }


    update() {

        this.vel = this.vel.add(this.acc);
        this.vel = this.vel.mult(this.drag);
        this.pos = this.pos.add(this.vel);

        if (this.pos.y > height + this.size) {
            this.pos.y = random(-1000, -this.size)
        }
        
    }

    draw() {
        image(flakeImg, this.pos.x, this.pos.y, this.size, this.size);
    }
}