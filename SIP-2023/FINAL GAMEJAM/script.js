//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let screen = 0;
let avoider1, avoider2, avoider3;
let player;
var beePlayer_Sprite_default;
var beePlayer_Sprite_up;
var beePlayer_Sprite_left;
var beePlayer_Sprite_right;
var Background;
let beeSeen = false;
var hive;
/* PRELOAD LOADS FILES */
//Images work like this: http://learn.digitalharbor.org/courses/creative-programming/lessons/working-with-images-in-p5-js/
function preload() {
 beePlayer_Sprite_default = loadImage('Assets/beePlayer_Sprite_default.png');
  beePlayer_Sprite_up = loadImage("Assets/beePlayer_Sprite_up.png");
  beePlayer_Sprite_left = loadImage('Assets/beePlayer_Sprite_left.png');
  beePlayer_Sprite_right = loadImage('Assets/beePlayer_Sprite_right.png');
  Background = loadImage('Assets/background.png');
  hive = loadImage('Assets/hive.png')
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textFont( "VT323", 20 )
  textAlign(CENTER);
  noStroke();
  //resize
  beePlayer_Sprite_default.resize(40,40);
  beePlayer_Sprite_up.resize(40,40);
  beePlayer_Sprite_left.resize(40,40);
  beePlayer_Sprite_right.resize(40,40);
 
  //Create the player 
  player = new Sprite(beePlayer_Sprite_default);
  player.color = "black";
  player.rotationLock = true;
  
  //Create the avoiders
  avoider1 = new Sprite(6000, 6000, 120, 20, "k");
  avoider1.color = "green";
  avoider1.vel.x = 3;

  avoider2 = new Sprite(6000, 6000, 80, 20, "k");
  avoider2.color = "blue";
  avoider2.vel.x = 5;
  
  avoider3 = new Sprite(6000, 6000, 180, 20, "k");
  avoider3.color = "purple";
  avoider3.vel.x = 2;
  //Draw avoiders off of screen
  avoider1.x = -200;
  avoider1.vel.x = 0;
  avoider2.x = -500;
  avoider2.vel.x = 0;
  avoider3.x = -1000;
  avoider3.vel.x = 0;
  // Create enter button

  enterButton = new Sprite(width/2, height/2 + 100);
  // insert play again and last screen later

   // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "plum";
  enterButton.text = "Enter"; 
  
}

/* DRAW LOOP REPEATS */
function draw() {
  background(Background);
  
   // Set up the home screen
  
  //Program the player to move
  if (kb.pressing("left") | kb.pressing("a")) {
    player.vel.x = -3;
    player.addAnimation(beePlayer_Sprite_left);
  } else if (kb.pressing("right")) {
    player.vel.x = 3;
    player.addAnimation(beePlayer_Sprite_right);
  } else if (kb.pressing("up")) {
    player.vel.y = -3;
    player.addAnimation(beePlayer_Sprite_up);
  } else if (kb.pressing("down")) {
    player.vel.y = 3;
    player.addAnimation(beePlayer_Sprite_default);
  }
  else {
    player.vel.x = 0;
    player.vel.y = 0;
  }
  
  // Check enter button
  if (enterButton.mouse.presses() || kb.pressing("enter")) {
    print("pressed");
    showScreen1();
    screen = 1;
    
    } else {
    textSize(75);
    text(
      "A Bee's Journey",
      width / 2,
      height / 2 - 100
    );
    textSize(20);
     text(
      "Press enter to start.",
      width / 2,
      height / 2 - 65
    );
    textSize(15);
     text(
      "Arrow keys or WASD to move.",
      width / 2,
      height / 2 - 50
    );
 }
  
  if(screen = 1) {
  //Reset avoider locations once they reach edge of screen 
    if (avoider1.x > width) {
      avoider1.x = -50;
      avoider1.y = 100;
      avoider1.vel.x = 3;
    } 
  
    if (avoider2.x > width) {
      avoider2.x = -50;
      avoider2.y = 200;
      avoider2.vel.x = 5;
    } 
  
    if (avoider3.x > width) {
      avoider3.x = -50;
      avoider3.y = 300;
      avoider3.vel.x = 2;
    } 
  }
  
  //Don't let the player move off the screen
    if (player.y < 20) {
      player.y = 20;
    } else if (player.y > 400) {
      player.vel.x = 0;
      player.vel.y = 0
      //Draw avoiders off of screen
      avoider1.x = -200;
      avoider1.vel.x = 0;
      avoider2.x = -500;
      avoider2.vel.x = 0;
      avoider3.x = -1000;
      avoider3.vel.x = 0;
      //Display you win message
      background(hive);
      textAlign(CENTER);
      textSize(40);
      fill("black")
      text('You win!', width/2, 200);
      textSize(20);
      text('You kept hope and made it back to the hive, congrats!!', width/2, 250);
      fill("black")
    }
    if (player.x < 20) {
      player.x = 20;
    } else if (player.x > 600) {
      player.x = 599;
    }
  //Check if player collides with avoiders
  if (player.colliding(avoider1) | player.colliding(avoider2) | player.colliding(avoider3)) {
    player.pos = {x: 200, y: 20};
  } 
  
  if (screen == 2){
    showScreen2();
  }
}


/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1(){
 background(137, 213, 210);
  enterButton.pos = {x: -100, y: -100};
  player.pos = {x: 200, y: -20};
  avoider1.pos = {x: 10, y: 100};
  avoider1.vel.x = 3;
  avoider2.pos = {x: -100, y: 200};
  avoider2.vel.x = 5;
  avoider3.pos = {x: -100, y: 300};
  avoider3.vel.x = 2;
  
}
function showScreen2(){
 background(137, 213, 210);
  enterButton.pos = {x: -100, y: -100};
  player.pos = {x: 200, y: 20};
  avoider1.pos = {x: 10, y: 100};
  avoider1.vel.x = 8;
  avoider2.pos = {x: -100, y: 200};
  avoider2.vel.x = 10;
  avoider3.pos = {x: -100, y: 300};
  avoider3.vel.x = 11;
  
}
function youWin() {
  //Draw avoiders off of screen
  avoider1.x = -200;
  avoider1.vel.x = 0;
  avoider2.x = -500;
  avoider2.vel.x = 0;
  avoider3.x = -1000;
  avoider3.vel.x = 0;
  //Display you win message
  textAlign(CENTER);
  textSize(20);
  text('You win!', 200, 200);
}

//more retro, levels, score, a WORKING youWin() funtion, a how to play 
