import { describe, test, expect } from '@jest/globals'; // Подключение необходимых библиотек
import luhnAlgoritm from './validate'; // Импорт функции для проверки алгоритма Луна
import cardNumber from './card'; // Импорт функции для проверки типа кредитной карты

//-------------------------------------------------проверка алгоритмов Луна-------------------------------------------------

describe('luhnAlgoritm', () => {
  test('validates a correct credit card visa number', () => {
    expect(luhnAlgoritm('4111111111111111')).toBe(true); // Проверка корректного номера кредитной карты Visa 16 цифр
  });

  test('returns false for an incorrect credit card visa number', () => {
    expect(luhnAlgoritm('4111111111111112')).toBe(false); // Проверка некорректного номера кредитной карты Visa 16 цифр
  });

  test('validates a correct credit card MIR number', () => {
    expect(luhnAlgoritm('2200000000000001')).toBe(true); // Проверка корректного номера кредитной карты MIR 16 цифр
  });

  test('returns false for an incorrect credit card MIR number', () => {
    expect(luhnAlgoritm('2200000000000002')).toBe(false); // Проверка некорректного номера кредитной карты MIR 16 цифр
  });

  test('validates a correct credit card Mastercard number', () => {
    expect(luhnAlgoritm('5555555555554444')).toBe(true); // Проверка корректного номера кредитной карты Mastercard 16цифр
  });

  test('returns false for an incorrect credit card Mastercard number', () => {
    expect(luhnAlgoritm('5555555555554442')).toBe(false); // Проверка некорректного номера кредитной карты Mastercard 16цифр
  });

  test('validates a correct credit card jcb number', () => {
    expect(luhnAlgoritm('3528000700000000')).toBe(true); // Проверка корректного номера кредитной карты jsb
  });
  test('returns false for an incorrect credit card jcb number', () => {
    expect(luhnAlgoritm('3528000700000002')).toBe(false); // Проверка некорректного номера кредитной карты jcb
  });

  test('validates a correct credit card discover number', () => {
    expect(luhnAlgoritm('6011111111111117')).toBe(true); // Проверка корректного номера кредитной карты discover
  });
  test('returns false for an incorrect credit card discover number', () => {
    expect(luhnAlgoritm('6011111111111115')).toBe(false); // Проверка некорректного номера кредитной карты discover
  });

  test('validates a correct credit card diners-club number', () => {
    expect(luhnAlgoritm('30569309025904')).toBe(true); // Проверка корректного номера кредитной карты diners-club
  });
  test('returns false for an incorrect credit card diners-club number', () => {
    expect(luhnAlgoritm('30569309025903')).toBe(false); // Проверка некорректного номера кредитной карты diners-club
  });

  test('validates a correct credit card Amex number', () => {
    expect(luhnAlgoritm('378282246310005')).toBe(true); // Проверка корректного номера кредитной карты American-express
  });
  test('returns false for an incorrect credit card Amex number', () => {
    expect(luhnAlgoritm('378282246310005')).toBe(false); // Проверка некорректного номера кредитной карты American-express
  });

});

//--------------------------------------проверка определения карты--------------------------------------

describe('cardNumber', () => {
  test('identifies a Visa card', () => {
    expect(cardNumber('4111111111111111')).toBe('visa'); // Проверка определения карты Visa
  });

  test('identifies a MIR', () => {
    expect(cardNumber('5555555555554444')).toBe('mir'); // Проверка определения карты MIR
  });

  test('identifies a Mastercard', () => {
    expect(cardNumber('5555555555554444')).toBe('master'); // Проверка определения карты Mastercard
  });

  test('identifies a jcb', () => {
    expect(cardNumber('5555555555554444')).toBe('jcb'); // Проверка определения карты jcb
  });

  test('identifies a discover', () => {
    expect(cardNumber('5555555555554444')).toBe('discover'); // Проверка определения карты discover
  });
  
  test('identifies a diners-club', () => {
    expect(cardNumber('5555555555554444')).toBe('diners-club'); // Проверка определения карты diners-club
  });

  test('identifies a amex', () => {
    expect(cardNumber('5555555555554444')).toBe('amex'); // Проверка определения карты amex
  });
  
  // Добавьте другие тсты для определения других типов кредитных карт, если необходимо
});

//---------------------------------------проверка на ошибки ввода дынных---------------------------------------
describe('luhnAlgoritm', () => {
    test('returns false for non-numeric input', () => {
      expect(luhnAlgoritm('abc')).toBe(false); // Проверка для неправильных данных (не числа)
    });
  
    test('returns false for empty input', () => {
      expect(luhnAlgoritm('')).toBe(false); // Проверка для пустого ввода
    });
  
    // Добавьте другие тесты для неправильных данных, если необходимо
  });
  
  describe('cardNumber', () => {
    test('returns null for non-numeric input', () => {
      expect(cardNumber('abc')).toBeNull(); // Проверка для неправильных данных (не числа)
    });
  
    test('returns null for empty input', () => {
      expect(cardNumber('')).toBeNull(); // Проверка для пустого ввода
    });
  
    // Добавьте другие тесты для неправильных данных, если необходимо
  });

//---------------------------------------
