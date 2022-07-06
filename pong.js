let xBallPos = 300;
let yBallPos = 200;
let dBall = 15;
let rBall = dBall / 2;
let spdXBall = 9;
let spdYBall = 9;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle (xBallPos,yBallPos,dBall);
  rect ();
  ballPos();
  wallCollideDetect();
}

function ballPos(){
  xBallPos += spdXBall;
  yBallPos += spdYBall;
}

function wallCollideDetect(){
  if (xBallPos + rBallBall > width || xBallPos - rBall < 0) {
    spdXBall *= -1;
      
  }
  
  if (yBallPos + rBall > height || yBallPos - rBall < 0) {
  spdYBall *= -1;
      
  }
}