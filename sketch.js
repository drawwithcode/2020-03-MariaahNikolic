var scream1;
var scream2;
var scream3;
var images;
var bg;
var bx1;
var by1;
var bx2;
var by2;
var bx3;
var by3;
var bx4;
var by4;
var bx5;
var by5;
var bx6;
var by6;
var bx7;
var by7;
var diameter = 15;
var overBox1 = false;
var overBox2 = false;
var overBox3 = false;
var overBox4 = false;
var overBox5 = false;
var overBox6 = false;
var overBox7 = false;
var locked1 = false;
var locked2 = false;
var locked3 = false;
var locked4 = false;
var locked5 = false;
var locked6 = false;
var locked7 = false;
var x1Offset = 0.0;
var y1Offset = 0.0;
var x2Offset = 0.0;
var y2Offset = 0.0;
var x3Offset = 0.0;
var y3Offset = 0.0;
var x4Offset = 0.0;
var y4Offset = 0.0;
var x5Offset = 0.0;
var y5Offset = 0.0;
var x6Offset = 0.0;
var y6Offset = 0.0;
var x7Offset = 0.0;
var y7Offset = 0.0;
var u;
var a;

function preload() {
  scream1 = loadSound("assets/sound.mp3");
  scream2 = loadSound("assets/sound_2.mp3");
  scream3 = loadSound("assets/sound_3.mp3");
  images = loadJSON("data/images.json");
}

function setup() {
  createCanvas(800, 800);
  u = 100;
  a = (sqrt(3) * u) / 2;
  bx1 = width / 4;
  by1 = height / 1.5;
  bx2 = bx1;
  by2 = by1 - u;
  bx3 = bx1 + a;
  by3 = by1 - u / 2;
  bx4 = bx1 + a;
  by4 = by1 + u / 2;
  bx5 = bx1;
  by5 = by1 + u;
  bx6 = bx1 - a;
  by6 = by1 + u / 2;
  bx7 = bx1 - a;
  by7 = by1 - u / 2;
  bg = "black";
  scream1.onended(hideImage);
  scream2.onended(hideImage);
  scream3.onended(hideImage);
}

function draw() {
  noStroke();
  background(bg);
  textSize(26);
  fill("white");
  text("Hint: Try to torture the box by stretching its edges", 10, 30);
  fill("#F7BBAD");
  quad(bx1, by1, bx7, by7, bx2, by2, bx3, by3);
  fill("#CF8576");
  quad(bx1, by1, bx3, by3, bx4, by4, bx5, by5);
  fill("#EBA291");
  quad(bx1, by1, bx5, by5, bx6, by6, bx7, by7);
  noFill();

  // Test if the cursor is over the box
  if (
    mouseX > bx1 - diameter &&
    mouseX < bx1 + diameter &&
    mouseY > by1 - diameter &&
    mouseY < by1 + diameter
  ) {
    overBox1 = true;
    if (!locked1) {
      stroke("white");
      strokeWeight(2);
      noFill();
    }
  } else {
    noStroke();
    stroke("yellow");
    overBox1 = false;
  }
  ellipse(bx1, by1, diameter, diameter);

  if (
    mouseX > bx2 - diameter &&
    mouseX < bx2 + diameter &&
    mouseY > by2 - diameter &&
    mouseY < by2 + diameter
  ) {
    overBox2 = true;
    if (!locked2) {
      stroke("white");
      strokeWeight(2);
      noFill();
    }
  } else {
    stroke("red");
    noFill(); //change this to noFill later
    overBox2 = false;
  }
  ellipse(bx2, by2, diameter, diameter);

  if (
    mouseX > bx3 - diameter &&
    mouseX < bx3 + diameter &&
    mouseY > by3 - diameter &&
    mouseY < by3 + diameter
  ) {
    overBox3 = true;
    if (!locked3) {
      stroke("white");
      strokeWeight(2);
      noFill();
    }
  } else {
    noStroke();
    stroke("green");
    overBox3 = false;
  }
  ellipse(bx3, by3, diameter, diameter);

  if (
    mouseX > bx4 - diameter &&
    mouseX < bx4 + diameter &&
    mouseY > by4 - diameter &&
    mouseY < by4 + diameter
  ) {
    overBox4 = true;
    if (!locked4) {
      stroke("white");
      strokeWeight(2);
      noFill();
    }
  } else {
    noStroke();
    stroke("blue");
    overBox4 = false;
  }
  ellipse(bx4, by4, diameter, diameter);

  if (
    mouseX > bx5 - diameter &&
    mouseX < bx5 + diameter &&
    mouseY > by5 - diameter &&
    mouseY < by5 + diameter
  ) {
    overBox5 = true;
    if (!locked5) {
      stroke("white");
      strokeWeight(2);
      noFill();
    }
  } else {
    noStroke();
    stroke("orange");
    overBox5 = false;
  }
  ellipse(bx5, by5, diameter, diameter);

  if (
    mouseX > bx6 - diameter &&
    mouseX < bx6 + diameter &&
    mouseY > by6 - diameter &&
    mouseY < by6 + diameter
  ) {
    overBox6 = true;
    if (!locked6) {
      stroke("white");
      strokeWeight(2);
      noFill();
    }
  } else {
    noStroke();
    stroke("cyan");
    overBox6 = false;
  }
  ellipse(bx6, by6, diameter, diameter);

  if (
    mouseX > bx7 - diameter &&
    mouseX < bx7 + diameter &&
    mouseY > by7 - diameter &&
    mouseY < by7 + diameter
  ) {
    overBox7 = true;
    if (!locked7) {
      stroke("white");
      strokeWeight(2);
      noFill();
    }
  } else {
    noStroke();
    stroke("purple");
    overBox7 = false;
  }
  ellipse(bx7, by7, diameter, diameter);
}

