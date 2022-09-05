export function floorCheck(target) {
	if (target.dataset.floor1 === 'false') {
		target.setAttribute('src', 'img/floor-1.png');
		target.dataset.floor1 = 'true';
		document
			.querySelector('[data-floor2]')
			.setAttribute('src', 'img/floor-2_2.png');
		document
			.querySelector('[data-floor2]')
			.setAttribute('data-floor2', 'false');
		document
			.querySelector('[data-floor3]')
			.setAttribute('src', 'img/floor-3_3.png');
		document
			.querySelector('[data-floor3]')
			.setAttribute('data-floor3', 'false');
		document
			.querySelector('[data-floor4]')
			.setAttribute('src', 'img/floor-4_4.png');
		document
			.querySelector('[data-floor4]')
			.setAttribute('data-floor4', 'false');
		document
			.querySelector('[data-floor5]')
			.setAttribute('src', 'img/floor-5_5.png');
		document
			.querySelector('[data-floor5]')
			.setAttribute('data-floor5', 'false');
	} else if (target.dataset.floor1 === 'true') {
		target.setAttribute('src', 'img/floor-1_1.png');
		target.dataset.floor1 = 'false';
	}

	if (target.dataset.floor2 === 'false') {
		target.setAttribute('src', 'img/floor-2.png');
		target.dataset.floor2 = 'true';
		document
			.querySelector('[data-floor1]')
			.setAttribute('src', 'img/floor-1_1.png');
		document
			.querySelector('[data-floor1]')
			.setAttribute('data-floor1', 'false');
		document
			.querySelector('[data-floor3]')
			.setAttribute('src', 'img/floor-3_3.png');
		document
			.querySelector('[data-floor3]')
			.setAttribute('data-floor3', 'false');
		document
			.querySelector('[data-floor4]')
			.setAttribute('src', 'img/floor-4_4.png');
		document
			.querySelector('[data-floor4]')
			.setAttribute('data-floor4', 'false');
		document
			.querySelector('[data-floor5]')
			.setAttribute('src', 'img/floor-5_5.png');
		document
			.querySelector('[data-floor5]')
			.setAttribute('data-floor5', 'false');
	} else if (target.dataset.floor2 === 'true') {
		target.setAttribute('src', 'img/floor-2_2.png');
		target.dataset.floor2 = 'false';
	}

	if (target.dataset.floor3 === 'false') {
		target.setAttribute('src', 'img/floor-3.png');
		target.dataset.floor3 = 'true';
		document
			.querySelector('[data-floor1]')
			.setAttribute('src', 'img/floor-1_1.png');
		document
			.querySelector('[data-floor1]')
			.setAttribute('data-floor1', 'false');
		document
			.querySelector('[data-floor2]')
			.setAttribute('src', 'img/floor-2_2.png');
		document
			.querySelector('[data-floor2]')
			.setAttribute('data-floor2', 'false');
		document
			.querySelector('[data-floor4]')
			.setAttribute('src', 'img/floor-4_4.png');
		document
			.querySelector('[data-floor4]')
			.setAttribute('data-floor4', 'false');
		document
			.querySelector('[data-floor5]')
			.setAttribute('src', 'img/floor-5_5.png');
		document
			.querySelector('[data-floor5]')
			.setAttribute('data-floor5', 'false');
	} else if (target.dataset.floor3 === 'true') {
		target.setAttribute('src', 'img/floor-3_3.png');
		target.dataset.floor3 = 'false';
	}

	if (target.dataset.floor4 === 'false') {
		target.setAttribute('src', 'img/floor-4.png');
		target.dataset.floor4 = 'true';
		document
			.querySelector('[data-floor1]')
			.setAttribute('src', 'img/floor-1_1.png');
		document
			.querySelector('[data-floor1]')
			.setAttribute('data-floor1', 'false');
		document
			.querySelector('[data-floor2]')
			.setAttribute('src', 'img/floor-2_2.png');
		document
			.querySelector('[data-floor2]')
			.setAttribute('data-floor2', 'false');
		document
			.querySelector('[data-floor3]')
			.setAttribute('src', 'img/floor-3_3.png');
		document
			.querySelector('[data-floor3]')
			.setAttribute('data-floor3', 'false');
		document
			.querySelector('[data-floor5]')
			.setAttribute('src', 'img/floor-5_5.png');
		document
			.querySelector('[data-floor5]')
			.setAttribute('data-floor5', 'false');
	} else if (target.dataset.floor4 === 'true') {
		target.setAttribute('src', 'img/floor-4_4.png');
		target.dataset.floor4 = 'false';
	}

	if (target.dataset.floor5 === 'false') {
		target.setAttribute('src', 'img/floor-5.png');
		target.dataset.floor5 = 'true';
		document
			.querySelector('[data-floor1]')
			.setAttribute('src', 'img/floor-1_1.png');
		document
			.querySelector('[data-floor1]')
			.setAttribute('data-floor1', 'false');
		document
			.querySelector('[data-floor2]')
			.setAttribute('src', 'img/floor-2_2.png');
		document
			.querySelector('[data-floor2]')
			.setAttribute('data-floor2', 'false');
		document
			.querySelector('[data-floor3]')
			.setAttribute('src', 'img/floor-3_3.png');
		document
			.querySelector('[data-floor3]')
			.setAttribute('data-floor3', 'false');
		document
			.querySelector('[data-floor4]')
			.setAttribute('src', 'img/floor-4_4.png');
		document
			.querySelector('[data-floor4]')
			.setAttribute('data-floor4', 'false');
	} else if (target.dataset.floor5 === 'true') {
		target.setAttribute('src', 'img/floor-5_5.png');
		target.dataset.floor5 = 'false';
	}
}
