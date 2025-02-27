/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import '../scss/base/swiper.scss';

// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів

function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector('.about__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper('.about__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 0,
      //autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація

      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"

      navigation: {
        prevEl: '.about__arrow--left',
        nextEl: '.about__arrow--right',
      },
      // Брейкпоінти
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        640: {
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
        // 1268: {
        //   slidesPerView: 4,
        //   spaceBetween: 30,
        // },
      },

      // Події
      on: {},
    });
  }
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector('.swiper-scrollbar');
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
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

// Слайдер для відгуків ==========================================

function initReviewSlider() {
  // Проверяем, есть ли на странице блок с отзывами
  if (document.querySelector('.reviews__slider')) {
    new Swiper('.reviews__slider', {
      modules: [Navigation, Pagination], // Используем модули
      observer: true,
      observeParents: true,
      slidesPerView: 1, // Показываем только 1 отзыв за раз
      spaceBetween: 20, // Отступ между слайдами
      speed: 800, // Скорость перелистывания
      loop: true,
      navigation: {
        prevEl: '.reviews__arrow--left', // Кнопка "назад"
        nextEl: '.reviews__arrow--right', // Кнопка "вперед"
      },

      pagination: {
        el: '.reviews__pagination',
        clickable: true,
        type: 'bullets',
        dynamicBullets: false,
      },

      // Адаптивные настройки
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
}

// Добавляем запуск при загрузке страницы

window.addEventListener('load', function () {
  initSliders(); // Запуск слайдера сертификатов
  initReviewSlider(); // Запуск слайдера отзывов
  //initSlidersScroll();
});