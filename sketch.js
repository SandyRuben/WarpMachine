let numStars = 500;
let stars = [];
let shipSpeed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  this.depth = height/5;
 
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
}

function draw() {
  translate(width * .5, height *.5);
  background(0);

  stars.forEach(element => {
    element.move();
    element.show();
  });
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}

class Star {

  constructor() {

    //Three-Dimensional Vector to store location
    let initialX = random(-width, width) * .05;
    let initialY = random(-height, height) * .05;
    let initialZ = random(0, depth);
    this.location = createVector(initialX, initialY, initialZ);

    //Visual Star Properties
    this.starSize = random(.5, 1);
    
    let red = random(100, 230);
    let green = random(100, 230);
    let blue = random(100, 230);
    this.starColor = color(red, green, blue);
  }

  reset() {

    //Reset to front
    if (this.location.z > depth) {
      let initialX = random(-width, width) * .05;
      let initialY = random(-height, height) * .05;
      let initialZ = 0;
      this.location = createVector(initialX, initialY, initialZ);
    } 
    //Reset to back
    else {
      let initialX = random(-width, width) * .05;
      let initialY = random(-height, height) * .05;
      let initialZ = depth;
      this.location = createVector(initialX, initialY, initialZ);
    }

    //Set new Star Properties
    this.starSize = random(.5, 1);

    let red = random(100, 230);
    let green = random(100, 230);
    let blue = random(100, 230);
    this.starColor = color(red, green, blue);
  }

  move() {

    //Progress the stars according to speed
    this.location.add(createVector(0,0,shipSpeed));
    
    //Collision check
    if (this.location.z > depth || this.location.z < 0) {
      this.reset();
    };

  }

  show() {

    //formatting for star visuals
    fill(this.starColor);

    //scale star size based on distance
    this.starRadius = map(this.location.z, 0, depth, this.starSize, 0);
    strokeWeight(this.starRadius * 2);
    stroke(this.starColor, 10);
    
    //scale the location to simulate a 3rd dimension
    this.scaledX = map(this.location.x / this.location.z, 0, 1, 0, width);
    this.scaledY = map(this.location.y / this.location.z, 0, 1, 0, height);
    this.scaledLocation = createVector(this.scaledX, this.scaledY);

    //draw stars in calculated position
    rect(this.scaledLocation.x, this.scaledLocation.y, this.starRadius, this.starRadius);
  
    // print("scaledX: ", scaledX);
    // print("scaledY: ", scaledY);
    // print("width", width);
    // print("height", height);
    // print("depth", this.location.z);

    // print ("this.location.x / this.location.z: ", this.location.x / this.location.z);
    // print ("this.location.y / this.location.z: ", this.location.y / this.location.z);
    // print("this.scaledLocation.x", this.scaledX);
    // print("this.scaledLocation.y", this.scaledY);
    // print(width);
    // print(height);
  }

}
