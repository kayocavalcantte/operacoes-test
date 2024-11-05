function trocaValores(a, b) {
    let aux = a;
    a = b;
    b = aux;
    return [a, b];
}

module.exports = trocaValores;
