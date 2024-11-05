const ehPrimo = require('../functions/numeroPrimo/numeroPrimo.js');

test('Verifica se 2 é primo', () => {
    expect(ehPrimo(2)).toBe("O número 2 é primo");
});

test('Verifica se 3 é primo', () => {
    expect(ehPrimo(3)).toBe("O número 3 é primo");
});


