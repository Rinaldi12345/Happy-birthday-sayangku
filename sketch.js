let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(20, 10, 30, 25); // latar gelap lembut
  translate(width/2, height/2);

  // Denyut scale sinusoidal: 0.9–1.1
  let scaleAmt = map(sin(t), -1, 1, 0.9, 1.1);
  scale(scaleAmt);

  // Rotasi lambat
  let rot = t * 0.2;
  rotate(rot);

  drawGlowingFlower();

  t += 0.02;
}

function drawGlowingFlower() {
  // Efek glow: lingkaran besar transparan
  for (let r = 80; r > 20; r -= 20) {
    fill(255, 100, 150, map(r, 80, 20, 5, 40));
    ellipse(0, 0, r * 2);
  }

  // Kelopak
  fill(255, 105, 180, 180);
  for (let i = 0; i < 8; i++) {
    ellipse(0, -70, 40, 100);
    rotate(45);
  }

  // Miel
  fill(255, 230, 150);
  ellipse(0, 0, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
