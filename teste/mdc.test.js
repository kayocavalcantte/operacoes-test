const calculaMDC = require('../functions/mdc/mdc.js');

test('MDC entre 8 e 4 deve ser 8', () => {
    expect(calculaMDC(8, 4)).toBe(8);
});

test('MDC entre 15 e 5 deve ser 15', () => {
    expect(calculaMDC(15, 5)).toBe(15);
});

