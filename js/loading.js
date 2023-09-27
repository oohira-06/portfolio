'use strict';


const loading = document.querySelector('.loading_box');

window.addEventListener('load', () => {
	setTimeout(function() {
		loading.classList.add('hide');
	}, 1000);
});


