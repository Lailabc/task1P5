
let t = 0; // time variable

let colors = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

colors = [color(250,0,250),color(0,0,255),color(0,250,250),color(0,255,0),color(0,255,100),color(255,0,150)]
}

function draw() {

  background(250, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y +=50) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -2 * PI, 2 * PI, true);
      const yAngle = map(mouseY, 0, height, -2 * PI, 2 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / (width/5)) + yAngle * (y / (height/5));

      // each particle moves in a circle
      const myX = x + 10 * cos(4 * PI * t + angle);
      const myY = y + 50 * sin(2 * PI * t + angle);
      fill(random(colors.length));

      ellipse(myX, myY, 50); // draw particle
    }
  }
 
  t = t + 0.01; // update time
  
}
