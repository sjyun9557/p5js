function setup() {
  createCanvas(600, 400);
  background(250);
  
  rectMode(CENTER);
  noStroke();
  
  fill(0, 0, 255);
  rect(150, 300, 250, 250);
  
  fill(255, 255, 0);
  ellipse(450, 100, 200, 200);
  
  fill(0, 255, 0);
  rect(300, 200, 300, 150); 
  
  stroke(0);      
  strokeWeight(4); 
  line(0, 0, 600, 400);
  line(600, 0, 0, 400);
  
  fill(255, 0, 255);
  triangle(300, 150, 250, 250, 350, 250);
  
  fill(80);
  rect(500, 350, 40, 40);
  rect(550, 350, 40, 40);
  rect(500, 300, 40, 40);
  
  fill(255);
  strokeWeight(10);
  circle(100, 100, 60);
  
  fill(0);
  point(95, 100);
  point(105, 100);
  
  noFill();
  stroke(0, 255, 255);
  strokeWeight(2);
  arc(300, 300, 300, 150, radians(0), radians(180)); 
}

function draw() {
}