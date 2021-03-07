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
	document.getElementById('js-frontend').insertAdjacentHTML('beforeend', li);
}
let todo1 = ['jQuery', 'Ruby on Rails', 'Bootstrap'];
for(let item of todo1) {
	const li = `<li>${item}</li>`;
	document.getElementById('js-framework').insertAdjacentHTML('beforeend', li);
}
let todo2 = ['Ruby'];
for(let item of todo2) {
	const li = `<li>${item}</li>`;
	document.getElementById('js-backend').insertAdjacentHTML('beforeend', li);
}
let todo3 = ['<i class="fab fa-github"> Git/GitHub', 'Vagrant/VirtualBox', 'Slack'];
for(let item of todo3) {
	const li = `<li>${item}</li>`;
	document.getElementById('js-devops').insertAdjacentHTML('beforeend', li);
}

$(document).ready(function(){
	$('.submenu h3').on('click', function(){
		$(this).next().toggleClass('hidden');
	});
});
