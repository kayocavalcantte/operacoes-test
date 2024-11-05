const somaNumeros = require('../functions/somador/somador.js');

test('Soma de múltiplos números', () => {
    expect(somaNumeros([1, 2, 3, 4, 5])).toBe(15);
});

test('Soma de um único número', () => {
    expect(somaNumeros([10])).toBe(10);
});
