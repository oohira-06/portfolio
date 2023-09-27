// JavaScript Document
'use strict';


function total(price) {
	const tax = 0.1;
	return price + price * tax;
}

document.getElementById('output').textContent = total(8000) + '円(税込)';
document.getElementById('output2').textContent = total(16000) + '円(税込)';
document.getElementById('output3').textContent = total(19000) + '円(税込)';
document.getElementById('output4').textContent = total(19000) + '円(税込)';
document.getElementById('output5').textContent = total(35000) + '円(税込)';




	