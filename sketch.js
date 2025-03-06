numStars = 500;

let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  zDepth = 500; //depth of the '3rd dimension'
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);

  stars.forEach(element => {
    element.move();
    element.show();
  });
}

class Star {

  constructor() {

    //location Vector Creation
    let initialX = random(0, width);
    let initialY = random(0, height);
    let initialZ = random(0, zDepth);
    let location = createVector(this.initialX, this.initialY, this.initialZ);

    //other important variables
    let starSpeed = random(0.1, 1);
    starSize = random(.5, 3);
    
    red = random(100, 230);
    green = random(100, 230);
    blue = random(100, 230);
    starColor = color(red, green, blue);

  }

  move() {
    location.z -= starSpeed;
  }

  show() {
    fill(starColor);

    starRadius = map(location.z, 0, 500, starSize, 0);
    strokeWeight(starRadius * 2);
    stroke(starColor, 100);
    
    rect(location.x, location.y, starRadius, starRadius);

  }

  
}
