//Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let catcher, fallingObject;
let score = 0;
/* PRELOAD LOADS FILES */
function preload() {

}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);

  //Create catcher 
  catcher = new Sprite(200, 380, 100, 20);
  catcher.color = color(95, 158, 160);
  catcher.collider = "kinematic";

  //Create falling object
  fallingObject = new Sprite(100, 0, 10);
  fallingObject.color = color(0, 128, 128);
  fallingObject.vel.y = 2;
  

}

/* DRAW LOOP REPEATS */
function draw() {
  background(224, 224, 224);

  // Draw directions to screen
  fill(0);
  textSize(12);
  text("Move the \ncatcher with the \nleft and right \narrow keys to \ncatch the falling \nobjects.", width - 100, 20);
  //If falling Object reaches bottom, move back to random position at top
if (fallingObject.y >= height) {
  fallingObject.y = 0;
  fallingObject.x = random(width);
  fallingObject.vel.y = random(1, 5);
}
  //Move catcher
  if (kb.pressing("left")) {
    catcher.vel.x = -3;
  } else if (kb.pressing("right")) {
    catcher.vel.x = 3;
  } else {
    catcher.vel.x = 0;
  }
  //Stop catcher at edges of screen
  //the following isn't necesssary cause catcher is kinematic
  if (catcher.x < 50){
    catcher.pos.x = 50;
  } else if (catcher > 350){
    catcher.x = 350;
  }
  ////If fallingObject collides with catcher, move back to random position at top
if (fallingObject.collides(catcher)) {
  fallingObject.y = 0;
  fallingObject.x = random(width);
  fallingObject.vel.x = random(1,5);
  fallingObject.direction = "down";
  score = score + 1;
  }
  fill(0,128,128);
  textSize(20);
  text("Score = " + score, 10, 30);
  
}
