
var header = document.querySelector('.nav'); 
window.addEventListener("scroll", function () {
	if (window.pageYOffset > 30) {
		header.classList.add('shadow');
	}
	else {
		header.classList.remove('shadow');
	}
});

var condition = document.querySelector('.condition');
var span = document.querySelector('.rot')
var hidden = document.querySelector('.hidden');
var hidden1 = document.querySelector('.hidden1');
var hidden2 = document.querySelector('.hidden2');
var hidden3 = document.querySelector('.hidden3');

function yellb(){
    hidden.classList.toggle('glp');
    span.style.trnasform = "rotate(45deg)";
};
function yellb1(){
    hidden1.classList.toggle('glp');

};
function yellb2(){
    hidden2.classList.toggle('glp');

};
function yellb3(){
    hidden3.classList.toggle('glp');

};


window.sr = ScrollReveal();

sr.reveal('.animate-top',{
	origin: 'top',
	duration: 500,
	distance: '1rem',

});

window.addEventListener('scroll', function(){
	if(window.pageYOffset > 150){
		var time = 300;
$('.number').each(function(){
		var i = 0,
		num = $(this).data('num'),
		step =  time,
		that = $(this),
		int = setInterval(function(){
			if (i <= num) {
				that.html(i);
			}
			else{
				clearInterval(int);
			}
			i++;
		}),step;
	});
	}
	else{
		var time = 0;
	}
})

var modal = document.getElementsByClassName('hidden_form');
var btnn = document.getElementsByClassName('btn');
var span = document.getElementsByClassName('close_but');

console.log(btnn);
btnn.forEach(item=> item.onclick = function(){
	modal.style.display = "block";
})
span.forEach(item=> item.onclick = function(){
	modal.style.display = "none";
	console.log('span' + item);
});
console.log('span' + item);
window.onclick = function(event){
	if (event.target == modal) {
		modal.style.display = "none";
	}
}




$('.part').hover(
	function (){
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function (){
		$('.description').fadeOut(30);
	}
)

$('.nm_cont').hover(
	function (){
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function (){
		$('.description').fadeOut(30);
	}
)


var hidden_btn = document.querySelector('.hideen_btn');
var p_hidden = document.querySelector('.p_hideen');

hidden_btn.addEventListener('click',function(){
	p_hidden.classList.toggle('hidennn');
});


var countr_btn = document.querySelector('.coon');
var countr_hidden = document.querySelector('.country_section');

countr_btn.addEventListener('click',function(){
	countr_hidden.classList.toggle('hidennn');
});


var size = +document.getElementById('volume').dataset.size;
console.log(size);
function outputUpdate(vol){ 
	var fader = document.getElementById('fader');
	var output = document.querySelector('#volume');
	var inventions = document.querySelector('.inventions');
	var invention1 = document.querySelector('.invention1');
	output.value = vol;
	output.style.left = size + 'px';
	size += output; 
	inventions.innerText = +inventions.innerText + ((+fader.value / 100) + 100);
}




$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

const selectElement = function(element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});
