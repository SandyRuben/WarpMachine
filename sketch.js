let numStars = 500;
let stars = [];
let shipSpeed = 1;
let warpDriveSpeed = 10;
let warpDriveState = false;

function preLoad() {
  warpPulse = loadSound('//assets/warpPulse.mp3');
}

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

  if (warpDriveState) {
    warpDrive();
  }

  stars.forEach(element => {
    element.move();
    element.show();
  });

  
}

function warpDrive() {
  shipSpeed = warpDriveSpeed;
  if (!warpPulse.isPlaying()) {
    warpPulse.play();
  }
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}