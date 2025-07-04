let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // ubah sudut jadi derajat
  noStroke();
}

function draw() {
  background(255, 250, 247);

  // Geser titik pusat ke tengah layar
  translate(width / 2, height / 2);

  // Bunga bergoyang menggunakan sin() dari waktu
  let sway = sin(frameCount * 2) * 10;

  rotate(sway); // rotasi bunga agar terlihat goyang

  drawFlower(0, 0);
}

function drawFlower(x, y) {
  // Warna kelopak
  fill(255, 105, 180, 200); // pink transparan

  // Gambar 6 kelopak dengan rotasi
  for (let i = 0; i < 6; i++) {
    ellipse(x, y - 40, 30, 80);
    rotate(60);
  }

  // Lingkaran tengah bunga
  fill(255, 204, 0); // kuning
  ellipse(x, y, 40, 40);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
