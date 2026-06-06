function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220); 
  
  // 몸
  fill(0); 
  noStroke();
  ellipse(300, 420, 480, 350); 
  
  // 버건디 후드 테두리
  stroke(128, 0, 0);
  strokeWeight(15);
  noFill();
  ellipse(300, 180, 210, 250);
  
  // 얼굴
  fill(255, 224, 189); 
  noStroke();
  ellipse(300, 180, 200, 240); 
  
  // 앞머리
  fill(30); 
  arc(300, 160, 205, 200, PI, TWO_PI); 
  arc(300, 160, 150, 120, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
  
  // 눈
  fill(255); 
  ellipse(265, 185, 40, 25); 
  ellipse(335, 185, 40, 25); 
  fill(0); 
  circle(265, 185, 15); 
  circle(335, 185, 15);
  
  // 눈썹
  fill(0);
  // 왼쪽 눈썹
  beginShape();
  vertex(235, 175); 
  bezierVertex(250, 155, 270, 155, 285, 170); 
  bezierVertex(270, 165, 250, 165, 235, 175); 
  endShape(CLOSE);
  
  // 오른쪽 눈썹
  beginShape();
  vertex(365, 175); 
  bezierVertex(350, 155, 330, 155, 315, 170); 
  bezierVertex(330, 165, 350, 165, 365, 175); 
  endShape(CLOSE);
  
  // 코
  noFill(); 
  stroke(200, 150, 150); 
  strokeWeight(2);
  arc(300, 215, 25, 15, 0, PI); 
  
  // 입
  fill(255, 150, 150); 
  noStroke();
  arc(300, 260, 60, 30, 0, PI); 
  
  // 후드티 끈
  stroke(128, 0, 0); 
  strokeWeight(7); 
  line(290, 305, 280, 380); // 왼쪽 끈
  line(310, 305, 320, 380); // 오른쪽 끈
  
}