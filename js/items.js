
//              WEAPON CONSTRUCTOR AND METHODS
function Weapon(name, magic, base, bonus, speed, slayer){
  this.name = name,
  this.magic = magic
  this.base = base,
  this.bonus = bonus,
  this.speed = speed,
  this.slayer = slayer
}
//              ARMOR CONSTRUCTOR AND METHODS
function Armor(name, rating, dexPenalty){
  this.name = name,
  this.rating = rating,
  this.dexPenalty = dexPenalty
}
//             HEALING ITEM CONSTRUCTOR AND METHODS
function Item(name, type, number, healing){
  this.name = name,
  this.number = number,
  this.healing = healing
}


Item.prototype.displayItem = function(){
  if(this){
    $("#items").text(this.name);
    $("#getButton").show();
  }
  else{
    $("#items").text('');
    $("#getButton").hide();
  };
};

var bareHands = new Item("Bare hands", "none", 10, 3)
var sword = new Item("Sword", "ruin", 10, 3, 10, "Dragon Slaying");
game.getItem(sword);
