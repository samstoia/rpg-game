var map = game.gameMap;
var character = game.characters[0]
map[4].spawnMonster(2);
map[6].spawnMonster(1);
map[9].spawnMonster(3);
map[8].spawnMonster(0);
map[7].spawnMonster(4);
map[11].spawnMonster(5)
//map[4].spawnItem(1);
map[2].spawnFriendly(0);

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


  $("button").hide()
  $("#startGame").show();
  $("#submitName").show();
  game.displayAll();

  $("#backButton").click(function(){
    character.move();
  });

  $("#forwardButton").click(function(){
    character.move("forward");
  });

  $("#climbDownButton").click(function(){
    character.move();
    character.move();
  });

  $("#climbUpButton").click(function(){
    character.move("forward");
    character.move("forward");
  });

  $("#getButton").click(function(){
    character.get();
    $("#items").text('')
    $("#getButton").hide();
    character.displayArmButton();
  });

  $("#armButton").click(function(){
    character.armWeapon(character.inventory[0]);
    $("#armButton").hide();
    game.displayAll();
  });

  $("#disarmButton").click(function(){
    character.disarmWeapon();
    $("#disarmButton").hide();
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
    if(!character.quest){
      npc.talk("Help! I've lost my walking stick! Will You help me get it back?");
      $("#yesButton").show();
      $("#noButton").show();
      $("#fightButton").hide();
      $("#talkButton").hide();
    }
    else{
      if(character.inventory[0]){
        character.giveItem(npc);
        npc.talk("This is great! I was using this sword but it's too heavy as a walking stick. Here, you take it instead.")
      }
      else{
        npc.talk("Where's my walking stick?");
      };
    };
  });

  $("#yesButton").click(function(){
    character.quest = true;
    $("#yesButton").hide();
    $("#noButton").hide();
    npc.talk("Thank you! I knew someone would come along that I could count on!");
  });

  $("#noButton").click(function(){
    npc.talk("Some help you are. Take some time to think about it... will you change your mind?")
  });

});
