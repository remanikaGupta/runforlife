var form, player, game
var player
var playerCount,  allPlayers

var gameState=0

var db

function setup() {
  db = firebase.database()
  createCanvas(displayWidth-50,displayHeight-50);

  game = new Game()
  game.getState()
  game.start()
}

function draw() {
  background("lightBlue");  
}