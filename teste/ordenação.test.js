const ordenaVetor = require('../functions/ordenacao/ordenacao.js');

test('Ordena vetor com elementos em ordem aleatória', () => {
    expect(ordenaVetor([5, 3, 8, 1, 4])).toEqual([1, 3, 4, 5, 8]);
});

test('Ordena vetor já ordenado', () => {
    expect(ordenaVetor([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

