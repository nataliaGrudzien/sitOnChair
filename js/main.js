document.addEventListener("DOMContentLoaded", function() {


//menu w nawigacji
var nav_menu = document.querySelectorAll("nav > ul > li");

for (var item of nav_menu) {
	item.addEventListener("mouseover", function(){
		if (this.children[1] !== undefined) {
			this.children[1].style.display = "block"
		}
	});

	item.addEventListener("mouseout", function(){
		if (this.children[1] !== undefined) {
			this.children[1].style.display = "none"
		}
	})
}
// slider
var prevPicture = document.getElementById('prevPicture');
var nextPicture = document.getElementById("nextPicture");
var li_elements = document.querySelectorAll(".slider > div> ul > li");

var pic_index = 0;

li_elements[pic_index].classList.add("visible")

var moveSlideLeft = function() {
	console.log("Prev")
	li_elements[pic_index].classList.remove("visible");
	pic_index--;
	if (pic_index<0) {
		pic_index=li_elements.length-1
	} 
	li_elements[pic_index].classList.add("visible")
}

var moveSlideRight = function() {
	
	li_elements[pic_index].classList.remove("visible")
	pic_index++;
	if (pic_index>li_elements.length-1) {
		pic_index=0
	} 
	li_elements[pic_index].classList.add("visible")
}

prevPicture.addEventListener("click", moveSlideLeft);
nextPicture.addEventListener("click", moveSlideRight);
setInterval(moveSlideRight, 5000);
clearInterval(1);





// hover nad boxem z cennikiem
var priceListBox = document.querySelectorAll("div .box");

	for(var item of priceListBox) {
		item.addEventListener("mouseover", function() {
			this.classList.add("box2")
	});

		item.addEventListener("mouseout", function () {
		this.classList.remove("box2")
	});
}




});