var canvas = document.getElementsByTagName("canvas")[0];
var context = canvas.getContext("2d");
//When clicking on control list items
$("#colors").on("click", "li", function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");

	//Select clicked element
	$(this).addClass("selected");

	//cache current color

})

