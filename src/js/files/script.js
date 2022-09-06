// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';
import { floorCheck } from './floorCheck.js';
import { setHouseImg } from './houseImg.js';

flsModules.popup.open('#popup-call');

// Развернуть, свернуть таблицу

let collapseBtn = document.querySelector('.table-popup__expand');
let tableBlock = document.querySelector('.table-popup__wrapper');

collapseBtn.addEventListener('click', function (e) {
	if (tableBlock.classList.contains('table-hide')) {
		tableBlock.classList.add('table-show');
		collapseBtn
			.querySelector('.expand-table__arrow')
			.classList.remove('arrow-down');
		tableBlock.classList.remove('table-hide');
		collapseBtn.querySelector('.expand-table__text').textContent =
			'Свернуть комплектацию';
		collapseBtn.classList.remove('expand-blur');
	} else {
		tableBlock.classList.add('table-hide');
		tableBlock.classList.remove('table-show');
		collapseBtn
			.querySelector('.expand-table__arrow')
			.classList.add('arrow-down');
		collapseBtn.querySelector('.expand-table__text').textContent =
			'Развернуть комплектацию';
		collapseBtn.classList.add('expand-blur');
	}
});

// Выбор этажа в калькуляторе

document.addEventListener('click', function (e) {
	let target = e.target;
	floorCheck(target);
});

document
	.querySelector('.total-calculator__continue')
	.addEventListener('click', function (e) {
		setHouseImg();
	});

// Отображение текста ошибки при валидации формы

let callNameInp = document.querySelector('#call-phone');
let callPhoneInp = document.querySelector('#call-phone');
let callButton = document.querySelector('#call-button');
let callError = document.querySelector('#call-error');
let getProjectNameInp = document.querySelector('#getProject-name');
let getProjectPhoneInp = document.querySelector('#getProject-phone');
let getProjectButton = document.querySelector('#getProject-button');
let getProjectError = document.querySelector('#getProject-error');
let estimateNameInp = document.querySelector('#estimate-name');
let estimatePhoneInp = document.querySelector('#estimate-phone');
let estimateButton = document.querySelector('#estimate-button');
let estimateError = document.querySelector('#estimate-error');
let creditNameInp = document.querySelector('#credit-name');
let creditPhoneInp = document.querySelector('#credit-phone');
let creditButton = document.querySelector('#credit-button');
let creditError = document.querySelector('#credit-error');

document.addEventListener('input', function (e) {
	if (callNameInp.value && callPhoneInp.value) {
		callError.classList.remove('error-show');
		callButton.classList.remove('btn-disabled');
	} else if (!callNameInp.value || !callPhoneInp.value) {
		callError.classList.add('error-show');
		callButton.classList.add('btn-disabled');
	}

  if (getProjectNameInp.value && getProjectPhoneInp.value) {
		getProjectError.classList.remove('error-show');
		getProjectButton.classList.remove('btn-disabled');
	} else if (!getProjectNameInp.value || !getProjectPhoneInp.value) {
		getProjectError.classList.add('error-show');
		getProjectButton.classList.add('btn-disabled');
	}

  if (estimateNameInp.value && estimatePhoneInp.value) {
		estimateError.classList.remove('error-show');
		estimateButton.classList.remove('btn-disabled');
	} else if (!estimateNameInp.value || !estimatePhoneInp.value) {
		estimateError.classList.add('error-show');
		estimateButton.classList.add('btn-disabled');
	}

  if (creditNameInp.value && creditPhoneInp.value) {
		creditError.classList.remove('error-show');
		creditButton.classList.remove('btn-disabled');
	} else if (!creditNameInp.value || !creditPhoneInp.value) {
		creditError.classList.add('error-show');
		creditButton.classList.add('btn-disabled');
	}

});
