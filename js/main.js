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
	li_elements[pic_index].classList.remove("visible");
	li_elements[pic_index].style.left = "-1000px";
	
	pic_index--;
	if (pic_index<0) {
		pic_index=li_elements.length-1
	} 
	li_elements[pic_index].style.left = "0";
	li_elements[pic_index].classList.add("visible");
}

var moveSlideRight = function() {
	li_elements[pic_index].classList.remove("visible");
	li_elements[pic_index].style.left = "-1000px";
	
	pic_index++;
	if (pic_index>li_elements.length-1) {
		pic_index=0
	} 
	li_elements[pic_index].style.left = "0";
	li_elements[pic_index].classList.add("visible");
}

prevPicture.addEventListener("click", moveSlideLeft);
nextPicture.addEventListener("click", moveSlideRight);
// setInterval(moveSlideRight, 5000);
// clearInterval(1);

//shopwindow

var popup = document.querySelectorAll(".popup");

for(var item of popup) {
	item.addEventListener("mouseover", function() {
		this.style.opacity = 0;
	});
	item.addEventListener("mouseout", function() {
		this.style.opacity = 1;
	});
}



// hover nad boxem z cennikiem
var priceListBox = document.querySelectorAll("div .box");

	for(var item of priceListBox) {
		item.addEventListener("mouseover", function() {
			this.classList.add("box2");
			this.style.opacity = 1;
	});

		item.addEventListener("mouseout", function () {
		this.classList.remove("box2");

	});
}

//calculator

//list_arrow

var arrows = document.querySelectorAll(".list_arrow");

for (var item of arrows) {
	item.addEventListener("click", function(){
		if (this.nextElementSibling.style.display == "block") {
			this.nextElementSibling.style.display = "none";
		} else {
			this.nextElementSibling.style.display = "block";
		}
	});
}

var choices = document.querySelectorAll(".list_panel > li");
var sum = 0;
var total = 0;
var order = document.querySelector(".sum");

for (var item of choices) {
	item.addEventListener("click", function(){
		var title = document.querySelector(".title");
		var color = document.querySelector(".color");
		var pattern = document.querySelector(".pattern");
		var title_value = document.querySelector(".title.value");
		var color_value = document.querySelector(".color.value");
		var pattern_value = document.querySelector(".pattern.value");
		
		if(this.innerText == "Clair" || this.innerText == "Margarita" || this.innerText == "Selena") {
			title.innerText = this.innerText;
			this.parentElement.parentElement.firstChild.nextElementSibling.innerText = this.innerText;
			title_value.innerText = this.dataset.price;
		}

		if(this.innerText == "Czerwony" || this.innerText == "Czarny" || this.innerText == "Pomarańczowy") {
			color.innerText = this.innerText;
			this.parentElement.parentElement.firstChild.nextElementSibling.innerText = this.innerText;
			color_value.innerText = this.dataset.price;
		}

		if(this.innerText == "Tkanina" || this.innerText == "Skóra") {
			pattern.innerText = this.innerText;
			this.parentElement.parentElement.firstChild.nextElementSibling.innerText = this.innerText;
			pattern_value.innerText = this.dataset.price;
		}

		sum = Number(title_value.innerText)+Number(color_value.innerText)+Number(pattern_value.innerText);
		order.innerText = sum + total + " zł";
		this.parentElement.style.display = "none";
	});
}

	var transport = document.querySelector(".transport");
	var transport_value = document.querySelector(".transport.value");
	var transport_checkbox = document.getElementById("transport");
	transport_checkbox.addEventListener("change", function trans_calc(){
		if (transport_checkbox.checked == true) {
			transport.innerText = "Transport";
			transport_value.innerText = transport_checkbox.dataset.price;
			
			total += Number(transport_checkbox.dataset.price);
			
		} else {
			transport.innerText = "";
			transport_value.innerText = "";
			
			total -= Number(transport_checkbox.dataset.price);
		}
		order.innerText = sum + total + " zł";
	});

});