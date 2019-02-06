var map = game.gameMap;
var character = game.characters[0]

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
  character.displayAll();
});
  map[4].spawnMonster(2);
  map[6].spawnMonster(1);
  map[9].spawnMonster(3);
  map[8].spawnMonster(0);
  map[7].spawnMonster(4);
  map[11].spawnMonster(5)
  map[4].spawnItem(0);


  $("#location").text(map[character.location].description);

  character.displayAll();
  $("button").hide()
  $("#startGame").show();
  $("#submitName").show();
  map[character.location].getExits();
  map[character.location].displayExtras();

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
    $("#getButton").fadeOut();
    character.displayArmButton();

  });

  $("#armButton").click(function(){
    character.armWeapon(character.inventory[0]);
    $("#armButton").hide();
  })

  $("#fightButton").click(function(){
    character.fight(map[character.location].monsters[0]);
    $("#forwardButton").hide(); //added to original js
    $("#backButton").hide(); //added to original js
    $("#fleeButton").show(); //added to original js
  });

  $("#fleeButton").click(function(){ //added to original js
    character.flee(); //added to original js
  });

  $("#userInputForm").submit(function(){
    event.preventDefault();
    var userInput = $("#userInput").val();
    $("#userInput").val('')
    alert(userInput);
  });
});
