let balls = [];

function setup() {
  createCanvas(550, 550);
   colorMode(HSB);
}

function mousePressed() {
  for (var i = 0; i < 160; ++i) {
    let size = random(20,40);
    //let size = 10;
    let b = new Ball(mouseX, mouseY, size);
    balls.push(b);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < balls.length; ++i) {
    balls[i].show();
    balls[i].update();
    if (balls[i].done()) {
      balls.splice(i, 1);
    }
  }

}


class Ball {

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.size = size;

    this.g = random(-.01, .01);
    this.alpha= 255;
      this.colour = random(['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423']);
  }
  show() {
    noStroke();
    fill(this.colour);
    ellipse(this.x, this.y, -this.size);
  }
  update() {

    this.x += this.vx +random(-2, 2);
    this.vx += this.g;
    this.y += this.vy+random(-2, 2);
    this.vy += this.g;
    this.size -= .60;

  }
  done() {
    return this.size < 0
  }

}