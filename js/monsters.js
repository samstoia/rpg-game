//              MONSTER CONSTRUCTOR AND METHODS

function Monster(name, hp, damage, location){
  this.name = name,
  this.hp = hp,
  this.damage = damage,
  this.location = location
};

Monster.prototype.hit = function(target){
  target.takeDamage(this.damage);
}
Monster.prototype.takeDamage = function(damage){
  this.hp -= damage;
}
Monster.prototype.checkDead = function(){
  if(this.hp < 1){
    console.log("The monster is dead.");
    $("#fightButton").hide();
    game.characters[0].inCombat = false;
    //game.characterLocation().getExits();
    return true;
  }
  else{
    return false;
  }
}

Monster.prototype.dropLoot = function(){
  if(game.characterLocation().location == 4){
    if(character.quest == true){
      game.characterLocation().spawnItem(2)
      game.characters[0].displayGetButton();

    }
  }
};

Monster.prototype.displayMonster = function(){
  if(this && !this.checkDead()){
      $("#fightButton").show();
      $("#fightLog").append(this.name +  ": " + this.hp + "HP" + "<br><br>");
      $("#monsters").append(monsterDescriptions[Math.floor(Math.random()*monsterDescriptions.length)] + this.name.toLowerCase() + monsterActions[Math.floor(Math.random()*monsterActions.length)]+ "<br><br>")
  }
  else if(this && this.checkDead()){
    $("#fightLog").append(this.name +  ": corpse"  + "<br><br>");
    $("#monsters").append("A " + this.name.toLowerCase() + " is dead. <br><br>")

  }
  else{
    $("#fightButton").hide();
  };
};

var caveRat = new Monster("Cave rat", 17, 4);
var troll = new Monster("Troll", 83, 15);
var ogre = new Monster("Ogre", 64, 18);
var skeleton = new Monster("Skeleton", 35, 9);
var ogreLord = new Monster("Ogre lord", 109, 17);
var dragon = new Monster("Dragon", 200, 25)
game.getMonster(caveRat);
game.getMonster(troll);
game.getMonster(ogre);
game.getMonster(skeleton);
game.getMonster(ogreLord);
game.getMonster(dragon);

function NPC(name, hp, damage, inventory, location, friendly){
  this.name = name,
  this.hp = hp,
  this.damage = damage,
  this.inventory = [],
  this.location = location,
  this.friendly = true
};

NPC.prototype.takeDamage = function(damage){
  this.hp -= damage/2;
  console.log(this.name + ": 'Ouch! Why would you do that?''")
  this.friendly = false;
};

NPC.prototype.hit = function(target){
  console.log("Hit message");
  target.takeDamage(this.damage);
};

NPC.prototype.checkDead = function(){
  if(this.hp < 1){
    return true;
  }
  else{
    return false;
  };
};

NPC.prototype.displayNPC = function(){
  if(this && !this.checkDead()){
      $("#fightButton").show();
      $("#fightLog").append(this.name);
      $("#monsters").append("A friendly woman named " + this.name.toLowerCase() + " introduces herself."+ "<br><br>")
  }
  else if(this && this.checkDead()){
    $("#fightLog").append(this.name +  ": corpse"  + "<br><br>");
    $("#monsters").append("A " + this.name.toLowerCase() + " is dead. <br><br>")
  }
  else{
    $("#fightButton").hide();
  };
};

NPC.prototype.giveItem = function(){
  game.characters[0].inventory.unshift(this.inventory[0])
  this.inventory.shift()
  game.characters[0].quest = "complete";
  game.displayAll();
}

NPC.prototype.talk = function(output){
  console.log(output);
}


var npc = new NPC("Georgia", 100, 5);
npc.inventory.push(sword);
npc.location = 3;
game.getFriendly(npc);
