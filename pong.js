//BallVariables
let xBallPos = 300;
let yBallPos = 200;
let dBall = 15;
let rBall = dBall / 2;
let spdXBall = 11;
let spdYBall = 7;
//RacketPlayerVariables
let xRacketPlayerPos = 5;
let yRacketPlayerPos = 150;
let wRacketPlayer = 10;
let hRacketPlayer = 90;
let spdXRacketPlayer = 11;
let spdYRacketPlayer = 90;
//RacketPcVariables
let xRacketPcPos = 5;
let yRacketPcPos = -150;
let wRacketPc = 10;
let hRacketPc = 90;
let spdXRacketPc = 11;
let spdYRacketPc = 90;




function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle (xBallPos,yBallPos,dBall);
  rect (xRacketPlayerPos, yRacketPlayerPos, wRacketPlayer, hRacketPlayer);
  rect (xRacketPcPos, yRacketPcPos, wRacketPc, hRacketPc);
  ballPos();
  wallBallCollideDetect();
  racketPlayerMove();
  wallRacketCollideDetect();
  racketCollideDetect();
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
      
  }
  
  if (yBallPos + rBall > height || yBallPos - rBall < 0) {
  spdYBall *= -1;
      
  }

}

function wallRacketCollideDetect(){

  if(yRacketPlayerPos > 310){
    
    yRacketPlayerPos = 310;
     }
  
  if(yRacketPlayerPos < 0){
    
    yRacketPlayerPos = 0;
     
     } 
}

function racketCollideDetect() {
    if (xBallPos - rBall < xRacketPlayerPos + wRacketPlayer && yBallPos - rBall < yRacketPlayerPos + hRacketPlayer && yBallPos + rBall > yRacketPlayerPos) {
      
        spdXBall *= -1;
    }
}