'use strict';

var buttons = document.querySelectorAll('.card-product__order-btn');
var popup = document.querySelector('.catalog-modal')

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('catalog-modal__close');

    document.addEventListener('click', function (evt){
      if (evt.target.classList.contains('catalog-modal__block')) {
        popup.classList.add('catalog-modal__close');
      }
    })
  })
})
