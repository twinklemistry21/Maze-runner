var bg,forms,logo,games,player1,player2;
var score=0;
var player, players;
var playerCount, gameState;
var man,child;
var allPlayers;

function preload() {
  //logo = loadImage("/1-1.jpg");
  bg = loadImage("background.jpg");
  player1 = loadImage("nam.png");
  player2 = loadImage("child.png")
}

function setup() {
  createCanvas(1535, 760);
  database = firebase.database();
  games = new Game();
  games.getState();
  games.start();
}

function draw(){
  background(bg);
  textSize(30);
  fill("white");

  if (playerCount === 2) {
    games.update(1);
  }

  if (gameState === 1) {
    games.play();
  }

  if (gameState === 2) {
   // game.showLeaderboard();
    game.end();
  }

  //text("Maze Mania", 450, 50);

  //drawSprites();
}