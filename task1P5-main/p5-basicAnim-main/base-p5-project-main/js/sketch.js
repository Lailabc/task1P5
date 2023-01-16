
let t = 0; // time variable
let c;
let pink;
let blue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  c = color(200,0,100);
  pink = color(200,0,100);
  blue = color (0,100,200);
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
      fill(c);
   
      ellipse(myX, myY, 50); // draw particle
    }
  }
 
  t = t + 0.01; // update time
}
function mousePressed(){
  if (c === pink){
    c = blue;
  }else{
    c = pink;
  }
};
   