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