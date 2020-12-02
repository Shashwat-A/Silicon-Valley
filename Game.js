function instructions() {
    if(gameState === SERVE) {
        //to give instructions to the player
        fill("white");
        textSize(20);
        text("Welcome to the corona game. Be a corona fighter and fight against corona with sanitizer. Beware if it touches you, your immunity will ", 20, 500);
        text("decrease by 100. You have 500 immunity and 2 lives. Press space to shoot.", 20, 520);
        text("'press space to countinue'", 420,600);
        
        //to change the game state to play
        if(keyWentDown('space')) {
          gameState = PLAY;
        }
      }
}

function play() {
     if(gameState === PLAY) {
    //to destroy the corona when the drop touches it
    if(dropGrp.isTouching(coronaGrp1)) {
      coronaGrp1.destroyEach();
      dropGrp.destroyEach();
      score = score + 1;
    }
    fill("white");
    textSize(40);
    text("Score: " + score, 20, 150);

    if(dropGrp.isTouching(coronaGrp2)) {
      coronaGrp2.destroyEach();
      dropGrp.destroyEach();
      score = score + 1;
    }

    if(dropGrp.isTouching(coronaGrp3)) {
      coronaGrp3.destroyEach();
      dropGrp.destroyEach();
      score = score + 1;
    }

    if(score === 15){
      gameState = "serve2"
    }

    //making the condition when the corona touches the player
    
    if(playerState === "normal" & immunity > 0 & coronaGrp1.isTouching(player.sprite) || coronaGrp2.isTouching(player.sprite) || coronaGrp3.isTouching(player.sprite)) {
      coronaGrp1.destroyEach();
      coronaGrp2.destroyEach();
      coronaGrp3.destroyEach();

      if(playerState === "normal" & immunity != 0) {
        immunity = immunity - 100
        gameState = TOUCHED;
      }

    }

    if(playerState === "normal" & immunity === 0 & coronaGrp1.isTouching(player.sprite) || coronaGrp2.isTouching(player.sprite) || coronaGrp3.isTouching(player.sprite)) {
      lives = lives - 1;
  
      coronaGrp1.destroyEach();
      coronaGrp2.destroyEach();
      coronaGrp3.destroyEach();
  
      gameState = TOUCHED;
    }

    
    
  }

  if(lives === 0){
    gameState = END;
  }

}

function coronaTouched() {
    if(gameState === TOUCHED) {
        fill("white");
        textSize(30);
    
        text("Oh!! Corona touched you. Be careful", 20, 500);
        
        if(keyDown('space')){
          gameState = PLAY;
        }
      }
    
}

function gameOver() {
    if(gameState === END) {
        fill("white");
        textSize(55);
        textFont("Georgia");
        text("Game Over!!", 400, height/2);
    
        player.sprite.x = width/2;
        player.sprite.y = 100;
    
        coronaGrp1.destroyEach();
        coronaGrp2.destroyEach();
        coronaGrp3.destroyEach();
    
        if(keyWentDown('space')){
          gameState = SERVE;
        }

        //to display score
        fill("white");
        textSize(40);
        text("Score: " + score, 1030, 50);

        //to display the immunity and lives
        text("Immunity: " + immunity, 10, 30);
        text("Lives: " + lives, 10, 80);

        //to display timer of mask
        if(playerState === "masked") {
          text("Timer: " + round(timer), 10, 130);
        }
    }
}

function instructions2() {
  if(gameState === "serve2") {
    fill("white");
    textSize(25);
    textFont("Georgia");
    text("Congratulations!! You have passed the first level. This is the next the level. You have to protect people from", 20, 500);
    text("corona, you can use fruit power to revive one person and mask to protect people for 10 seconds.", 20, 530);
    text("'press space to countinue'", 420,600);

    if(keyDown('space')) {
      gChange = "play2";
      console.log("done");
    }
  }
}

function play2() {
  if(gameState === "play2") {
    spawnPeople();
    pTimer = pTimer - 0.25;

    gameTimer = gameTimer - 0.040;

    if(dropGrp.isTouching(coronaGrp1)) {
      coronaGrp1.destroyEach();
      dropGrp.destroyEach();
    }

    if(dropGrp.isTouching(coronaGrp2)) {
      coronaGrp2.destroyEach();
      dropGrp.destroyEach();
    }

    if(dropGrp.isTouching(coronaGrp3)) {
      coronaGrp3.destroyEach();
      dropGrp.destroyEach();
    }
    
    if(inf.length === 4) {
      gameState = "end2";
      gChange = "end2";
    }

    if(gameTimer > 0 && gameTimer < 1) {
      gameState = "win";
      gChange = "win";
    }
  }
}

function win() {
  if(gameState === "win") {
    textFont("Georgia");
    textSize(70);
    fill("white");
    text("You Win!!", width/2 - 80, height/2 - 70);
    textSize(20);
    text("You are a real fighter, you have not only saved your self but the other lifes too!!", 250, height/2);
    if(keyWentDown('space')) {
      gameState = SERVE;
      gChange = "serve"
    }

    
  }
}

function gameOver2() {
  if(gameState === "end2") {
    fill("white");
    textSize(55);
    textFont("Georgia");
    text("Game Over!!", 400, height/2);

    per1.destroy();
    per2.destroy();
    per3.destroy();
    per4.destroy();
    console.log("game end")

    player.sprite.x = width/2;
    player.sprite.y = 100;
    
    coronaGrp1.destroyEach();
    coronaGrp2.destroyEach();
    coronaGrp3.destroyEach();
    
    if(keyWentDown('space')){
      gameState = SERVE;
      gChange = "serve";
    }

    //to display score
    fill("white");
    textSize(40);
    text("Score: " + score, 1030, 50);

    //to display the immunity and lives
    text("Immunity: " + immunity, 10, 30);
    text("Lives: " + lives, 10, 80);

    //to display timer of mask
    if(playerState === "masked") {
      text("Timer: " + round(timer), 10, 130);
    }
  }
}

function serve() {
  if(gameState === "serve3") {
    //placing the boy
    player.sprite.x = 1150;
    player.sprite.y = 750;
    
    //instructions
    fill("white");
    textSize(20);
    text("Nice Work, you have compeleted the two levels, now the time to test", 20, 500);
    text("what you know to fight against corona. Here is a quiz for you", 20, 530 );
    text("Best of Luck", width/2 - 40, 560);
    text("'press space to countinue'", 420,600);

    if(keyWentDown('space')) {
      gameState = "play3";
      gChange = "play3";
    }
  }
}

function play3() {
  if(gameState === "play3") {
    if(ques === 1) {
      fill("white");
      textSize(40);
      text("Question: 1", width/2 - 100, 50);
      que1 = new Question("What is the minimum distance we should maintain ?");
      que1.display(question1, que1.op3.sprite);      
    }
    
    
  }
}