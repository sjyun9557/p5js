function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(250);
  
  noStroke();
  fill(0, 0, 255);
  let blueRectSize = 250 + sin(frameCount * 0.05) * 100;
  rect(150, 300, blueRectSize, blueRectSize);
  
  colorMode(RGB, 255);
  let colorA = color(255, 255, 0);
  let colorB = color(255, 100, 0); 
  let amt = (sin(frameCount * 0.03) + 1) / 2;
  let circleColor = lerpColor(colorA, colorB, amt);
  
  fill(circleColor);
  ellipse(450, 100, 200, 200);
  
  let greenX = 300 + cos(frameCount * 0.04) * 30;
  let greenY = 200 + sin(frameCount * 0.04) * 30;
  fill(0, 255, 0);
  rect(greenX, greenY, 300, 150); 
  
  stroke(0);      
  strokeWeight(4); 
  line(0, 0, 600, 400);
  line(600, 0, 0, 400);
  
  let triYOffset = sin(frameCount * 0.06) * 20;
  noStroke();
  fill(255, 0, 255);
  triangle(300, 150 + triYOffset, 250, 250 + triYOffset * 0.5, 350, 250 + triYOffset * 0.5);
  
  fill(80);
  rect(500, 350, 40, 40);
  rect(550, 350, 40, 40);
  rect(500, 300, 40, 40);
  
  fill(255);
  stroke(0);
  strokeWeight(10);
  circle(100, 100, 60);
  
  fill(0);
  noStroke();
  point(95, 100);
  point(105, 100);
  
  noFill();
  stroke(0, 255, 255);
  strokeWeight(2);
  arc(300, 300, 300, 150, radians(0), radians(180)); 
}