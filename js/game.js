

function Game(characters, monsters, items, gameMap){
  this.characters = [],
  this.monsters = [],
  this.items = [],
  this.gameMap = []
}

Game.prototype.getPlayer = function(){
  var warrior = new Character("You", 60, 25, 60, 35, 15, 50, 50, 50, 10);
  this.characters.push(warrior);
};

Game.prototype.getMonster = function(monster){
  this.monsters.push(monster);
};

Game.prototype.getItem = function(item){
  this.items.push(item);
};

Game.prototype.getMap = function(mapLocation){
  this.gameMap.push(mapLocation);
};



//========================================================
var game = new Game();
