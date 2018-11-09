const MathUtil = require('./MathUtil');
const InversedKeyFinder = require('./InversedKeyFinder');

class Rsa {
    constructor(p, q) {
        this.p = p;
        this.q = q;
        this.n = p * q;
        this.m = (p-1)*(q-1);
        this.e = null;
    }

    execute() {
        this._calculateE();
        this.d = new InversedKeyFinder(this.e).execute(this.e, this.m);
    }

    _calculateE() {
        let calculate = true;
        let e = 2;
        while(calculate) {
            if(MathUtil.isNumbersPrime(e, this.m)) {
                this.e = e;
            } else {
                e = e + 1;
            }
        }
    }

}

module.exports = Rsa;