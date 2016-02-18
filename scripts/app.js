var canvas = document.getElementsByTagName("canvas")[0],
context    = canvas.getContext("2d"),
color;

//When clicking on control list items
$("#colors").on("click", "li", function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//Select clicked element
	$(this).addClass("selected");
	//cache current color
	color = $(this).css("background-color");
})

$("#toggleNewColor").on("click", function() {
	$("#colorSelect").toggle();
})

$("input[type=range]").change(function() {
	var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  color = $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
})

$("#addNewColor").on("click", function() {
 //Get the background color on newColor
 var colorSelection = $("<li></li>");
 colorSelection.css("background-color", color.css("background-color"));

 $("#colors").append(colorSelection);
})