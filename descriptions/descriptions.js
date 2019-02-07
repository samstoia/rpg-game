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

// Exhibition
var intro = "You set out from your village, at the urging of the town elders. This is what must be done, if it can be done at all. Your childhood friend and the lord's daughter, Emilie Hillinder, has been taken by the legendary flying beast, Go'Leir. A dragon famous in stories to frighten children, but a name that makes knights shake in their boots. None will come to save the daughter of a lowly lord. And so it has fallen to you. You who are the fastest, strongest, and most clever in your village. Even if youu weren't, she is a friend, and she will not be left to be the dragon's meal.";

var ending = "Go'Leir, the shadow of death and fiery beast that brings only destruction. The beast of all doom lays dead, a miserable corpse of evil glory. Amid the treasure you hear a cry for help, it's the lord's daughter. You rush over to the pile of gold, knocking crowns and coin to the ground, taking hold of the outreached hand. You pull, and then again. Both you and she struggle, but soon she is free.";

var ending2 = "Emilie looks worse for wear, having hid in the dragon's treasure to avoid her fate. She embraces you and holds on tight for several moments. When she lets you go, she reaches for the magic sword and looks at it, and then to the dead Go'Leir. Something in her has awoken, the same thing that awoke in you when she was taken.";

var ending3 = "Maybe together, the world doesn't have to be such a bleak place."

// Monster Descriptions
var monsterOgre = "An ugly sight of a one-eyed ogre stomps in front of you. He gurgles and belches, picking at the empty socket of his eye. Despite seeming worse for wear, he is armed with a bloodied club and ready to smash you.";

var monsterTroll = "You are surprised as a large troll jumps from out of the trees, roaring out at you. Her limber form is covered in makeshift leather armor, though her giant ax looks made for her size. It also looks made to cleave travelers like you into small edible pieces.";

var monsterSkeleton = "No skin and all bones, the haunted skeleton of a long dead warrior stands ready to take your life and share its misery with you. Its skull is cracked and it’s missing a few ribs, it gestures rudely at you, before charging your way.";

var monsterGolem = "The colossal of a stone warrior who steps with great care, keeping its three green eyes on you. Ornate carvings of letterscript cover its limbs, and with each movement they glimmer with a magical light. Across it’s face is another mark, glowing red, seeming to be carved by a beast’s claw.";

var monsterDragon = "A proud beast with a wide wingspan, each step of its clawed feet sending small tremors through the ground. It’s grayed scales seem in part decayed, and its eyes are full of a fierce rage. Looming above you, it’s sharp fangs bare as it rumbles, the glowing ember of flame coming from its throat. This is the beast of nightmares, this is Go’Leir, the Dragon of All Doom.";

// Event Descriptions and Dialogues
var eventClearing = "You follow an old trail, finding that it leads through a huddle of half-fallen trees, with little room to squeeze under. As you crouch under the mess of branches, you see a clearing through the brush. A heavy thud and the crunch of a tree trunk stops you in place, as large scaly feet come into your line of view. By the time you remember to breath, you can see it’s hefty spiked tail. It’s a dragon, it’s the dragon you’ve been seeking. Is this your only chance to slay the beast?";

var eventClearingHide = "You hold your breath again, listening for the dragon to walk through the clearing. Soon enough you can hear the sound of its wings flapping, before it lets out a roar and takes to the sky, disappearing from sight within moments.";

var eventClearingCharge = "You charge from your hiding place, and attack the dragon. It turns its head back at you, with great disinterest.";

var eventClearingFight = "Despite your attacks, the dragon grows bored of you, and extends its mighty wings. With a few flaps, it takes to the air and the forceful gust knocks you to the ground. It lets out a roar as it takes to the sky, disappearing from sight within moments.";

var eventClearingFlee = "You realize your attacks do nothing and you bolt back into the thicket of trees. Fortunately the dragon grows bored of you, and extends its mighty wings. With a few flaps, it takes to the air and the forceful gust shakes the trees. It lets out a roar as it takes to the sky, disappearing from sight within moments.";

var eventCroneFirst = "You see an old woman, garbed in blue and gray standing by the road, leaning against one of the trees. Her eyes are downcast, and you can see she is very tired. As you walk near, her gaze rests on you and for an instance you are filled with an intense fear, but she smiles at you and that fear melts away. Very strange.";

