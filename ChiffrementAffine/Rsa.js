const MathUtil = require('MathUtil');

class Rsa {
    constructor(p, q) {
        this.p = p;
        this.q = q;
        this.n = p * q;
        this.m = (p-1)*(q-1);
    }


}

module.exports = Rsa;