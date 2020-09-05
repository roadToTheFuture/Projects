
let capsLockCounter = 0;

function t11(element) {

	let infoCapsLock = document.querySelector('#capsLock');

	let keyInfo = document.querySelectorAll('.key').forEach(key => {
		if (element.code == key.getAttribute('data')) {
			key.classList.add('keys_color');
		}
	});


	if (element.code == 'CapsLock' && capsLockCounter % 2 == 0) {
		infoCapsLock.classList.add('key_caps');
		capsLockCounter++;
	} else if (element.code == 'CapsLock' && capsLockCounter % 2 == 1) {
		infoCapsLock.classList.remove('key_caps');
		capsLockCounter++;
	}

	if (element.code == "Enter") {

	}
}

function t12(element) {
	let keyInfo = document.querySelectorAll('.key').forEach(key => {
		if (element.code == key.getAttribute('data')) {
			key.classList.remove('keys_color');
		}
	});
}

document.querySelector('.i-11').onkeydown = t11;
document.querySelector('.i-11').onkeyup = t12;







