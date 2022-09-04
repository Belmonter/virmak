// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

flsModules.popup.open('#popup-calculator');

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
