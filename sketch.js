var canvas;
var backgroundImage,car1Image;
var bgImg;
var database;
var form, player;
var playerCount, gameState;
var car1Image, car2Image, track, car1, car2, allPlayers;
var cars = []; 
var fuelImage, powerCoinImage, obstacle1Image, obstacle2Image;
var fuels, powerCoins, obstacles;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image = loadImage("./assets/car1.png");
  car2Image = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount == 2) {
    game.update(1);
  }
  if(gameState == 1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
