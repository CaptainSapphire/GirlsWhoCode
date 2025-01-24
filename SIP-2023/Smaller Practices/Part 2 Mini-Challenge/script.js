/* VARIABLES */
let sprite1, sprite2, sprite3;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  background(255,255,237);
  
  //Create the first sprite 
  sprite1 = new Sprite(200,50,50,50);
  sprite1.color = color("grey");
  sprite1.vel.x = 2;
  
  //Create the second sprite
  sprite2 = new Sprite(50,350,50,50);
  sprite2.color = color("teal");
  sprite2.move(50, 'upRight', 7);

  //Create the third sprite
  sprite3 = new Sprite(350,350,50,50);
  sprite3.color = color("pink");
}

/* DRAW LOOP REPEATS */
function draw() {
  background(255,255,237);

  if(mouse.presses()){
    sprite3.moveTo(mouse, 20);
  }  
}
