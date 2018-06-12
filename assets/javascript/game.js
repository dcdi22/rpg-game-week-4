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

 // variables
 var cooperHealth = 120;
 var lauraHealth = 100;
 var audreyHealth = 150;
 var lelandHealth = 180;
 var gameRunning = false;
 $("#attackButton").hide();
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




 $(".grab").on("click", function () {
     if ($('#playerChoice').is(':empty') && gameRunning) {
         var x = $(this).attr("id");
         console.log(x);
         $(this).clone().appendTo("#playerChoice");
         $(this).hide();
         $(".chooseYour").html("<h2>Choose Your Enemy</h2>");
         return x;
     } 
     else if ($('#enemyChoice').is(':empty') && gameRunning) {
         var y = $(this).attr("id");
         console.log(y);
         $(this).clone().appendTo("#enemyChoice");
         $(this).hide();
         $(".chooseYour").html("<h2>FIGHT</h2>");
         $("#attackButton").show();
         return y;
     }
     return x, y;
 })

 console.log(x, y);

 $("#attackButton").on("click", function () {

 })