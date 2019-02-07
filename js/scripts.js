var map = game.gameMap;
var character = game.characters[0]
map[4].spawnMonster(2);
map[6].spawnMonster(1);
map[9].spawnMonster(3);
map[8].spawnMonster(0);
map[7].spawnMonster(4);
map[11].spawnMonster(5)
map[5].spawnItem(4);
map[2].spawnFriendly(0);
map[12].spawnFriendly(1);
map[6].spawnFriendly(2);

$(function(){
  $("#titleScreen").fadeIn();

$("#startGame").click(function(){
  $("#titleScreen").hide();
  $("#preGameScreen").fadeIn();
});

$("#nameForm").submit(function(){
  event.preventDefault();
  var name = $("#userName").val();
  character.askName(name);
  $("#preGameScreen").hide();
  $("#gameScreen").fadeIn();
});


  $("button").hide();
  $("#startGame").show();
  $("#submitName").show();
  game.displayAll();

  $("#backButton").click(function(){
    character.move();
  });

  $("#forwardButton").click(function(){
    if(!map[character.location].monsters[0] || map[character.location].monsters[0].checkDead()){
      character.move("forward");
    }
    else{
      $("#location").text("The " + map[character.location].monsters[0].name.toLowerCase() + " blocks your way.")
    }
  });

  $("#climbDownButton").click(function(){
    character.move();
    character.move();
  });

  $("#climbUpButton").click(function(){
    if(!map[character.location].monsters[0] || map[character.location].monsters[0].checkDead()){
      character.move("forward");
      character.move("forward");
    }
    else{
      $("#location").text("The " + map[character.location].monsters[0].name.toLowerCase() + " blocks your way.")
    }
  });

  $("#getButton").click(function(){
    character.get();
    $("#getButton").hide();
  });

  $("#armButton").click(function(){
    character.armWeapon(character.inventory[0]);
    $("#armButton").hide();
    game.displayAll();
  });

  $("#disarmButton").click(function(){
    character.disarmWeapon();
    $("#disarmButton").hide();
    game.displayAll();
  });

  $("#useButton").click(function(){
    character.useItem(character.findConsumable())
  });

  $("#fightButton").click(function(){
    $("#forwardButton").hide();
    $("#backButton").hide()
    if(map[character.location].monsters[0]){
      character.fight(map[character.location].monsters[0]);
    }
    else if(map[character.location].friendlies[0]){
      character.fight(map[character.location].friendlies[0]);
    }
    else{
      console.log("You see nothing here to fight");
    }

  });

  $("#userInputForm").submit(function(){
    event.preventDefault();
    var userInput = $("#userInput").val();
    $("#userInput").val('')
    alert(userInput);
  });

  $("#talkButton").click(function(){
    if(game.characterLocation().friendlies[0] == npc){
      if(!character.quest){
        npc.talk("Help! I've lost my walking stick! Will You help me get it back?");
        $("#yesButton").show();
        $("#noButton").show();
        $("#fightButton").hide();
        $("#talkButton").hide();
      }
      else if(character.quest == "complete"){
        npc.talk("Thank you for your help!!");
      }
      else{
        if(character.findQuestItem().name == "Quarterstaff"){
          character.giveItem(npc);
          npc.talk("This is great! I was using this sword but it's too heavy as a walking stick. Here, you take it instead.")
        }
        else if(character.findQuestItem().name == "walking stick"){
          character.giveItem(npc)
          npc.talk("This is even better than the one I had!")
        }
        else{
          if(character.weapon[0].name == "Quarterstaff"){
            npc.talk("That's fine staff you have in your hands... looks nice and light, much lighter than what I've been using...")
          }
          else if(character.weapon[0].name == "walking stick"){
            npc.talk("That looks just like the one I used to have!")
          }
          else{
          npc.talk("Where's my walking stick?");
          };
        };
      };
    }
    else if(game.characterLocation().friendlies[0] == wizard){
      if(character.weapon[0] == sword || character.inventory.includes(sword)){
      character.getFortified();
      wizard.talk(eventWizardBless);
      character.loseBonusDamage(sword);
      sword.damage = sword.damage * 2;
      character.addBonusDamage(sword);
      $("#location").text("The wizard beckons you to drink from a spring and fortify your bones. You do so and feel stronger than ever!")
      }
      else{
        wizard.talk("Bring me a sword, I have a trick or two up my sleeve.")
      }
    }
    else if(game.characterLocation().friendlies[0] == captive){
      captive.talk("Will you please untie me?");
      $("#yesButton").show();
      $("#noButton").show();
    }
  });

  $("#yesButton").click(function(){
    if(character.location == 2){
      character.quest = true;
      $("#yesButton").hide();
      $("#noButton").hide();
      npc.talk("Thank you! I knew someone would come along that I could count on!");
    }
    else if(character.location == 6){
      $("#location").text("You reach down and untie the captive.");
      captive.talk("Thank you!! If you're going to go any further, you'll want to pay my friend a visit at the top of the mountain.");
    }
  });

  $("#noButton").click(function(){
    if(character.location == 2){
      npc.talk("Some help you are. Take some time to think about it... will you change your mind?");
    }
    else if(character.location == 6){
      captive.talk("Wow, I never knew anybody could be so unhelpful. Please change your mind?")
    }
  });

  $("#restButton").click(function(){
    character.rest();
    $("#location").text("You feel well rested and healthy again.")
  });

  $("#lookButton").click(function(){
    game.displayAll();
    if(game.characterLocation().location == 10){
      $("#forwardButton").show();
      $("#location").append("<br>You move some bushes and see a hidden entrance leading into a cave.");
    }
  });

});
