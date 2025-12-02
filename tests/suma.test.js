const { sumar } = require('../src/app.js');

describe('Pruebas de la función sumar', () => {
  test('suma de 2 + 3 debe ser 5', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('suma de -1 + 1 debe ser 0', () => {
    expect(sumar(-1, 1)).toBe(0);
  });

  test('suma de 0 + 0 debe ser 0', () => {
    expect(sumar(0, 0)).toBe(0);
  });
});
