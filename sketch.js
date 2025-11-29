let flakeImg;
let snowflakes = [];
const NUM_SNOWFLAKES = 4500;
const bgColor = [0, 0, 0];

function preload() {
    flakeImg = loadImage('snowflake25.png');
}

function setup() {
    background(bgColor);
    createCanvas(innerWidth, innerHeight);

    for (let i = 0; i < NUM_SNOWFLAKES; i++) {
        snowflakes.push(new Snowflake());
    }
}

function draw() {
    background(bgColor);
    snowflakes.forEach(flake => {
        flake.update();
        flake.draw();
    })
}


class Snowflake {

    constructor() {
        this.size = floor(random(3, 12));
        this.pos = createVector(random(0, width), random(-300000, -200));
        this.startX = this.pos.x;
        this.velY = random(0.02, 0.05);
        this.accY = random(0.0000005, 0.000001);
        this.radius = random(20, 160);
        this.rate = random(100, 500); // larger is slower
        this.noiseStep = random(0.01, 0.02);
    }

    update() {
        
        //ensure the snow never gets too fast
        if(this.velY < 100) {
            this.velY+=this.accY;
        }
        this.pos.x=this.startX + sin(frameCount/this.rate) * this.radius;
        this.pos.y+=this.velY;
        
        if(this.pos.y > height + this.size) {
            this.pos.y = -50;
        }
    }

    draw() {
        image(flakeImg, this.pos.x, this.pos.y, this.size, this.size);
        //textSize(20);
        //fill(255);
         
    }
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}
