const contagem = require("../functions/contagem/contagem.js");  // Importe a função que você quer testar


    test('Deve retornar a quantidade correta de alunos e aprovados', () => {
        expect(contagem(3,[70,80,20])).toBe('São 3 alunos. São 2 alunos aprovados.');
    });

