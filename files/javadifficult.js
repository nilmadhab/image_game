$(document).ready(function(){
   $("#start").click(function(){
    $("#show1").show();
	$(this).hide();
  });

  $("#show1").click(function(){
	$("#show13").show();
    $(".part1").show(1000);
	$(this).hide();
  });
    $("#show2").click(function(){
	$("#show15").show();
    $(".part2").show(1000);
	$(this).hide();
  });  
  $("#show3").click(function(){
	$("#show12").show();
    $(".part3").show(1000);
	$(this).hide();
  });
   $("#show4").click(function(){
   $("#show3").show();
    $(".part4").show(1000);
	$(this).hide();
  });
    $("#show5").click(function(){
	$("#show10").show();
    $(".part5").show(1000);
	$(this).hide();
  });
    $("#show6").click(function(){
	$("#show14").show();
    $(".part6").show(1000);
	$(this).hide();
  });
    $("#show7").click(function(){
	$("#show5").show();
    $(".part7").show(1000);
	$(this).hide();
  });
    $("#show8").click(function(){
    $(".part8").show(1000);
	$(this).hide();
  });
    $("#show9").click(function(){
	$("#show4").show();
    $(".part9").show(1000);
	$(this).hide();
  });
    $("#show10").click(function(){
	$("#show11").show();
    $(".part10").show(1000);
	$(this).hide();
  });
    $("#show11").click(function(){
    $(".part11").show(1000);
	$(this).hide();
  });
    $("#show12").click(function(){
	$("#show2").show();
    $(".part12").show(1000);
	$(this).hide();
  });
    $("#show13").click(function(){
	$("#show16").show();
    $(".part13").show(1000);
	$(this).hide();
  });
    $("#show14").click(function(){
	$("#show9").show();
    $(".part14").show(1000);
	$(this).hide();
  });

    $("#show15").click(function(){
	$("#show7").show();
    $(".part15").show(1000);
	$(this).hide();
  });
    $("#show16").click(function(){
	$("#show6").show();
    $(".part16").show(1000);
	$(this).hide();
  });
 });
 var current_score = 160;
function myresult(form){
var input=form.answer.value.toLowerCase();
if(input == "katrina kaif")
	alert ("Great, you guessed the right answer");
else
	{
	if(input == "katrina")
	alert ("Great, you guessed the right answer");
	else
	alert ("Sorry your answer is wrong.Please try again.");
	}
}
function score(current_score){
window.current_score -=10
if (current_score == 20)
alert ("The right answer is the beauty,Katrina Kaif.");
else{
document.getElementById("score").innerHTML = "Current Score:- " + current_score; 
}
}	