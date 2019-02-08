

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
  var player = this.characters[0]
  var currentLocation = this.characterLocation()

  player.displayAll();
  $("#location").text(currentLocation.description);

  currentLocation.items.forEach(function(item){
    item.displayItem();
  });
  currentLocation.monsters.forEach(function(monster){
    monster.displayMonster();
  });
  currentLocation.friendlies.forEach(function(friendly){
    friendly.displayNPC();
    //$("#talkButton").show()
  });
  if(!player.inCombat){
    currentLocation.getExits();
  }
  for(var i = 0; i < player.inventory.length; i++){
    if(player.inventory[i].weapon){
      $("#armButton").show();
      $("#weaponName").text(player.inventory[i].name);
      break;
    }
  };
  for(var i = 0; i < player.inventory.length; i++){
    if(player.inventory[i].consumable){
      $("#useButton").show();
      $("#itemName").text(player.inventory[i].name);
      break;
    }
    else{
      $("#useButton").hide();
    }
  };

  if(player.weapon[1]){
    $("#disarmButton").show();
    $("#disarmName").text(player.weapon[0].name);
  };
  if(currentLocation.location == 2 || currentLocation.location == 12){
    $("#talkButton").show();
  }
  $("#inventory").text('')
  for(var i = 0; i < player.inventory.length; i++){
    $("#inventory").append(player.inventory[i].name + "<br>")
  }
  if(currentLocation == 5){
    $("#restButton").show();
  }
  $("#lookButton").show();
  $(".monsterImg").hide();
  if(this.characterLocation().monsters[0] && !this.characterLocation().monsters[0].checkDead()){
    if(this.characterLocation().monsters[0].name == "Goblin"){
      $("#goblin").show()
    }
    else if(this.characterLocation().monsters[0].name == "Ogre"){
      $("#ogre").show()
    }
    else if(this.characterLocation().monsters[0].name == "Skeleton"){
      $("#skeleton").show()
    }
    else if(this.characterLocation().monsters[0].name == "Golem"){
      $("#golem").show()
    }
    else if(this.characterLocation().monsters[0].name == "Dragon"){
      $("#dragon").show()
    }
  }
  else if(this.characterLocation().monsters[0]){
    if(this.characterLocation().monsters[0].name == "Goblin"){
      $("#deadGoblin").show()
    }
    else if(this.characterLocation().monsters[0].name == "Ogre"){
      $("#deadOgre").show()
    }
    else if(this.characterLocation().monsters[0].name == "Skeleton"){
      $("#deadSkeleton").show()
    }
    else if(this.characterLocation().monsters[0].name == "Golem"){
      $("#deadGolem").show()
    }
    else if(this.characterLocation().monsters[0].name == "Dragon"){
      $("#deadDragon").show()
    };
  };
  $("#backgroundPicture").text("<img class = '.visual' src = '" + this.characterLocation().imgKey + "'/>")
};

Game.prototype.displayWinScreen = function(){
  if(this.monsters[4].hp < 1){
    $("#gameScreen").hide();
    $("#winScreen").fadeIn();
  }
}

//========================================================
var game = new Game();
