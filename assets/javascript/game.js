 // Reference DOM elements
 var newGameButton = $(".new-game-button");
 var titlePhrase = $("#titlePhrase");
 var cooper = $("#cooper");
 var cooperHealth = $("#cooperHealth");
 var laura = $("#laura");
 var lauraHealth = $("#lauraHealth");
 var audrey = $("#audrey");
 var audreyHealth = $("#audreyHealth");
 var leland = $("#leland");
 var lelandHealth = $("#lelandHealth");
 var attackButton = $("#attackButton");
 var fightText = $("#fightText");
 var cooperAttack = $("#cooperAttack");

 // variables
 var cooperHealth = 120;
 var lauraHealth = 100;
 var audreyHealth = 150;
 var lelandHealth = 180;
 var gameRunning = false;
 $("#attackButton").hide();
 $("#fightText").hide();
 // attack 5, 8, 20, 25
 var cooperAttack = 8;
 var lauraAttack = 5;
 var audreyAttack = 20;
 var lelandAttack = 25;

 // newButton onclick
 newGameButton.on("click", newGame);

 function newGame() {
     gameRunning = true;
     cooperHealth = 120;
     lauraHealth = 100;
     audreyHealth = 150;
     lelandHealth = 180;
     $(".title").append("<h2 class='chooseYour'>Choose Your Character</h2>");

     // write back to DOM
     $("#cooperHealth").text(cooperHealth);
     $("#lauraHealth").text(lauraHealth);
     $("#audreyHealth").text(audreyHealth);
     $("#lelandHealth").text(lelandHealth);
 }



var whatever1;
var whatever2;
var attack1;
var attack2;
 $(".grab").on("click", function () {
    //  debugger;
     if ($('#playerChoice').is(':empty') && gameRunning) {
         var x = $(this).attr("id");
         console.log(x);
         var myAttack = $(this).data("id");
         console.log(myAttack);

         $(this).clone().appendTo("#playerChoice");
         $(this).hide();
         $(".chooseYour").html("<h2>Choose Your Enemy</h2>");
         whatever1 = x;
         attack1 = myAttack;
     } 
     else if ($('#enemyChoice').is(':empty') && gameRunning) {
         var y = $(this).attr("id");
         console.log(y);
         var theirAttack = $(this).data("id");
         console.log(theirAttack);


         $(this).clone().appendTo("#enemyChoice");
         $(this).hide();
         $(".chooseYour").html("<h2>FIGHT</h2>");
         $("#attackButton").show();
         whatever2 = y;
         attack2 = theirAttack;
         $("#attackButton").on("click", function () {
            $("#fightText").show();
            $("#whatever1").text(whatever2);
            $("#whatever2").text(whatever2);


            imAttacking();
            $("#defenderDamage").text(attack2);
            //logic behind attack / health here





            //when we want to display the new health after an attack:
            //player gets attacked:
            $("#playerChoice").children(".health").text("whatever the new health is")
        })
     }
     //return x, y;
     console.log("clicked!", whatever1, whatever2, attack1, attack2 );
 });

 var attackTotal;
 function imAttacking() {
     //this is attack1
     $("#attackerDamage").text(attack1);
     attack1 = attack1 + attack1;
     // your attacktotal should equal what your attack total is plus the original attack numberluvu
     
 }

