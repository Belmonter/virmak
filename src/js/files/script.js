// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';
import { floorCheck } from './floorCheck.js';
import { setHouseImg } from './houseImg.js';

// flsModules.popup.open('#popup-call');

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

let inputs = document.querySelectorAll('.form-call__inp input');

inputs.forEach(el => {
	el.addEventListener('blur', function (e) {
		if (!el.value) {
			document
				.querySelectorAll('.form-call__error')
				.forEach(el => el.classList.add('error-show'));
			document
				.querySelectorAll('.form-call__btn')
				.forEach(el => el.classList.add('btn-disabled'));
		} else {
			document
				.querySelectorAll('.form-call__error')
				.forEach(el => el.classList.remove('error-show'));
			document
				.querySelectorAll('.form-call__btn')
				.forEach(el => el.classList.remove('btn-disabled'));
		}
	});
});