function mousePressed() {
  if (overBox1) {
    locked1 = true;
    noStroke();
    noFill();
    x1Offset = mouseX - bx1;
    y1Offset = mouseY - by1;
    bg = loadImage(images.data[0].image);
    scream1.play();
  }
  if (!overBox1) {
    locked1 = false;
  }

  if (overBox2) {
    locked2 = true;
    x2Offset = mouseX - bx2;
    y2Offset = mouseY - by2;
    bg = loadImage(images.data[1].image);
    scream2.play();
  }
  if (!overBox2) {
    locked2 = false;
  }

  if (overBox3) {
    locked3 = true;
    x3Offset = mouseX - bx3;
    y3Offset = mouseY - by3;
    bg = loadImage(images.data[2].image);
    scream3.play();
  }
  if (!overBox3) {
    locked3 = false;
  }

  if (overBox4) {
    locked4 = true;
    x4Offset = mouseX - bx4;
    y4Offset = mouseY - by4;
    bg = loadImage(images.data[3].image);
    scream1.play();
  }
  if (!overBox4) {
    locked4 = false;
  }

  if (overBox5) {
    locked5 = true;
    x5Offset = mouseX - bx5;
    y5Offset = mouseY - by5;
    bg = loadImage(images.data[4].image);
    scream2.play();
  }
  if (!overBox5) {
    locked5 = false;
  }

  if (overBox6) {
    locked6 = true;
    x6Offset = mouseX - bx6;
    y6Offset = mouseY - by6;
    bg = loadImage(images.data[5].image);
    scream3.play();
  }
  if (!overBox6) {
    locked6 = false;
  }

  if (overBox7) {
    locked7 = true;
    x7Offset = mouseX - bx7;
    y7Offset = mouseY - by7;
    bg = loadImage(images.data[6].image);
    scream1.play();
  }
  if (!overBox7) {
    locked7 = false;
  }
}

function hideImage() {
  bg = "black";
}

function mouseDragged() {
  if (locked1) {
    noStroke();
    fill(22);
    bx1 = mouseX - x1Offset;
    by1 = mouseY - y1Offset;
  }

  if (locked2) {
    bx2 = mouseX - x2Offset;
    by2 = mouseY - y2Offset;
  }

  if (locked3) {
    bx3 = mouseX - x3Offset;
    by3 = mouseY - y3Offset;
  }

  if (locked4) {
    bx4 = mouseX - x4Offset;
    by4 = mouseY - y4Offset;
  }

  if (locked5) {
    bx5 = mouseX - x5Offset;
    by5 = mouseY - y5Offset;
  }

  if (locked6) {
    bx6 = mouseX - x6Offset;
    by6 = mouseY - y6Offset;
  }

  if (locked7) {
    bx7 = mouseX - x7Offset;
    by7 = mouseY - y7Offset;
  }
}

function mouseReleased() {
  if (scream1.isPlaying() || scream2.isPlaying() || scream3.isPlaying()) {
    scream1.stop();
    scream2.stop();
    scream3.stop();
    bg = "black";
  }
  locked1 = false;
  locked2 = false;
  locked3 = false;
  locked4 = false;
  locked5 = false;
  locked6 = false;
  locked7 = false;
}
