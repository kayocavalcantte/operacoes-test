function calculaMDC(a, b) {
    let mdc = 0;
    if (a % b === 0 || b % a === 0) {
        mdc = a > b ? a : b;
    } else {
        mdc = a * b;
    }
    return mdc;
}

module.exports = calculaMDC;
