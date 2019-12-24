'use strict';


(function() {
  // Меню
  var toggleButton = document.getElementById('toggle-button');
  var mainNav = document.querySelector('.main-nav');
  var siteNavigation = document.querySelector('.site-navigation');
  var userNavigation = document.querySelector('.user-navigation');

  if (mainNav && mainNav.classList.contains('main-nav--no-js')) {
    mainNav.classList.remove('main-nav--no-js');

    if (siteNavigation && userNavigation) {
      siteNavigation.classList.add('site-navigation--closed');
      userNavigation.classList.add('user-navigation--closed');
    }
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', function(evt) {
      evt.preventDefault();
      siteNavigation.classList.toggle('site-navigation--closed');
      userNavigation.classList.toggle('user-navigation--closed');
      this.classList.toggle('main-nav__toggle--off');
    });
  }

  // Модальное окно заказа товара. Не могу понять, почему не работает???
  var overlayModal = document.querySelector('.modal-overlay');
  var catalogBlock = document.querySelector('.catalog');
  var orderButton = document.querySelector('.week-goods__button');
  var catalogButton = document.querySelectorAll('.card-product__button');

  if (catalogButton) {
    for (var i = 0; i < catalogButton.length; i++) {
      catalogButton[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        modal.classList.add('modal--show');
        overlay.classList.add('modal-overlay--show');
      });
    }
  }

  if (overlayModal) {
    if (catalogBlock) {
      catalogBlock.addEventListener('click', openOrderForm);
    }

    if (orderButton) {
      orderButton.addEventListener('click', openOrderForm);
    }

    overlayModal.addEventListener('click', closeOrderForm);
    window.addEventListener('keydown', closeOrderForm);
  }

  function openOrderForm(evt) {
    var element = evt.target;

    if (
      element.classList.contains('card-product__button') ||
      element.classList.contains('week-goods__button')
    ) {
      event.preventDefault();
      overlayModal.classList.add('modal-overlay--opened');
    }
  }

  function closeOrderForm(evt) {
    var element = evt.target;

    if (element.classList.contains('modal-overlay') || evt.keyCode === 27) {
      overlayModal.classList.remove('modal-overlay--opened');
    }
  }
})();

// Яндекс карта
/*eslint-disable*/
function init(ymaps) {
  /*eslint-enable*/
  var map = new ymaps.Map('map', {
    center: [59.93944115603922, 30.32302403991186],
    zoom: 16,
    controls: ['zoomControl']
  });

  var placemark = new ymaps.Placemark(
    [59.938633647616214, 30.32304549758399],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [66, 101],
      iconImageOffset: [-33, -101]
    }
  );

  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(placemark);
}
