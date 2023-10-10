'use strict';
{
	let n = 0;

	const heart = document.getElementById('click');
	const counter = document.getElementById('counter');

	heart.addEventListener('click', () => {
		n++;
		counter.textContent = n;
	});
}

{
	let n = 0;

	const heart = document.getElementById('click2');
	const counter = document.getElementById('counter2');

	heart.addEventListener('click', () => {
		n++;
		counter.textContent = n;
	});
}

{
	let n = 0;

	const heart = document.getElementById('click3');
	const counter = document.getElementById('counter3');

	heart.addEventListener('click', () => {
		n++;
		counter.textContent = n;
	});
}
