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
  
      //Choosing random spot on canvas
      let initialX = random(-width, width) * .05;
      let initialY = random(-height, height) * .05;
  
      //Back to front if hitting the back
      if (this.location.z > depth) {
        this.initialZ = 0;
      } 
      //Visversa
      else {
        this.initialZ = depth;
      }
      
      this.location = createVector(initialX, initialY, this.initialZ); 
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