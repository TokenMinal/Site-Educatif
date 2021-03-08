const select = document.getElementById('selection');
const select2 = document.getElementById('selection2');
const numbertest = document.getElementById('numbertest');
const operatortest = document.getElementById('operatortest');
let check;
let checkop;
select.addEventListener('click', function() {
	const x = document.getElementById('selection').value;
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
});
select2.addEventListener('click', function() {
	const x = document.getElementById('selection2').value;
	const y = Math.floor(Math.random() * 4) + 1;
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
		}
		else if (y == 2) {
			if (checkop == true) {
				checkop = false;
				break;
			}
			operatortest.textContent = '-';
		}
		else if (y == 3) {
			if (checkop == true) {
				checkop = false;
				break;
			}
			operatortest.textContent = 'x';
		}
		else if (y == 4) {
			if (checkop == true) {
				checkop = false;
				break;
			}
			operatortest.textContent = '÷';
		}
		break;
	default:
		operatortest.textContent = ' Aucun choisi';
	}
});