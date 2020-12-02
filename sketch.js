//to create game states 
const SERVE = 1;
const PLAY = 2;
const END = -1;
const WIN = 3;
const TOUCHED = 0;
var gameState = SERVE;
var gChange = SERVE;


// to create the player boy
var player;

// creating the edges
var edge1, edge2;

//for the mask power in 2nd level
var wear = "NO";

// to create sanitizer drop and its group
var drop,dropGrp;

// to create corona and corona group
var corona1, coronaGrp1;
var corona2, coronaGrp2;
var corona3, coronaGrp3;

//to make the immunity and lives
var immunity = 500;
var lives = 2;

//level 3 quiz question counter
var ques = 1;
var op1, op2, op3, op4;
var question1 = [];
var que1;

// level two people  
var per1, per2, per3, per4;
var per1Img, per2Img, per3Img, per4Img;
var inf = [];
var heal = [];
var pTimer = 120;

//create the timer for level 2
var gameTimer = 10;

//create a timer masked power
var timer = 10;

//so that it is easy to change the image of player in mask
var playerState = "normal";

//to create the mask power
var mask = 3;

//to create the fruit power
var fruit = 2;

//to store score
var score = 13;

function preload() {
  //roaming people animation
  per1Img = loadAnimation("images/m_w_1.png", "images/m_w_2.png", "images/m_w_3.png", "images/m_w_4.png", "images/m_w_5.png");
  per2Img = loadAnimation("images/m2_w_1.png", "images/m2_w_2.png", "images/m2_w_3.png", "images/m2_w_4.png", "images/m2_w_5.png", "images/m2_w_6.png", "images/m2_w_7.png", "images/m2_w_8.png");
  per3Img = loadAnimation("images/b_w_1.png", "images/b_w_2.png", "images/b_w_1.png", "images/b_w_3.png", "images/b_w_4.png", "images/b_w_5.png", "images/b_w_6.png", "images/b_w_7.png");
  per4Img = loadAnimation("images/g_w_1.png", "images/g_w_2.png", "images/g_w_3.png", "images/g_w_4.png", "images/g_w_5.png", "images/g_w_6.png", "images/g_w_7.png", "images/g_w_8.png");

  //quiz options
  op1 = loadImage("images/qu1_op1.png");
  op2 = loadImage("images/qu1_op2.png");
  op3 = loadImage("images/qu1_op3.png");
  op4 = loadImage("images/qu1_op4.png");
}


function setup() {
  createCanvas(1200,800);
  
  player = new Player();

  dropGrp = createGroup();
  coronaGrp1 = createGroup();
  coronaGrp2 = createGroup();
  coronaGrp3 = createGroup();

  edge1 = createSprite(-5, 50, 10, 100);
  edge2 = createSprite(1205, 50, 10, 100);
  spawnPeople();

  question1.push(op1);
  question1.push(op2);
  question1.push(op3);
  question1.push(op4);
}

function draw() {
  background(0,0,0); 

  if(gChange === "play2") {
    gameState = "play2";
  }

  //colliding the player with the edges
  player.sprite.bounce(edge1);
  player.sprite.bounce(edge2);

  player.display();
  movePlayer();

  if(wear === "NO" && playerState === "normal") {
    timer = 10;
  }

  if(playerState === "masked" || wear === "YES") {
    timer = timer - 0.025;
  }

  // to spwan drops and corona
  spawnDrop();
  spawnCorona();

  //level one
  instructions();
  play();
  coronaTouched();
  gameOver();

  //level two
  play2();
  instructions2();
  win();

  //powers
  fruitPow();
  maskPow();
  fruitPowV2();
  maskPowV2();

  repeat();

  play3();

  if(gameState === PLAY) {
    fill("white");
    textSize(40);
    text("Immunity: " + immunity, 20, 50);
    text("Lives: " + lives, 20, 100);
  }

  fill("white");
    textSize(40);
    text("Mask Left: " + mask, 950, 50);
    text("Fruits Left: " + fruit, 940, 100);

  if(gameState === "play2") {
    fill("white");
    textSize(40);
    text("Time Left: " + round(gameTimer), 10, 50)
  }

  drawSprites();

  gameOver2();
  //to display timer of mask
  if(playerState === "masked") {
    textSize(40);
    fill("white");
    text("Timer: " + round(timer), 10, 200);
  }

  console.log(inf.length);

}

function spawnDrop() {
  if(gameState === PLAY || gameState === "play2") {
    if(keyWentDown('space')) {
      drop = createSprite(player.sprite.x, player.sprite.y + 50, 10,10);
      drop.velocityY = 8;     
      dropGrp.add(drop);
    }
  }
}