$(document).ready(function(){
   $("#start").click(function(){
    $("#show1").show();
	$(this).hide();
  });


  $("#show1").click(function(){
   $("#show7").show();
    $(".game_area1").show(1000);
	$(this).hide();
  });
    $("#show2").click(function(){
	 $("#show9").show();
    $(".game_area2").show(1000);
	$(this).hide();
  });

    $("#show3").click(function(){
	 $("#show6").show();
    $(".game_area3").show(1000);
	$(this).hide();
  });
    $("#show4").click(function(){
	 $("#show5").show();
    $(".game_area4").show(1000);
	$(this).hide();
  });
    $("#show5").click(function(){
	 $("#show2").show();
    $(".game_area5").show(1000);
	$(this).hide();
  });
    $("#show6").click(function(){
	 $("#show4").show();
    $(".game_area6").show(1000);
	$(this).hide();
  });
    $("#show7").click(function(){
	 $("#show3").show();
    $(".game_area7").show(1000);
	$(this).hide();
  });
    $("#show8").click(function(){
    $(".game_area8").show(1000);
	$(this).hide();
  });
    $("#show9").click(function(){
    $(".game_area9").show(1000);
	$(this).hide();
  });

});		
					
var current_score = 100;
function myresult(form){
var input=form.answer.value.toLowerCase();
if(input == "monalisa")
	alert ("Great, you guessed the right answer");
else
	alert ("Sorry your answer is wrong.Please try again.");
}
function score(current_score){
window.current_score -=10
if (current_score == 30)
alert ("The right answer is monalisa");
else{
document.getElementById("score").innerHTML = "Current Score:- " + current_score; 
}
}	