/* VARIABLES */
let score = 0;
let target;
/* SETUP RUNS ONCE */
function setup() {
	createCanvas(400, 400);
  background(137, 213, 210);
  
  //Set speed of target change
  setInterval(changeTarget, 1000);
  //Create game sprite
  target = new Sprite(100, 100, 50);
  target.color = 'black';

}

/* DRAW LOOP REPEATS */
function draw() {
  background(137, 213, 210);
  
  //Draw the score
  fill(0, 128, 128);
  textAlign(LEFT);
  textSize(20);
  text('Score = ' + score, 10, 30);
  
  ////Increase score when player clicks target
  if (target.mouse.presses()) {

    if (target.shape == 'circle') {
      score = score + 1;
    }
    else {
      score = score - 1;
    }
  }
}

/* FUNCTIONS */
/* NOTE YOU WILL NOT HAVE TO CHANGE THIS PART */ 
function changeTarget(){
  //Move target to random locations
  target.x = random(25, 375);
  target.y = random(25, 375);

  //Change shape of target with 50% chance being a circle, and 50% chance being a square.
  if (random() > 0.5) {
    target.shape = 'circle';
    
  }
  else {
    target.shape = 'box';      
  }
  
}

