var monsterDescriptions = [
  "A giant ugly ",
  "A noxious smelling ",
  "An unbelievably offensive ",
  "A large ",
  "A foul smelling ",
  "A horrible ",
  "A tremendous ",
  "An obese ",
  "A dead-eyed ",
  "A smelly "
];

var monsterActions = [
  " lurks nearby.",
  " stalks you.",
  " gazes at you hungrily.",
  " snores loudly.",
  " mocks you.",
  " spits at you.",
  " looks like it's going to bite."
];


var itemDescriptions = [

];

var itemActions = [
  " lays near some rocks.",
  " is on the ground nearby.",
  " has been left on the ground.",
  " lies nearby."
];

// Location Descriptions, Main and Array
var mapOneStart = "From all directions you stand amid dense columns of trees, many with great roots that are blanketed with old dry leaves and pine needles. The uneven terrain makes it difficult even for experienced travelers to get a proper foothold. There is a faint path, scattered with pebbles sunk into the dirt, this road too is uneven but at least it’s been well trailed. You cannot go back from here, you know you must go forward.";

var mapTwoClearing = "A small field surrounded by trees, a mix of those trampled by the dragon and those that still stand proud. The abundant tall grass hides the small fauna and unusual flora, with patches of the grass crushed in the shape of a dragon’s clawed foot.  The road is raised through the clearing, making it easy to traverse.";

var mapThreeForest = "From the clearing the groupings of trees get closer together, with bright rays of the sun coming through the branches. It’s strange to think that a dragon had trailed through here only a short while ago. The fallen, rotting trees are perhaps the only sign of its presence, as even the natural world bows to the dragon’s forceful will.";

var mapFourForest = "A small creek runs between the crevices of the tree bases, wearing away the dirt and sand to show the girth of these old roots. The water crosses the worn path, pushing along twigs and mud against the road, and you think few travel this way. Ahead is the wooden palisades of a small town, the only seed of civilization for miles around.";

var mapFiveTown = "This gated communal has seen much strife, some buildings are scorched while others are left in ruin. Yet the people seem content, even happy, as children play in the town square and the little market bustles with business. Despite the scars left by the dragon, this town has persevered and steeled itself. A testament to the citizens here.";

var mapSixTown = "From the town you return to the forest along a road made of stone, though it is worn and ancient. It trails towards the hillsides away from the town, scattered stone foundations reveal the history of this land and all that has been lost. The view of the township and the safety its simple walls gets further from you, and soon you are fending for yourself once more.";

var mapSevenHill = "The forest begins to slope upwards, and ahead is the the range of mountains known to be the home for creatures of every horror. And atop the hills is the dragon’s mountain, a towering stone mountain, a suitable throne for a monster who claims dominance over all others. The hike will be long and wearing, yet this journey must end, with the slaying of the fire breathing beast.";

var mapEightLake = "You come to the shore of an alpine lake, admiring the serenity of the scene. You can see the opening of a cave behind the waterfall that feeds the alpine pool. Despite the calm of the lake and surrounding forest, you know that ahead will be full of hardship, a challenge worthy of a hero.";

var mapNineCavern = "The stink of rotting flesh causes you to retch as you can almost taste the putrid air of the cavern. Far above the entrance, up a crooked and worn to rubble stairway is a dim flickering light. You can only surmise that the lair of the dragon is there, made evident by the litter of corpses on the stairs, even impaled into rocks on the wall. This is a tomb of would-be heroes that fell to the dragon and its minions.";

var mapTenCliff = "Despite the beauty of the forested land and gentle hills that are laid out across the horizon, you feel greatly unnerved. Bitterly cold wind hisses in your ear, urging you to return the way you came down below. The only other way to go, is up further, scaling the rocky cliffs and untouched paths towards the summit above. Were you to fall from this height, no one would even hear the echo of your screams.";

var mapElevenLair = "Bones are strew throughout this enormous cavern, much of which seemed to have been carved out of the stone. Surrounded by the armaments of questing knights is a misshapen, great iron brazier, bright flame bursting from it in a wild flicker. The fire illuminates the far side of the chamber, a portion of the cave dug out by giant claws and filled with enough treasure to make a king faint.";

var mapTwelveSummit = "The heavy mist rests on the peaks of the mountain range, and from atop this great summit you feel a deep invigoration. The world is far beneath your very footsteps, down the path where you had climbed from. The plateau is crowned with rough stone, the remains of an old shrine next to the glistening pool of the natural spring there."

var mapTwelveSummitHidden = "You see the outline of a worn stone door, so beaten by the weather that you initially thought it natural. It is in fact, a secret entrance into the dragon’s lair.";

// Descriptive Items
var bareHandsDesc = "There are tales of great warriors who take down beasts with only their hands, with the strength to tear skull from spine and put an end to the plaguing horrors. Your hands don’t do that, you hit things and it hurts when you do."

var quarterStaffDesc = "A stick that’s made for walking, and that’s just what it’ll do. It’s also excellent at striking down your foes with splintered rage. Though it’s a sturdy oak pole, the carvings on it seem worn and you know that it is very old.";

var swordRustyDesc = "This sword once belonged to a knight of old who died in the most unfortunate of ways, and ever since his sword has passed from hand to hand, worn down by the ages. And terrible usage, it’s mainly been peasants using it to dig holes.";

var swordBlessedDesc = "Awoken blade, a weapon of a hero from ages past. The blade is polished as a steel mirror, and it hums as it swings, cutting through the air-- and your enemies-- like wet paper.";

var ironShieldDesc = "Out of all the breakthroughs in technology, the shield has become one of the most reliable, as it prevents things from hitting you. Well, more lessens things from hitting you than preventing."

var healthPotionDesc = "A strange glowing red liquid that is made from organically raised and processed chicken blood infused with uranium.";

var fireScrollDesc = "An ancient sheet torn from a tome of magic, capable of creating flames from nothing even if the user is magically inept. Or just inept. Not judging, just calling it like the scroll sees it.";

// Descriptive Deaths
var deathStarve = "You seem confused, lost, wandering back and froth with no goal in mind. Time passes and you forget that too, you forget to think, forget to feel. You forgot to eat. You starve yourself to death, wandering around doing nothing.";

var deathCrone = "You lunge at the crone, thinking her a defenseless old woman. You thought wrong, and then you no longer have time to think anything at all. Your body catches fire as the ground beneath your feet crumbles, the very earth seizing your legs to crush your flesh and bones. You burn, trapped, reaching out for the old crone. Her leer is the last thing you see, before you see nothing at all, but the abyss of death.";

var deathMonster = "Defeated, you lay a bloody mess on the ground. Your life plays out before your eyes, you think of home and the family you had, childhood friends and sweethearts. It’s been a good life, up to this point, you die with few regrets. Except that your skull is being turned into mash by the sadistic creature that claims victory over you.";

var deathDragon = "You fought the good fight, your best fight, you gave it your all but lay in defeat. A rumbling snarl above your head, then nothing, a dread silence that causes you to look up. The dragon inhales sharply, before it bellows its fire onto you with a great roar. The pain is brief as your flesh crisps up and your innards cook, a delicacy for the dragon to enjoy, in one swift bite.";
