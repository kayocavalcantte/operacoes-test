const trocaValores = require('../functions/trocaDeVariavel/trocaDeVariavel.js');

test('Troca valores de 10 e 20', () => {
    expect(trocaValores(10, 20)).toEqual([20, 10]);
});

test('Troca valores de números negativos', () => {
    expect(trocaValores(-5, -10)).toEqual([-10, -5]);
});

