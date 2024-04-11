function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
import luhnAlgoritm from './validate';
import cardNumber from './card';
var card = document.querySelector('.input');
var submit = document.querySelector('.submit');
var cards = _toConsumableArray(document.querySelectorAll('.card'));
function checkCard() {
  if (card.value === '') {
    return false;
  }
  cards.forEach(function (el) {
    if (el.className.includes('nocard')) {
      el.classList.remove('nocard');
    }
  });
  if (luhnAlgoritm(card.value)) {
    card.classList.remove('novalid');
    card.classList.add('valid');
    var type = cardNumber(card.value);
    cards.forEach(function (el) {
      if (!el.className.includes(type)) {
        el.classList.add('nocard');
      }
    });
  } else {
    card.classList.remove('valid');
    card.classList.add('novalid');
  }
}
submit.addEventListener('click', function (event) {
  event.preventDefault();
  checkCard();
});
card.addEventListener('input', function () {
  if (card.value === '') {
    cards.forEach(function (el) {
      if (el.className.includes('nocard')) {
        el.classList.remove('nocard');
      }
    });
  }
});