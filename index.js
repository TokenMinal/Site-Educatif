const select = document.getElementById('selection');
const select2 = document.getElementById('selection2');
const numbertest = document.getElementById('numbertest');
const operatortest = document.getElementById('operatortest');
const button = document.getElementById('button');
const multiple1 = document.getElementsByClassName('multiple');
const operator = document.getElementsByClassName('operator');
const menu = document.getElementById('menu');
const math = document.getElementById('math');
let check;
let checkop;
let clicked = false;
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
	else if (clicked === true) {
		let i;
		switch(x) {
		case 'i1':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '1';
			}
			break;
		case 'i2':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '2';
			}
			check = false;
			break;
		case 'i3':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '3';
			}
			check = false;
			break;
		case 'i4':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '4';
			}
			check = false;
			break;
		case 'i5':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '5';
			}
			check = false;
			break;
		case 'i6':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '6';
			}
			check = false;
			break;
		case 'i7':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '7';
			}
			check = false;
			break;
		case 'i8':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '8';
			}
			check = false;
			break;
		case 'i9':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '9';
			}
			check = false;
			break;
		case 'i10':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '10';
			}
			check = false;
			break;
		case 'i11':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '11';
			}
			check = false;
			break;
		case 'i12':
			for (i = 0; i < 12; i++) {
				multiple1[i].textContent = '12';
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
			}
			check = true;
			break;
		case 'menu':
			location.reload();
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
	console.log(y);
});