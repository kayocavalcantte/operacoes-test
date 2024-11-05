function ehPrimo(a) {
    if (a != 1) {
        if (a % 2 !== 0 || a == 2) {
            if (a % 1 === 0 && a % a === 0) {
                return "O número " + a + " é primo";
            }
        } else {
            return "O número " + a + " não é primo";
        }
    } else {
        return "O número " + a + " não é primo";
    }
}

module.exports = ehPrimo;
