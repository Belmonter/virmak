export function setHouseImg() {
	const houseOne = document.querySelector('#floor-1').dataset.floor1;
	const houseTwo = document.querySelector('#floor-2').dataset.floor2;
	const houseThree = document.querySelector('#floor-3').dataset.floor3;
	const houseFour = document.querySelector('#floor-4').dataset.floor4;
	const houseFive = document.querySelector('#floor-5').dataset.floor5;

	if (houseOne === 'true') {
    document.querySelector('.right-calculation-params__title').textContent = 'Один этаж без мансарды';
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('src', 'img/floor-1.png');
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('width', '57');
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('height', '36');
	}

	if (houseTwo === 'true') {
    document.querySelector('.right-calculation-params__title').textContent =
			'Один этаж с мансардой';
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('src', 'img/floor-2.png');
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('width', '57');
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('height', '42');
	}

  if (houseThree === 'true') {
    document.querySelector('.right-calculation-params__title').textContent =
			'Два полных этажа';
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('src', 'img/floor-3.png');
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('width', '57');
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('height', '42');
	}

  if (houseFour === 'true') {
    document.querySelector('.right-calculation-params__title').textContent =
			'Два этажа с мансардой';
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('src', 'img/floor-4.png');
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('width', '57');
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('height', '48');
	}

  if (houseFive === 'true') {
    document.querySelector('.right-calculation-params__title').textContent =
			'Три полных этажа';
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('src', 'img/floor-5.png');
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('width', '57');
		document
			.querySelector('.right-calculation-params__img img')
			.setAttribute('height', '60');
	}
}
