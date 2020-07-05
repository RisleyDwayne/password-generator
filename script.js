const generate = document.querySelector('#generate');

const lengthCheckbox = document.querySelector('#length');
const lowercaseCheckbox = document.querySelector('#lowerBox');
const uppercaseCheckbox = document.querySelector('#upperBox');
const numberCheckbox = document.querySelector('#numbersBox');
const specialCharCheckbox = document.querySelector('#specialCharBox');

//password to text field
function writePass() {
	let password = generatePass();
	let passwordText = document.querySelector('#password');
	passwordText.value = password;
}

function generatePass() {

	//password paramaters 
	const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	const numbers = '0123456789'.split('');
	const specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split('');

	
	let passChoices = [];

	let passBuilder = [];

	let passLength = parseInt(lengthCheckbox.value);

	// add selected character types to passChoices
	if (lowerBox.checked) {
		passChoices = passChoices.concat(lower);
	}
	if (upperBox.checked) {
		passChoices = passChoices.concat(upper);
	}
	if (numbersBox.checked) {
		passChoices = passChoices.concat(numbers);
	}
	if (specialCharBox.checked) {
		passChoices = passChoices.concat(specialChar);
	}


	// Validate length
	if (passChoices.length) {
		if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
			alert('Please enter a password length between 8 and 128 characters.');
			return '';
		} else {
			
			for (let i = 0; i < passLength; i++) {
				let randChar = Math.floor(Math.random() * passChoices.length);
				passBuilder.push(passChoices[randChar]);
			}
			let password = passBuilder.join('');
			return password;
		}
	} else {
		alert('Please select character types.');
		return '';
	}
}

generate.addEventListener('click', writePass);