var eventCroneTalk = "You step up to the crone and ask if she is alright.<br>'Why yes, I am. It’s a very nice day and I wanted to walk the forest trails so I could listen to the sweet birds. My walking stick is far too heavy though, I wish I had one that was not so heavy.' She says, gesturing to the longsword at her side, the dull blade sticking into the dirt. Her eyes return to you and again she smiles. 'Would you possibly be able to find me something… lighter?'"

var eventCroneYes = "'Oh thank you, you are truly a kind soul.' She says, and you leave her there."

var eventCroneNo = "'Oh… well, I understand. I am just a simple, old woman, in a place you don’t know, in a land you are new to.' The crone laughs softly. 'The best of luck to you, dragon slayer.'"

var eventCroneComplete = "'My, my, this staff is perfect! Exactly what I needed! Thank you kind soul.' She smiles, taking the staff from you. 'Here, you can have this sword. I have no use for it.'"

var eventTownRest = "You feel worn, the day has been long. You find a suitable place to take a short rest and tend to your wounds. One of the townsfolk offers you food and medicine, though it’s not much. You feel welcomed in this far away hamlet that knows the dragon’s ire all too well.";

var eventWizardSave = "The troll lays dead, and from near a tree you hear a man yell for help. As you rush over, you see an old robed man with a long magenta beard. He's struggling in bindings, desperately wanting to be freed. When you approach, he looks up at you with great glee.";

var eventWizardTalk = "'Praise the skies! Praise the stars! Praise the heliopause! I am saved!' He's estastic at the concept of being set free. Will you untie him?"

var eventWizardFree = "You lean down and start to untie the squirming old man. He gets up and brushes off his robes and thanks you profusely, over and over again. He literally owes you his life, and he does check his pockets, but gives a big shrug.";

var eventWizardResponse = "'I have no item to give you hero, but I can tell you of a precious watersource on the mountain ahead, somewhere near the dragon's lair.' And with that, he takes his leave from you.'"

var eventWizardLeave = "You leave the man tied up. He curses you with pure stupidity.";

var eventWizardSummit = "Near the summit spring you see the familiar sight of the old man you saved from the troll. He's excited and enthusiastic to see you, gesturing you over.";

var eventWizardBless = "'Hero! You made it here!' He exclaims, before looking at your sword. 'Ugh. HER. Here, let me make this blade of yours much better...' He takes the sword from you without even asking, and taps the length of it until it glows. The man, a wizard apparently, hands the blade back to you. 'May it serve you well hero!'";

var eventWizardHeal = "The old man shows you to the spring, telling you that the water is magic, a sacred pool of healing. Should you drink only drops of the water, you can be healed, but the water must be drunk immediately from scooping it from the pool. You lean down and cup your hands, pulling water from the spring to sip at it. Immediately you feel healthier than youu had ever been. No peasant had ever felt this amazing before.";

// Location Descriptions, Main and Array
var mapDesc = "From all directions you stand amid dense columns of trees, many with great roots that are blanketed with old dry leaves and pine needles. The uneven terrain makes it difficult even for experienced travelers to get a proper foothold. There is a faint path, scattered with pebbles sunk into the dirt, this road too is uneven but at least it’s been well trailed. You cannot go back from here, you know you must go forward.";

var mapTwoClearing = "A small field surrounded by trees, a mix of those trampled by the dragon and those that still stand proud. The abundant tall grass hides the small fauna and unusual flora, with patches of the grass crushed in the shape of a dragon’s clawed foot.  The road is raised through the clearing, making it easy to traverse.";

var mapThreeForest = "From the clearing the groupings of trees get closer together, with bright rays of the sun coming through the branches. It’s strange to think that a dragon had trailed through here only a short while ago. The fallen, rotting trees are perhaps the only sign of its presence, as even the natural world bows to the dragon’s forceful will.";

var mapFourForest = "A small creek runs between the crevices of the tree bases, wearing away the dirt and sand to show the girth of these old roots. The water crosses the worn path, pushing along twigs and mud against the road, and you think few travel this way. Ahead is the wooden palisades of a small town, the only seed of civilization for miles around.";

var mapFiveTown = "This gated communal has seen much strife, some buildings are scorched while others are left in ruin. Yet the people seem content, even happy, as children play in the town square and the little market bustles with business. Despite the scars left by the dragon, this town has persevered and steeled itself. A testament to the citizens here.";

var mapSixForest= "From the town you return to the forest along a road made of stone, though it is worn and ancient. It trails towards the hillsides away from the town, scattered stone foundations reveal the history of this land and all that has been lost. The view of the township and the safety its simple walls gets further from you, and soon you are fending for yourself once more.";

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
