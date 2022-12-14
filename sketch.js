let flakeImg;
let snowflakes = [];
const NUM_SNOWFLAKES = 1500;
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
        this.size = floor(random(3, 10));
        this.pos = createVector(random(0, width), random(-200000, -200));
        this.startX = this.pos.x;
        this.velY = random(0.2, 0.5);
        this.accY = random(0.000005, 0.00001);
        this.radius = random(40, 80);
        this.rate = random(200, 400); // larger is slower
    }

    update() {
        
        //ensure the snow never gets too fast
        if(this.velY < 1.5) {
            this.velY+=this.accY;
        }
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

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}