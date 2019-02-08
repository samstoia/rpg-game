
function MapLocation(name, description, location, imgKey, items, monsters, friendlies, exits){
  this.name = name,
  this.description = description,
  this.location = location,
  this.imgKey = imgKey,
  this.items = [],
  this.monsters = [],
  this.friendlies = [],
  this.exits = []
}

MapLocation.prototype.addMapLocation = function (){
    game.gameMap.push(this);
};

var city1 = new MapLocation ("Citadel", "From all directions you stand amid dense columns of trees, many with great roots that are blanketed with old dry leaves and pine needles. The uneven terrain makes it difficult even for experienced travelers to get a proper foothold. There is a faint path, scattered with pebbles sunk into the dirt, this road too is uneven but at least it’s been well trailed. You cannot go back from here, you know you must go forward.", 0, "img/mapOne.jpg");
var city2 = new MapLocation ("City Limits", "A small field surrounded by trees, a mix of those trampled by the dragon and those that still stand proud. The abundant tall grass hides the small fauna and unusual flora, with patches of the grass crushed in the shape of a dragon’s clawed foot.  The road is raised through the clearing, making it easy to traverse.", 1, "img/mapTwo.jpg");
var forest1 = new MapLocation ("Forest Path", "From the clearing the groupings of trees get closer together, with bright rays of the sun coming through the branches. It’s strange to think that a dragon had trailed through here only a short while ago. The fallen, rotting trees are perhaps the only sign of its presence, as even the natural world bows to the dragon’s forceful will.", 2, "img/mapThree.jpg");
var forest2 = new MapLocation ("Dense Forest", "A small creek runs between the crevices of the tree bases, wearing away the dirt and sand to show the girth of these old roots. The water crosses the worn path, pushing along twigs and mud against the road, and you think few travel this way. Ahead is the wooden palisades of a small town, the only seed of civilization for miles around.", 3, "img/mapFour.jpg");
var forest3 = new MapLocation ("Forest Clearing", "The forest is clustered all the way up to the walls of the town ahead. From what you can see, the town is worse for wear, but still standing. A small creek pours gently down the hillside, further into the forest.", 4, "img/mapFour.jpg");
var riverCrossing = new MapLocation ("River", "This gated communal has seen much strife, some buildings are scorched while others are left in ruin. Yet the people seem content, even happy, as children play in the town square and the little market bustles with business. Despite the scars left by the dragon, this town has persevered and steeled itself. A testament to the citizens here.", 5, "img/mapFive.jpg");
var footHills1 = new MapLocation ("Foothills", "TFrom the town you return to the forest along a road made of stone, though it is worn and ancient. It trails towards the hillsides away from the town, scattered stone foundations reveal the history of this land and all that has been lost. The view of the township and the safety its simple walls gets further from you, and soon you are fending for yourself once more.", 6, "img/mapSix.jpg");
var footHills2 = new MapLocation ("Mountain Viewpoint", "The forest begins to slope upwards, and ahead is the the range of mountains known to be the home for creatures of every horror. And atop the hills is the dragon’s mountain, a towering stone mountain, a suitable throne for a monster who claims dominance over all others. The hike will be long and wearing, yet this journey must end, with the slaying of the fire breathing beast.", 7, "img/mapSeven.jpg");
var mountainBase = new MapLocation ("Base of Mountain", "You come to the shore of an alpine lake, admiring the serenity of the scene. You can see the opening of a cave behind the waterfall that feeds the alpine pool. Despite the calm of the lake and surrounding forest, you know that ahead will be full of hardship, a challenge worthy of a hero.", 8, "img/mapEight.jpg");
var mountainInterior1 = new MapLocation ("Mountain Cave", "The stink of rotting flesh causes you to retch as you can almost taste the putrid air of the cavern. Far above the entrance, up a crooked and worn to rubble stairway is a dim flickering light. You can only surmise that the lair of the dragon is there, made evident by the litter of corpses on the stairs, even impaled into rocks on the wall. This is a tomb of would-be heroes that fell to the dragon and its minions.", 9, "img/mapNine.jpg");
var mountainLedge = new MapLocation ("Mountain Ledge", "Despite the beauty of the forested land and gentle hills that are laid out across the horizon, you feel greatly unnerved. Bitterly cold wind hisses in your ear, urging you to return the way you came down below. The only other way to go, is up further, scaling the rocky cliffs and untouched paths towards the summit above. Were you to fall from this height, no one would even hear the echo of your screams.", 10, "img/mapTen.jpg")
var mountainInterior2 = new MapLocation("Lair of the Dragon" , "Bones are strew throughout this enormous cavern, much of which seemed to have been carved out of the stone. Surrounded by the armaments of questing knights is a misshapen, great iron brazier, bright flame bursting from it in a wild flicker. The fire illuminates the far side of the chamber, a portion of the cave dug out by giant claws and filled with enough treasure to make a king faint.", 11, "img/mapEleven.jpg")
var mountainTop = new MapLocation("Top of the mountain", "The heavy mist rests on the peaks of the mountain range, and from atop this great summit you feel a deep invigoration. The world is far beneath your very footsteps, down the path where you had climbed from. The plateau is crowned with rough stone, the remains of an old shrine next to the glistening pool of the natural spring there.", 12, "img/mapTwelve.jpg");


game.getMap(city1);
game.getMap(city2);
game.getMap(forest1);
game.getMap(forest2);
game.getMap(forest3);
game.getMap(riverCrossing);
game.getMap(footHills1);
game.getMap(footHills2);
game.getMap(mountainBase);
game.getMap(mountainInterior1);
game.getMap(mountainLedge);
game.getMap(mountainInterior2);
game.getMap(mountainTop);

MapLocation.prototype.spawnMonster = function(number){
  this.monsters.push(game.monsters[number])
};

MapLocation.prototype.spawnItem = function(number){
  this.items.push(game.items[number])
};

MapLocation.prototype.getExits = function(){
  if(this.location === 11 || this.location === 12){
    $("#climbDownButton").show();
  }
  else if(this.location === 0){
    $("#forwardButton").show();
  }
  else if(this.location === 9){
    $("#backButton").show();
    $("#climbUpButton").show();
  }
  else if(this.location === 8){
    $("#forwardButton").show();
    $("#backButton").show();
    $("#climbUpButton").show();
  }
  else if(this.location === 10){
    $("#climbUpButton").show();
    $("#climbDownButton").show();
  }
  else{
    $("#forwardButton").show();
    $("#backButton").show();
  };
};

MapLocation.prototype.spawnFriendly = function(number){
  this.friendlies.push(game.friendlies[number]);
}
