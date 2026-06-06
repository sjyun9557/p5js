let eyeX = 0;
let eyeY = 0;
let hoodR = 128, hoodG = 0, hoodB = 0;
let eyeR = 0, eyeG = 0, eyeB = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220); 

  // 눈 내리는 배경 효과 
  noStroke();
  for (let i = 0; i < 20; i++) {
    fill(random(150, 200), random(150, 200), random(200, 255), random(50, 150));
    ellipse(random(width), random(height), random(5, 15));
  }
  
  let targetX = (mouseX / width) * 16 - 8;
  let targetY = (mouseY / height) * 10 - 5;
  eyeX += (targetX - eyeX) * 0.1;
  eyeY += (targetY - eyeY) * 0.1;

  // 몸, 후드 등 그리기
  fill(0); noStroke(); ellipse(300, 420, 480, 350); 
  stroke(hoodR, hoodG, hoodB); strokeWeight(15); noFill(); ellipse(300, 180, 210, 250);
  fill(255, 224, 189); noStroke(); ellipse(300, 180, 200, 240); 
  fill(30); arc(300, 160, 205, 200, PI, TWO_PI); arc(300, 160, 150, 120, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
  
  // 눈 흰자
  fill(255); ellipse(265, 185, 40, 25); ellipse(335, 185, 40, 25); 
  
  // 눈동자 색상 
  fill(eyeR, eyeG, eyeB); 
  circle(265 + eyeX, 185 + eyeY, 15); 
  circle(335 + eyeX, 185 + eyeY, 15);
  
  // 눈썹, 코, 입, 끈
  fill(0); stroke(0); strokeWeight(1);
  beginShape(); vertex(235, 175); bezierVertex(250, 155, 270, 155, 285, 170); bezierVertex(270, 165, 250, 165, 235, 175); endShape(CLOSE);
  beginShape(); vertex(365, 175); bezierVertex(350, 155, 330, 155, 315, 170); bezierVertex(330, 165, 350, 165, 365, 175); endShape(CLOSE);
  noFill(); stroke(200, 150, 150); strokeWeight(2); arc(300, 215, 25, 15, 0, PI); 
  fill(255, 150, 150); noStroke(); arc(300, 260, 60, 30, 0, PI); 
  stroke(hoodR, hoodG, hoodB); strokeWeight(7); line(290, 305, 280, 380); line(310, 305, 320, 380); 
}

// 키보드 인터랙션 : 후드 색 변경
function keyPressed() {
  hoodR = random(255); hoodG = random(255); hoodB = random(255);
}

// 마우스 클릭 인터랙션 : 눈동자 색 변경
function mousePressed() {
  eyeR = random(255); eyeG = random(255); eyeB = random(255);
}