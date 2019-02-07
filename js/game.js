

function Game(characters, monsters, items, gameMap, friendlies){
  this.characters = [],
  this.monsters = [],
  this.items = [],
  this.gameMap = [],
  this.friendlies = []
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

Game.prototype.getFriendly = function(NPC){
  this.friendlies.push(NPC);
};

Game.prototype.characterLocation = function(){
  return game.gameMap[character.location]}

Game.prototype.clearDisplays = function(){
  $("#monsters").text('')
  $("#fightLog").text('')
  $("#items").text('')
}

Game.prototype.displayAll = function(){

  this.clearDisplays();
  this.characters[0].displayAll();
  $("#location").text(this.characterLocation().description);

  this.characterLocation().items.forEach(function(item){
    item.displayItem();
  });
  this.characterLocation().monsters.forEach(function(monster){
    monster.displayMonster();
  });
  this.characterLocation().friendlies.forEach(function(friendly){
    friendly.displayNPC();
  });
  if(!this.characters[0].inCombat){
    this.characterLocation().getExits();
  }
  if(this.characters[0].inventory[0]){
    $("#armButton").show();
  };
  if(this.characters[0].weapon[1]){
    $("#disarmButton").show();
  };
  if(this.characterLocation().location == 2){
    $("#talkButton").show();
  }
  if(this.characters[0].weapon[1]){
    $("#disarmButton").show();
  }
}

//========================================================
var game = new Game();
