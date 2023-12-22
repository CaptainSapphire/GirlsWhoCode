/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40; 
let pupilWidth = 22;
let pupilHeight = 25;
/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background(204,229,255); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
    rectMode(CENTER);
  //Face
  fill(253,242,230);
  stroke(239,228,216);
  strokeWeight(2);
  ellipse(width/2,height/2,175,200);
  //Eyes
  if(mouseIsPressed){
     //Eyes closed
    fill(0);
    ellipse(170, 200, eyeWidth, eyeHeight/8); 
    ellipse(230, 200, eyeWidth, eyeHeight/8); 
  } else {
    //Eyes Open
  fill(255,255,255)
  ellipse(170, 170, eyeWidth, eyeHeight);
  ellipse(230, 170, eyeWidth, eyeHeight);
  //Pupils
  noStroke()
  fill(80,32, 32)
  ellipse(170, 170, pupilWidth, pupilHeight);
  ellipse(230, 170, pupilWidth, pupilHeight);
  }
  
  //Mouth
  fill(255,204,204)
  arc(200, 230, 50, 50, 0, 180);
  //Text
  fill("black")
  textSize(15)
  noStroke()
  text('Hi there! \nthis is my very first\n GWC project to reflect an avatar.', 20, 20)
  //Directions for mouse press
  noStroke()
  textSize(20)
  text('click to see\n me blink.',290,360)
  //Hair
  fill(216,213,127);
  rect(120,230,30,180);
  rect(280,230,30,180);
  arc(245,110,85,85,30,210);
  arc(155,110,85,85,330,150);

  //Cheeks
  fill(244,204,204);
  ellipse(150, 248, 25, 20); 
  ellipse(250, 248, 25, 20);
}
