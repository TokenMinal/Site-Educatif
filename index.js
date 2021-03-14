window.onload = function() {
	const cringe2 = localStorage.getItem('cringe');
	score2.textContent = cringe2;
};
const div = document.getElementsByClassName('wacky');
const select = document.getElementById('selection');
const select2 = document.getElementById('selection2');
const numbertest = document.getElementById('numbertest');
const operatortest = document.getElementById('operatortest');
const button = document.getElementById('button');
const multiple1 = document.getElementsByClassName('multiple');
const multiple2 = document.getElementsByClassName('multiple2');
const operator = document.getElementsByClassName('operator');
const menu = document.getElementById('menu');
const math = document.getElementById('math');
const button2 = document.getElementById('cringe');
const button3 = document.getElementById('button3');
const input = document.getElementsByClassName('input');
const score2 = document.getElementById('score');
const button4 = document.getElementById('button4');
let score = parseInt(localStorage.getItem('cringe'));
let check;
let checkop;
let clicked = false;
function checkvalue(input1, input2, i) {
	if (input1 == input2) {
		div[i].style.backgroundColor = 'green';
		score += 1;
		localStorage.setItem('cringe', score);
	}
	else{
		div[i].style.backgroundColor = 'red';
	}
}
function wackynumber(num1, op, num2) {
	switch(op) {
	case ' + ':
		return parseInt(num1) + parseInt(num2);
	case ' - ':
		return parseInt(num1) - parseInt(num2);
	case ' x ':
		return parseInt(num1) * parseInt(num2);
	case ' ÷ ':
		return parseInt(num1) / parseInt(num2);
	}
}
select.addEventListener('click', function() {
	const x = document.getElementById('selection').value;
	if (clicked === false) {
		switch(x) {
		case 'i1':
			numbertest.textContent = '1';
			check = false;
			break;
		case 'i2':
			numbertest.textContent = '2';
			check = false;
			break;
		case 'i3':
			numbertest.textContent = '3';
			check = false;
			break;
		case 'i4':
			numbertest.textContent = '4';
			check = false;
			break;
		case 'i5':
			numbertest.textContent = '5';
			check = false;
			break;
		case 'i6':
			numbertest.textContent = '6';
			check = false;
			break;
		case 'i7':
			numbertest.textContent = '7';
			check = false;
			break;
		case 'i8':
			numbertest.textContent = '8';
			check = false;
			break;
		case 'i9':
			numbertest.textContent = '9';
			check = false;
			break;
		case 'i10':
			numbertest.textContent = '10';
			check = false;
			break;
		case 'i11':
			numbertest.textContent = '11';
			check = false;
			break;
		case 'i12':
			numbertest.textContent = '12';
			check = false;
			break;
		case 'random':
			if (check == true) {
				check = false;
				break;
			}
			numbertest.textContent = Math.floor(Math.random() * 12) + 1;
			check = true;
			break;
		default:
			numbertest.textContent = ' aucun choisi';
		}
	}
	else if (clicked === true && document.getElementById('selection2').value !== '÷' && document.getElementById('selection2').value !== '-') {
		let i;
		switch(x) {
		case 'i1':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '1';
				multiple2[i].textContent = i + 1;
			}
			break;
		case 'i2':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '2';
				multiple2[i].textContent = i + 1;
			}
			check = false;
			break;
		case 'i3':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '3';
				multiple2[i].textContent = i + 1;
			}
			check = false;
			break;
		case 'i4':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '4';
				multiple2[i].textContent = i + 1;
			}
			check = false;
			break;
		case 'i5':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '5';
				multiple2[i].textContent = i + 1;
			}
			check = false;
			break;
		case 'i6':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '6';
				multiple2[i].textContent = i + 1;
			}
			check = false;
			break;
		case 'i7':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '7';
				multiple2[i].textContent = i + 1;
			}
			check = false;
			break;
		case 'i8':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '8';
				multiple2[i].textContent = i + 1;
			}
			check = false;
			break;
		case 'i9':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '9';
				multiple2[i].textContent = i + 1;
			}
			check = false;
			break;
		case 'i10':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '10';
				multiple2[i].textContent = i + 1;
			}
			check = false;
			break;
		case 'i11':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '11';
				multiple2[i].textContent = i + 1;
			}
			check = false;
			break;
		case 'i12':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '12';
				multiple2[i].textContent = i + 1;
			}
			check = false;
			break;
		case 'random':
			if (check == true) {
				check = false;
				break;
			}
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = Math.floor(Math.random() * 12) + 1;
				multiple2[i].textContent = i + 1;
			}
			check = true;
			break;
		}
	}
	else if (clicked === true && document.getElementById('selection2').value === '÷') {
		let i;
		switch(x) {
		case 'i1':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = (i + 1) * 1;
			}
			break;
		case 'i2':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = (i + 1) * 2;
			}
			check = false;
			break;
		case 'i3':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = (i + 1) * 3;
			}
			check = false;
			break;
		case 'i4':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = (i + 1) * 4;
			}
			check = false;
			break;
		case 'i5':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = (i + 1) * 5;
			}
			check = false;
			break;
		case 'i6':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = (i + 1) * 6;
			}
			check = false;
			break;
		case 'i7':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = (i + 1) * 7;
			}
			check = false;
			break;
		case 'i8':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = (i + 1) * 8;
			}
			check = false;
			break;
		case 'i9':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = (i + 1) * 9;
			}
			check = false;
			break;
		case 'i10':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = (i + 1) * 10;
			}
			check = false;
			break;
		case 'i11':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = (i + 1) * 11;
			}
			check = false;
			break;
		case 'i12':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = (i + 1) * 12;
			}
			check = false;
			break;
		case 'random':
			if (check == true) {
				check = false;
				break;
			}
			for (i = 0; i < 12; i++) {
				const w = Math.floor(Math.random() * 12) + 1;
				multiple1[i].textContent = (i + 1) * w;
				multiple2[i].textContent = w;
			}
			check = true;
			break;
		}
	}
	else if (clicked === true && document.getElementById('selection2').value === '-') {
		let i;
		switch(x) {
		case 'i1':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = i + 1;
				multiple2[i].textContent = '1';
			}
			break;
		case 'i2':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = i + 3;
				multiple2[i].textContent = '2';
			}
			check = false;
			break;
		case 'i3':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = i + 4;
				multiple2[i].textContent = '3';
			}
			check = false;
			break;
		case 'i4':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = i + 5;
				multiple2[i].textContent = '4';
			}
			check = false;
			break;
		case 'i5':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = i + 6;
				multiple2[i].textContent = '5';
			}
			check = false;
			break;
		case 'i6':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = i + 7;
				multiple2[i].textContent = '6';
			}
			check = false;
			break;
		case 'i7':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = i + 8;
				multiple2[i].textContent = '7';
			}
			check = false;
			break;
		case 'i8':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = i + 9;
				multiple2[i].textContent = '8';
			}
			check = false;
			break;
		case 'i9':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = i + 10;
				multiple2[i].textContent = '9';
			}
			check = false;
			break;
		case 'i10':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = i + 11;
				multiple2[i].textContent = '10';
			}
			check = false;
			break;
		case 'i11':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = i + 12;
				multiple2[i].textContent = '11';
			}
			check = false;
			break;
		case 'i12':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = i + 13;
				multiple2[i].textContent = '12';
			}
			check = false;
			break;
		case 'random':
			if (check == true) {
				check = false;
				break;
			}
			for (i = 0; i < 12; i++) {
				const kek = Math.floor(Math.random() * 12) + 1;
				multiple1[i].textContent = i + kek;
				multiple2[i].textContent = kek;
			}
			check = true;
			break;
		}
	}
});
select2.addEventListener('click', function() {
	const x = document.getElementById('selection2').value;
	const y = Math.floor(Math.random() * 4) + 1;
	let i;
	if (clicked === false) {
		switch(x) {
		case '+':
			operatortest.textContent = '+';
			break;
		case '-':
			operatortest.textContent = '-';
			break;
		case 'x':
			operatortest.textContent = 'x';
			break;
		case '÷':
			operatortest.textContent = '÷';
			break;
		case 'random':
			if (y == 1) {
				if (checkop == true) {
					checkop = false;
					break;
				}
				operatortest.textContent = '+';
				checkop = true;
			}
			else if (y == 2) {
				if (checkop == true) {
					checkop = false;
					break;
				}
				operatortest.textContent = '-';
				checkop = true;
			}
			else if (y == 3) {
				if (checkop == true) {
					checkop = false;
					break;
				}
				operatortest.textContent = 'x';
				checkop = true;
			}
			else if (y == 4) {
				if (checkop == true) {
					checkop = false;
					break;
				}
				operatortest.textContent = '÷';
				checkop = true;
			}
			break;
		default:
			operatortest.textContent = ' Aucun choisi';
		}
	}
	else if (clicked === true) {
		switch(x) {
		case '+':
			for (i = 0; i < 12; i++) {
				operator[i].textContent = ' + ';
			}
			break;
		case '-':
			for (i = 0; i < 12; i++) {
				operator[i].textContent = ' - ';
			}
			break;
		case 'x':
			for (i = 0; i < 12; i++) {
				operator[i].textContent = ' x ';
			}
			break;
		case '÷':
			for (i = 0; i < 12; i++) {
				operator[i].textContent = ' ÷ ';
			}
			break;
		case 'random':
			if (y == 1) {
				if (checkop == true) {
					checkop = false;
					break;
				}
				for (i = 0; i < 12; i++) {
					operator[i].textContent = ' + ';
				}
				checkop = true;
			}
			else if (y == 2) {
				if (checkop == true) {
					checkop = false;
					break;
				}
				for (i = 0; i < 12; i++) {
					operator[i].textContent = ' - ';
				}
				checkop = true;
			}
			else if (y == 3) {
				if (checkop == true) {
					checkop = false;
					break;
				}
				for (i = 0; i < 12; i++) {
					operator[i].textContent = ' x ';
				}
				checkop = true;
			}
			else if (y == 4) {
				if (checkop == true) {
					checkop = false;
					break;
				}
				for (i = 0; i < 12; i++) {
					operator[i].textContent = ' ÷ ';
				}
				checkop = true;
			}
			break;
		default:
			operatortest.textContent = ' Aucun choisi';
		}
	}
});
button.addEventListener('click', function() {
	clicked = true;
	select.selectedIndex = 2;
	select2.selectedIndex = 0;
	menu.style.display = 'none';
	math.style.display = 'inline';
	document.getElementById('class').style.paddingBottom = '20px';
});
button2.addEventListener('click', function() {
	let i;
	for (i = 0; i < 12; i++) {
		checkvalue(wackynumber(multiple1[i].innerText, operator[i].innerText, multiple2[i].innerText), input[i].value, i);
	}
	alert(score);
	const cringe2 = localStorage.getItem('cringe');
	score2.textContent = cringe2;
});
button3.addEventListener('click', function() {
	localStorage.setItem('cringe', 0);
	score2.textContent = 0;
});
button4.addEventListener('click', function() {
	location.reload();
})