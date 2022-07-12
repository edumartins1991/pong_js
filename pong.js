//BallVariables
let xBallPos = 300;
let yBallPos = 200;
let dBall = 15;
let rBall = dBall / 2;
let spdXBall = 15;
let spdYBall = 11;
//Racket weight & widht
let wRacket = 10;
let hRacket = 90;
//RacketPlayerVariables
let xRacketPlayerPos = 5;
let yRacketPlayerPos = 150;
let spdXRacketPlayer = 11;
let spdYRacketPlayer = 90;
//RacketPcVariables
let xRacketPcPos = 585;
let yRacketPcPos = 150;
let spdXRacketPc = 11;
let spdYRacketPc = 90;
//goal
let playerGoal = 0;
let pcGoal = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle (xBallPos,yBallPos,dBall);
  racketDraw (xRacketPcPos, yRacketPcPos);
  racketDraw (xRacketPlayerPos, yRacketPlayerPos);
  ballPos();
  wallBallCollideDetect();
  racketPlayerMove();
  racketPcMove();
  wallRacketPlayerCollideDetect();
  wallRacketPcCollideDetect();
  racketPlayerBallCollideDetect();
  racketPcBallCollideDetect();
  scoreBoard ();
  scoreAdd ();

}

function racketDraw (x,y){
    rect (x, y, wRacket, hRacket);
}

function ballPos(){
  xBallPos += spdXBall;
  yBallPos += spdYBall;
}
function racketPlayerMove(){
  if (keyIsDown(UP_ARROW)){
    yRacketPlayerPos -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRacketPlayerPos += 10;
  }
  
}
function wallBallCollideDetect(){
  if (xBallPos + rBall > width || xBallPos - rBall < 0) {
    spdXBall *= -1;
    spdYBall *= 1.02;
    console.log(spdYBall);
  }
  
  if (yBallPos + rBall > height || yBallPos - rBall < 0) {
  spdYBall *= -1;
  
  }
  if (xBallPos > 600){
    xBallPos = 300
  }

  if (xBallPos < 0){
    xBallPos = 300
  }

}

function wallRacketPlayerCollideDetect(){

  if(yRacketPlayerPos > 310){
    
    yRacketPlayerPos = 310;
     }
  
  if(yRacketPlayerPos < 0){
    
    yRacketPlayerPos = 0;
     
     } 
}
function wallRacketPcCollideDetect(){
    if(yRacketPcPos > 310){
    
        yRacketPcPos = 310;
         }
      
      if(yRacketPcPos < 0){
        
        yRacketPcPos = 0;
         
         } 
}

function racketPlayerBallCollideDetect() {
    if (xBallPos - rBall < xRacketPlayerPos + wRacket && yBallPos - rBall < yRacketPlayerPos + hRacket
        && yBallPos + rBall > yRacketPlayerPos) {
      
        spdXBall *= -1;
    }
}
function racketPcBallCollideDetect() {
    if (xBallPos + rBall > xRacketPcPos - wRacket && yBallPos + rBall < yRacketPcPos + hRacket
        && yBallPos + rBall > yRacketPcPos) {
      
        spdXBall *= -1;
    }
}

function racketPcMove(){
    yRacketPcPos = yBallPos-117;
}
function scoreBoard(){
  
  fill (255)
  text(playerGoal, 278, 26)
  text(pcGoal, 321, 26)
}
function scoreAdd(){
  if (xBallPos > 590){
    playerGoal +=1;
  }
  if (xBallPos < 10){
    pcGoal +=1;
  }
}