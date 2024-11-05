function contagem(n, notas) {
    let cont = 0;
    for (let i = 0; i < n; i++) {
        let nota = notas[i];  // Recebe a nota diretamente do array de notas
        if (nota >= 50) {
            cont++;
        }
    }
    return `São ${n} alunos. São ${cont} alunos aprovados.`;
}

module.exports = contagem;
