
import Swiper, { Navigation, Grid } from 'swiper';

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

function initSliders() {
	if (document.querySelector('.projects__slider')) {
		new Swiper('.projects__slider', {
			modules: [Navigation, Grid],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
			slidesPerView: 3,
      slidesPerGroup: 3,
			grid: {
				rows: 3,
				fill: 'row',
			},
			navigation: {
				nextEl: '.project-slide-right',
				prevEl: '.project-slide-left',
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {},
		});
	}

  if (document.querySelector('.credit__slider')) {
		new Swiper('.credit__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
			slidesPerView: 3,
			centerInsufficientSlides: true,
			navigation: {
				nextEl: '.credit__slide-right',
				prevEl: '.credit__slide-left',
			},
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {},
		});
	}

  if (document.querySelector('.video__slider')) {
		new Swiper('.video__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
      watchOverflow: true,
			slidesPerView: 3,
			centerInsufficientSlides: true,
			navigation: {
				nextEl: '.video-slider-arrow-right',
				prevEl: '.video-slider-arrow-left',
			},
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});