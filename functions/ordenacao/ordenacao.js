function ordenaVetor(vetor) {
    let aux;
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length; j++) {
            if (vetor[i] < vetor[j]) {
                aux = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = aux;
            }
        }
    }
    return vetor;
}

module.exports = ordenaVetor;
