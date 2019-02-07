
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
function Item(name, damage, weapon, consumable, questItem){
  this.name = name,
  this.damage = damage,
  this.weapon = !!weapon,
  this.consumable = !!consumable
  this.questItem = !!questItem

}


Item.prototype.displayItem = function(){
  if(this){
    $("#items").text("A " + this.name.toLowerCase() + itemActions[Math.floor(Math.random()*itemActions.length)]);
    $("#getButton").show();
    $("#getItemName").text(this.name)
  }
  else{
    $("#items").text('');
    $("#getButton").hide();
  };
};

var bareHands = new Item("Bare hands", 10, "weapon", false, true)
var sword = new Item("Sword", 10, true);
var stick = new Item("walking stick", 5, true, false, true);
var staff = new Item("Quarterstaff", 4, true, false, true)
var potion = new Item("potion", 10, false, "consumable")
game.getItem(bareHands);
game.getItem(sword);
game.getItem(stick);
game.getItem(staff);
game.getItem(potion);
