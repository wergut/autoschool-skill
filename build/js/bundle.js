/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

class ItcTabs {
  constructor(target, config) {
    const defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
    this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
    this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
    this._eventShow = new Event('tab.itc.change');
    this._init();
    this._events();
  }
  _init() {
    this._elTabs.setAttribute('role', 'tablist');
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute('role', 'tab');
      this._elPanes[index].setAttribute('role', 'tabpanel');
    });
  }
  show(elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
    const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
    const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
    if (elLinkTarget === elLinkActive) {
      return;
    }
    elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
    elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
    elLinkTarget.classList.add('tabs__btn_active');
    elPaneTarget.classList.add('tabs__pane_show');
    this._elTabs.dispatchEvent(this._eventShow);
    elLinkTarget.focus();
  }
  showByIndex(index) {
    const elLinkTarget = this._elButtons[index];
    elLinkTarget ? this.show(elLinkTarget) : null;
  }
  _events() {
    this._elTabs.addEventListener('click', e => {
      const target = e.target.closest('.tabs__btn');
      if (target) {
        e.preventDefault();
        this.show(target);
      }
    });
  }
}
const tabs = document.querySelectorAll('.tabs');
for (let i = 0, length = tabs.length; i < length; i++) {
  new ItcTabs(tabs[i]);
}
document.querySelector('#open-menu-btn').onclick = function () {
  document.querySelector('#main-menu').classList.toggle('show');
};
const navBtns = document.querySelectorAll('.nav-btn');
const educationCards = document.querySelectorAll('.education-card-wrapper');
document.addEventListener('DOMContentLoaded', function () {
  const navBtnsTop = document.querySelectorAll('.education-nav-top .nav-btn');
  const educationCardsTop = document.querySelectorAll('.education-card-center .education-card-top');
  function showEducationCardTop(cardId) {
    educationCardsTop.forEach(function (card) {
      card.style.display = 'none';
    });
    const selectedCard = document.querySelector(`[data-card-top-id="${cardId}"]`);
    if (selectedCard) {
      selectedCard.style.display = 'flex';
    }
  }
  function setActiveNavBtnTop(selectedBtn) {
    navBtnsTop.forEach(function (navBtn) {
      navBtn.classList.remove('active');
    });
    selectedBtn.classList.add('active');
  }
  navBtnsTop.forEach(function (navBtn) {
    navBtn.addEventListener('click', function (event) {
      event.preventDefault();
      const cardId = navBtn.getAttribute('data-card-top-href');
      if (cardId) {
        showEducationCardTop(cardId);
        setActiveNavBtnTop(navBtn);
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const navBtnsBottom = document.querySelectorAll('.education-nav-bottom .nav-btn');
  const educationCardsBottom = document.querySelectorAll('.education-card-center .education-card-bottom');
  function showEducationCardBottom(cardId) {
    educationCardsBottom.forEach(function (card) {
      card.style.display = 'none';
    });
    const selectedCard = document.querySelector(`[data-card-bottom-id="${cardId}"]`);
    if (selectedCard) {
      selectedCard.style.display = 'flex';
    }
  }
  function setActiveNavBtnBottom(selectedBtn) {
    navBtnsBottom.forEach(function (navBtn) {
      navBtn.classList.remove('active');
    });
    selectedBtn.classList.add('active');
  }
  navBtnsBottom.forEach(function (navBtn) {
    navBtn.addEventListener('click', function (event) {
      event.preventDefault();
      const cardId = navBtn.getAttribute('data-card-bottom-href');
      if (cardId) {
        showEducationCardBottom(cardId);
        setActiveNavBtnBottom(navBtn);
      }
    });
  });
});

/***/ }),

/***/ 509:
/***/ (() => {

const sliderClients = new Swiper('.swiper-slider-clients', {
  // Default parameters
  slidesPerView: 5.2,
  spaceBetween: 34,
  pagination: {
    el: '.swiper-slider-clients .swiper-pagination',
    clickable: true
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 34
    }
  }
});
const sliderReviews = new Swiper('.reviews-slider', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 37,
  // Responsive breakpoints
  navigation: {
    nextEl: ".reviews-slider .swiper-button-next",
    prevEl: ".reviews-slider .swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 37
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 37
    }
  }
});
const sliderTestimonials = new Swiper('.testimonials-slider', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.testimonials-slider .swiper-pagination',
    clickable: true
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 34
    }
  }
});
const sliderCGallery = new Swiper('.slider-gallery', {
  // Default parameters
  slidesPerView: 5.2,
  spaceBetween: 34,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 38
    }
  }
});
const sliderBikes = new Swiper('.bike-slider', {
  // Default parameters
  slidesPerView: 5.2,
  spaceBetween: 15,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 2.1,
      spaceBetween: 15
    }
  }
});
const sliderCars = new Swiper('.cars-slider', {
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 1.8,
      spaceBetween: -400
    }
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(509);
/* harmony import */ var _sliders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sliders__WEBPACK_IMPORTED_MODULE_1__);
// Это - ваша точка входа для скриптов страницы. Импортируйте сюда нужные вам файлы.




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hCLENBQUM7SUFDRCxJQUFJLEVBQUU7TUFDSkQsYUFBYSxFQUFFLEdBQUc7TUFDbEJDLFlBQVksRUFBRTtJQUNoQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsTUFBTWUsVUFBVSxHQUFHLElBQUlqQixNQUFNLENBQUMsY0FBYyxFQUFFO0VBQzVDO0VBQ0FDLGFBQWEsRUFBRSxDQUFDO0VBQ2hCQyxZQUFZLEVBQUUsQ0FBQztFQUNmVyxjQUFjLEVBQUUsSUFBSTtFQUNwQkMsWUFBWSxFQUFFLElBQUk7RUFDbEJDLElBQUksRUFBRSxJQUFJO0VBQ1ZDLG9CQUFvQixFQUFFLEVBQUU7RUFDeEI7RUFDQVgsV0FBVyxFQUFFO0lBQ1g7SUFDQSxHQUFHLEVBQUU7TUFDSEosYUFBYSxFQUFFLENBQUM7TUFDaEJDLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0QsR0FBRyxFQUFFO01BQ0hELGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNELElBQUksRUFBRTtNQUNKRCxhQUFhLEVBQUUsR0FBRztNQUNsQkMsWUFBWSxFQUFFLENBQUM7SUFDakI7RUFDRjtBQUNGLENBQUMsQ0FBQzs7Ozs7O1VDdEpGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVrQjtBQUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRlLWh0bWwtYm9pbGVycGxhdGUvLi9zb3VyY2UvanMvc2NyaXB0LmpzIiwid2VicGFjazovL2NyZWF0ZS1odG1sLWJvaWxlcnBsYXRlLy4vc291cmNlL2pzL3NsaWRlcnMuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLWh0bWwtYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3JlYXRlLWh0bWwtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY3JlYXRlLWh0bWwtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NyZWF0ZS1odG1sLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3JlYXRlLWh0bWwtYm9pbGVycGxhdGUvLi9zb3VyY2UvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSXRjVGFicyB7XG4gIGNvbnN0cnVjdG9yKHRhcmdldCwgY29uZmlnKSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHt9O1xuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbiAgICB0aGlzLl9lbFRhYnMgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICB0aGlzLl9lbEJ1dHRvbnMgPSB0aGlzLl9lbFRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2J0bicpO1xuICAgIHRoaXMuX2VsUGFuZXMgPSB0aGlzLl9lbFRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX3BhbmUnKTtcbiAgICB0aGlzLl9ldmVudFNob3cgPSBuZXcgRXZlbnQoJ3RhYi5pdGMuY2hhbmdlJyk7XG4gICAgdGhpcy5faW5pdCgpO1xuICAgIHRoaXMuX2V2ZW50cygpO1xuICB9XG4gIF9pbml0KCkge1xuICAgIHRoaXMuX2VsVGFicy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFibGlzdCcpO1xuICAgIHRoaXMuX2VsQnV0dG9ucy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGVsLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWInKTtcbiAgICAgIHRoaXMuX2VsUGFuZXNbaW5kZXhdLnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWJwYW5lbCcpO1xuICAgIH0pO1xuICB9XG4gIHNob3coZWxMaW5rVGFyZ2V0KSB7XG4gICAgY29uc3QgZWxQYW5lVGFyZ2V0ID0gdGhpcy5fZWxQYW5lc1tlbExpbmtUYXJnZXQuZGF0YXNldC5pbmRleF07XG4gICAgY29uc3QgZWxMaW5rQWN0aXZlID0gdGhpcy5fZWxUYWJzLnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19idG5fYWN0aXZlJyk7XG4gICAgY29uc3QgZWxQYW5lU2hvdyA9IHRoaXMuX2VsVGFicy5xdWVyeVNlbGVjdG9yKCcudGFic19fcGFuZV9zaG93Jyk7XG4gICAgaWYgKGVsTGlua1RhcmdldCA9PT0gZWxMaW5rQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsTGlua0FjdGl2ZSA/IGVsTGlua0FjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCd0YWJzX19idG5fYWN0aXZlJykgOiBudWxsO1xuICAgIGVsUGFuZVNob3cgPyBlbFBhbmVTaG93LmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX3BhbmVfc2hvdycpIDogbnVsbDtcbiAgICBlbExpbmtUYXJnZXQuY2xhc3NMaXN0LmFkZCgndGFic19fYnRuX2FjdGl2ZScpO1xuICAgIGVsUGFuZVRhcmdldC5jbGFzc0xpc3QuYWRkKCd0YWJzX19wYW5lX3Nob3cnKTtcbiAgICB0aGlzLl9lbFRhYnMuZGlzcGF0Y2hFdmVudCh0aGlzLl9ldmVudFNob3cpO1xuICAgIGVsTGlua1RhcmdldC5mb2N1cygpO1xuICB9XG4gIHNob3dCeUluZGV4KGluZGV4KSB7XG4gICAgY29uc3QgZWxMaW5rVGFyZ2V0ID0gdGhpcy5fZWxCdXR0b25zW2luZGV4XTtcbiAgICBlbExpbmtUYXJnZXQgPyB0aGlzLnNob3coZWxMaW5rVGFyZ2V0KSA6IG51bGw7XG4gIH07XG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy5fZWxUYWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YWJzX19idG4nKTtcbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNob3codGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKTtcbmZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB0YWJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gIG5ldyBJdGNUYWJzKHRhYnNbaV0pO1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1tZW51LWJ0bicpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tbWVudScpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbn1cblxuXG5jb25zdCBuYXZCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idG4nKTtcbmNvbnN0IGVkdWNhdGlvbkNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkdWNhdGlvbi1jYXJkLXdyYXBwZXInKTtcblxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbmF2QnRuc1RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZHVjYXRpb24tbmF2LXRvcCAubmF2LWJ0bicpO1xuICBjb25zdCBlZHVjYXRpb25DYXJkc1RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZHVjYXRpb24tY2FyZC1jZW50ZXIgLmVkdWNhdGlvbi1jYXJkLXRvcCcpO1xuXG4gIGZ1bmN0aW9uIHNob3dFZHVjYXRpb25DYXJkVG9wKGNhcmRJZCkge1xuICAgIGVkdWNhdGlvbkNhcmRzVG9wLmZvckVhY2goZnVuY3Rpb24gKGNhcmQpIHtcbiAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlbGVjdGVkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNhcmQtdG9wLWlkPVwiJHtjYXJkSWR9XCJdYCk7XG4gICAgaWYgKHNlbGVjdGVkQ2FyZCkge1xuICAgICAgc2VsZWN0ZWRDYXJkLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QWN0aXZlTmF2QnRuVG9wKHNlbGVjdGVkQnRuKSB7XG4gICAgbmF2QnRuc1RvcC5mb3JFYWNoKGZ1bmN0aW9uIChuYXZCdG4pIHtcbiAgICAgIG5hdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIHNlbGVjdGVkQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG5cbiAgbmF2QnRuc1RvcC5mb3JFYWNoKGZ1bmN0aW9uIChuYXZCdG4pIHtcbiAgICBuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjYXJkSWQgPSBuYXZCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLWNhcmQtdG9wLWhyZWYnKTtcbiAgICAgIGlmIChjYXJkSWQpIHtcbiAgICAgICAgc2hvd0VkdWNhdGlvbkNhcmRUb3AoY2FyZElkKTtcbiAgICAgICAgc2V0QWN0aXZlTmF2QnRuVG9wKG5hdkJ0bik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG5hdkJ0bnNCb3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWR1Y2F0aW9uLW5hdi1ib3R0b20gLm5hdi1idG4nKTtcbiAgY29uc3QgZWR1Y2F0aW9uQ2FyZHNCb3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWR1Y2F0aW9uLWNhcmQtY2VudGVyIC5lZHVjYXRpb24tY2FyZC1ib3R0b20nKTtcblxuICBmdW5jdGlvbiBzaG93RWR1Y2F0aW9uQ2FyZEJvdHRvbShjYXJkSWQpIHtcbiAgICBlZHVjYXRpb25DYXJkc0JvdHRvbS5mb3JFYWNoKGZ1bmN0aW9uIChjYXJkKSB7XG4gICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzZWxlY3RlZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jYXJkLWJvdHRvbS1pZD1cIiR7Y2FyZElkfVwiXWApO1xuICAgIGlmIChzZWxlY3RlZENhcmQpIHtcbiAgICAgIHNlbGVjdGVkQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFjdGl2ZU5hdkJ0bkJvdHRvbShzZWxlY3RlZEJ0bikge1xuICAgIG5hdkJ0bnNCb3R0b20uZm9yRWFjaChmdW5jdGlvbiAobmF2QnRuKSB7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBzZWxlY3RlZEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxuXG4gIG5hdkJ0bnNCb3R0b20uZm9yRWFjaChmdW5jdGlvbiAobmF2QnRuKSB7XG4gICAgbmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY2FyZElkID0gbmF2QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1jYXJkLWJvdHRvbS1ocmVmJyk7XG4gICAgICBpZiAoY2FyZElkKSB7XG4gICAgICAgIHNob3dFZHVjYXRpb25DYXJkQm90dG9tKGNhcmRJZCk7XG4gICAgICAgIHNldEFjdGl2ZU5hdkJ0bkJvdHRvbShuYXZCdG4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwiY29uc3Qgc2xpZGVyQ2xpZW50cyA9IG5ldyBTd2lwZXIoJy5zd2lwZXItc2xpZGVyLWNsaWVudHMnLCB7XG4gIC8vIERlZmF1bHQgcGFyYW1ldGVyc1xuICBzbGlkZXNQZXJWaWV3OiA1LjIsXG4gIHNwYWNlQmV0d2VlbjogMzQsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5zd2lwZXItc2xpZGVyLWNsaWVudHMgLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTIsXG4gICAgfSxcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfVxuICB9XG59KTtcblxuY29uc3Qgc2xpZGVyUmV2aWV3cyA9IG5ldyBTd2lwZXIoJy5yZXZpZXdzLXNsaWRlcicsIHtcbiAgLy8gRGVmYXVsdCBwYXJhbWV0ZXJzXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNwYWNlQmV0d2VlbjogMzcsXG4gIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIucmV2aWV3cy1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIucmV2aWV3cy1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMixcbiAgICB9LFxuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzcsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNyxcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCBzbGlkZXJUZXN0aW1vbmlhbHMgPSBuZXcgU3dpcGVyKCcudGVzdGltb25pYWxzLXNsaWRlcicsIHtcbiAgLy8gRGVmYXVsdCBwYXJhbWV0ZXJzXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy50ZXN0aW1vbmlhbHMtc2xpZGVyIC5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6ICAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMixcbiAgICB9LFxuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogIDEsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogIDEsXG4gICAgICBzcGFjZUJldHdlZW46IDM0LFxuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IHNsaWRlckNHYWxsZXJ5ID0gbmV3IFN3aXBlcignLnNsaWRlci1nYWxsZXJ5Jywge1xuICAvLyBEZWZhdWx0IHBhcmFtZXRlcnNcbiAgc2xpZGVzUGVyVmlldzogNS4yLFxuICBzcGFjZUJldHdlZW46IDM0LFxuICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEyLFxuICAgIH0sXG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDM4LFxuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IHNsaWRlckJpa2VzID0gbmV3IFN3aXBlcignLmJpa2Utc2xpZGVyJywge1xuICAvLyBEZWZhdWx0IHBhcmFtZXRlcnNcbiAgc2xpZGVzUGVyVmlldzogNS4yLFxuICBzcGFjZUJldHdlZW46IDE1LFxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgcm91bmRMZW5ndGhzOiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBsb29wQWRkaXRpb25hbFNsaWRlczogMzAsXG4gIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTIsXG4gICAgfSxcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDE1LFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMi4xLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCBzbGlkZXJDYXJzID0gbmV3IFN3aXBlcignLmNhcnMtc2xpZGVyJywge1xuICAvLyBEZWZhdWx0IHBhcmFtZXRlcnNcbiAgc2xpZGVzUGVyVmlldzogMyxcbiAgc3BhY2VCZXR3ZWVuOiAwLFxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgcm91bmRMZW5ndGhzOiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBsb29wQWRkaXRpb25hbFNsaWRlczogMzAsXG4gIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICB9LFxuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuOCxcbiAgICAgIHNwYWNlQmV0d2VlbjogLTQwMCxcbiAgICB9XG4gIH1cbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vINCt0YLQviAtINCy0LDRiNCwINGC0L7Rh9C60LAg0LLRhdC+0LTQsCDQtNC70Y8g0YHQutGA0LjQv9GC0L7QsiDRgdGC0YDQsNC90LjRhtGLLiDQmNC80L/QvtGA0YLQuNGA0YPQudGC0LUg0YHRjtC00LAg0L3Rg9C20L3Ri9C1INCy0LDQvCDRhNCw0LnQu9GLLlxuXG5pbXBvcnQgJy4vc2NyaXB0JztcbmltcG9ydCAnLi9zbGlkZXJzJztcbmltcG9ydCAnLi9hbmltYXRpb25zJztcbiJdLCJuYW1lcyI6WyJJdGNUYWJzIiwiY29uc3RydWN0b3IiLCJ0YXJnZXQiLCJjb25maWciLCJkZWZhdWx0Q29uZmlnIiwiX2NvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsIl9lbFRhYnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfZWxCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsIl9lbFBhbmVzIiwiX2V2ZW50U2hvdyIsIkV2ZW50IiwiX2luaXQiLCJfZXZlbnRzIiwic2V0QXR0cmlidXRlIiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJkYXRhc2V0Iiwic2hvdyIsImVsTGlua1RhcmdldCIsImVsUGFuZVRhcmdldCIsImVsTGlua0FjdGl2ZSIsImVsUGFuZVNob3ciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJkaXNwYXRjaEV2ZW50IiwiZm9jdXMiLCJzaG93QnlJbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xvc2VzdCIsInByZXZlbnREZWZhdWx0IiwidGFicyIsImkiLCJsZW5ndGgiLCJvbmNsaWNrIiwidG9nZ2xlIiwibmF2QnRucyIsImVkdWNhdGlvbkNhcmRzIiwibmF2QnRuc1RvcCIsImVkdWNhdGlvbkNhcmRzVG9wIiwic2hvd0VkdWNhdGlvbkNhcmRUb3AiLCJjYXJkSWQiLCJjYXJkIiwic3R5bGUiLCJkaXNwbGF5Iiwic2VsZWN0ZWRDYXJkIiwic2V0QWN0aXZlTmF2QnRuVG9wIiwic2VsZWN0ZWRCdG4iLCJuYXZCdG4iLCJldmVudCIsImdldEF0dHJpYnV0ZSIsIm5hdkJ0bnNCb3R0b20iLCJlZHVjYXRpb25DYXJkc0JvdHRvbSIsInNob3dFZHVjYXRpb25DYXJkQm90dG9tIiwic2V0QWN0aXZlTmF2QnRuQm90dG9tIiwic2xpZGVyQ2xpZW50cyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwiYnJlYWtwb2ludHMiLCJzbGlkZXJSZXZpZXdzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInNsaWRlclRlc3RpbW9uaWFscyIsInNsaWRlckNHYWxsZXJ5Iiwic2xpZGVyQmlrZXMiLCJjZW50ZXJlZFNsaWRlcyIsInJvdW5kTGVuZ3RocyIsImxvb3AiLCJsb29wQWRkaXRpb25hbFNsaWRlcyIsInNsaWRlckNhcnMiXSwic291cmNlUm9vdCI6IiJ9