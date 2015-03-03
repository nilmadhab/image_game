$(document).ready(function(){


  $("#show1").click(function(){
    $(".part1").show(1000);
	$("#show12").show();
	$(this).hide();
  });
  $("#show2").click(function(){
    $(".part2").show(1000);
	$("#show3").show();
	$(this).hide();
  });

  $("#show3").click(function(){
    $(".part3").show(1000);
	$(this).hide();
	
  });
  $("#show4").click(function(){
    $(".part4").show(1000);
	$("#show10").show();
	$(this).hide();
  });
  $("#show5").click(function(){
    $(".part5").show(1000);
	$("#show8").show();
	$(this).hide();
  });
  $("#show6").click(function(){
    $(".part6").show(1000);
	$("#show2").show();
	$(this).hide();
  });
  $("#show7").click(function(){
    $(".part7").show(1000);
	$("#show6").show();
	$(this).hide();
  });
  $("#show8").click(function(){
    $(".part8").show(1000);
	$("#show11").show();
	$(this).hide();
  });
  $("#show9").click(function(){
    $(".part9").show(1000);
	$("#show4").show();
	$(this).hide();
  });

  $("#show10").click(function(){
    $(".part10").show(1000);
	$("#show5").show();
	$(this).hide();
  });
  $("#show11").click(function(){
    $(".part11").show(1000);
	$("#show7").show();
	$(this).hide();
  });
  $("#show12").click(function(){
    $(".part12").show(1000);
	$("#show9").show();
	$(this).hide();
  });

   $("#start").click(function(){
    $("#show1").show();
	$(this).hide();
  });

});		
					
var current_score = 150;
function myresult(form){
var input=form.answer.value.toLowerCase();
if(input == "michel jackson")
	alert ("Great, you guessed the right answer");
else
	alert ("Sorry your answer is wrong.Please try again.");
}
function score(current_score){
window.current_score -=10
if (current_score == 40)
alert ("The right answer is michel jackson");
else{
document.getElementById("score").innerHTML = "Current Score:- " + current_score; 
}
}		
			