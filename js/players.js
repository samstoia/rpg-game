//              PLAYER CHARACTER CONSTRUCTOR AND METHODS
function Character(name, hp, damage, strength, dexterity, intelligence, courage, swordsmanship, tactics, hiding, weapon, inventory, inCombat, quest, location, previousLocations){
  this.name = name,
  this.hp = hp,
  this.damage = damage,
  this.strength = strength,
  this.dexterity = dexterity,
  this.intelligence = intelligence,
  this.courage = courage,
  this.swordsmanship = swordsmanship,
  this.tactics = tactics,
  this.hiding = hiding,
  this.weapon = [bareHands],
  this.inventory = [],
  this.inCombat = !!inCombat,
  this.quest = !!inCombat,
  this.location = 0,
  this.previousLocations = []
};

Character.prototype.hit = function(target){
  target.takeDamage(this.damage);
  game.displayAll()
};

Character.prototype.fight = function(monster){
  this.inCombat = true;
  this.hit(monster);
  console.log("You hit the monster for " + this.damage + " leaving him with " + monster.hp + " hp");
  if(!monster.checkDead()){
    monster.hit(this);
    console.log("The monster swings for " + monster.damage + ". You have " + this.hp + "hp.");
    this.checkDead();
  }
  else{
    monster.dropLoot();
  }

};


Character.prototype.checkDead = function(){
  if(this.hp < 1){
    console.log("You are dead.");
    $("#gameScreen").hide();
    $("#deathScreen").fadeIn();
  }
};

Character.prototype.takeDamage = function(damage){ //  PLAYER TAKE DAMAGE FUNCTION
  this.hp -= damage;
  this.displayAll();
};

Character.prototype.heal = function(healing){   //  PLAYER HEALING FUNCTION
  if(this.hp + healing > 100){
    this.hp = 100;
  }
  else{
    this.hp += healing;
  }
  this.displayAll();
};

Character.prototype.flee = function(){     //
  this.takeDamage(5);
  this.move();
};

Character.prototype.displayWeapon = function(){  // DISPLAYS ARMED WEAPON IN HTML
  $("#displayWeapon").text(this.weapon[0].name)
}

Character.prototype.armWeapon = function(weapon){    //  ARM WEAPON, ONE WEAPON AT A TIME
  if(this.weapon[0] == bareHands){
    this.weapon.unshift(weapon);
    this.inventory.shift();
    this.addBonusDamage(weapon);
  }
  else{
    this.changeWeapon(weapon)
  }
  this.displayWeapon();
}
Character.prototype.changeWeapon = function(weapon){   //  CHANGE WEAPON, GETS CALLED IF WEAPON [] ALREADY HAS AN ITEM - PUSHES CURRENT WEAPON TO INVENTORY
  this.disarmWeapon();
  this.armWeapon(weapon);
};

Character.prototype.disarmWeapon = function(){      //  DISARMS WEAPON, PUSHES TO INVENTORY
  this.loseBonusDamage(this.weapon[0]);
  this.inventory.push(this.weapon[0])
  this.weapon.shift();
  this.displayWeapon();
};

Character.prototype.giveItem = function(npc){
  this.inventory.shift()
  npc.giveItem();
};

Character.prototype.displayAll = function(){
  $("#showName").text(this.name)
  $("#showHitPoints").text(this.hp)
  $("#showStrength").text(this.strength)
  $("#showDexterity").text(this.dexterity)
  $("#showIntelligence").text(this.intelligence)
  $("#showSwordsmanship").text(this.swordsmanship)
  $("#showTactics").text(this.tactics)
  $("#showHiding").text(this.hiding)
  $("#showLocationName").text(game.gameMap[this.location].name)
  $("#HP").text('');
  $("#missingHP").text('');
  this.displayWeapon()
  for(var i = 0; i<100; i++){
    if(this.hp > i){
      $("#HP").append("|");
    }
    else{
      $("#missingHP").append("|");
    };
    $("#HP").removeClass();
    if(this.hp > 50){
      $("#HP").addClass("green");
    }
    else if(this.hp > 30){
      $("#HP").addClass("yellow");
    }
    else{
      $("#HP").addClass("red");
    };
  };

};

Character.prototype.askName = function(input){
  this.name = input;
}

Character.prototype.move = function(input){   //       !!! NEEDS A BUTTON ON THE PAGE TO GIVE AN ID FOR FORWARD, NO ID NEEDED FOR BACK- STATEMENT WILL READ IF(ID)
  this.previousLocations.push(this.location);
  $("button").hide();
  if(input == "forward"){
  this.location ++
  }
  else{
    this.location --
  };
  this.heal(3);
  game.displayAll();  //  game.js line 36
};
Character.prototype.displayGetButton = function(){
  $("#getButton").show();
  $("#items").text(game.characterLocation().items[0].name);
};

Character.prototype.get = function(){
  character.inventory.push(map[character.location].items[0]);
  map[character.location].items.shift();
  game.displayAll();
};

Character.prototype.displayArmButton = function(){
  $("#armButton").show();
}



Character.prototype.addBonusDamage = function(item){
  this.damage += item.damage;
};

Character.prototype.loseBonusDamage = function(item){
  this.damage -= item.damage;
};

Character.prototype.drinkPotion = function(item){
  this.heal(item.damage);
}

game.getPlayer();
