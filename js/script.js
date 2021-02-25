'use strict'

$(function() {

    $('#back a').on('click',function() {
        $('body, html').animate( {
            scrollTop:0
        }, 800);
            event.preventDefault();
    });

});

$(function() {
	$('.js-btn').on('click',function() {
		$('.menu , .btn-line').toggleClass('open');
	})
});

let todo = ['<i class="fab fa-html5"> HTML5', '<i class="fab fa-css3-alt"> CSS', '<i class="fab fa-js"> JavaScript'];
for(let item of todo) {
	const li = `<li>${item}</li>`;
	document.getElementById('front-end').insertAdjacentHTML('beforeend', li);
}

let todo1 = ['jQuery', 'Ruby on Rails'];
for(let item of todo1) {
	const li = `<li>${item}</li>`;
	document.getElementById('framework').insertAdjacentHTML('beforeend', li);
}

let todo2 = ['Ruby'];
for(let item of todo2) {
	const li = `<li>${item}</li>`;
	document.getElementById('backend').insertAdjacentHTML('beforeend', li);
}

let todo3 = ['<i class="fab fa-github"> Git/GitHub'];
for(let item of todo3) {
	const li = `<li>${item}</li>`;
	document.getElementById('devops').insertAdjacentHTML('beforeend', li);
}
