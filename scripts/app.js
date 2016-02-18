var canvas = $("canvas"),
context    = canvas[0].getContext("2d"),
color      = $(".selected").css("background-color")
mouseDown  = false,
lastEvent = null;

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

$("input[type=range]").change(getRGB);

function getRGB() {
	var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

$("#addNewColor").on("click", function() {
 //Get the background color on newColor
 var colorSelection = $("<li></li>");
 colorSelection.css("background-color", $("#newColor").css("background-color"));

 $("#colors").append(colorSelection);

})

canvas.mousedown(function(e){
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){
	if(mouseDown) {
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
	}
}).mouseup(function(){
	mouseDown = false;
}).mouseleave(function(){
	canvas.mouseup();
})

// //On mouse events on the canvas
// canvas.mousedown(function(e){
//   lastEvent = e;
//   mouseDown = true;
// }).mousemove(function(e){
//   //Draw lines
//   if(mouseDown) {
//     context.beginPath();
//     context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
//     context.lineTo(e.offsetX, e.offsetY);
//     context.strokeStyle = color;
//     context.stroke();
//     lastEvent = e;
//   }
// }).mouseup(function(){
//   mouseDown = false;
// }).mouseleave(function() {
//   canvas.mouseup();
// });









