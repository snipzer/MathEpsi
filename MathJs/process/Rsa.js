const MathUtil = require('../utils/MathUtil');
const StringUtil = require('../utils/StringUtil');
const InversedKeyFinder = require('../utils/InversedKeyFinderUtil');
const PowerFunction = require('../functions/PowerFunction');

class Rsa {
    constructor(p, q) {
        this.stringUtil = new StringUtil();
        this.n = p * q;
        this.m = (p-1)*(q-1);
        this.e = this._calculateE();
        this.d = new InversedKeyFinder(this.e).execute(this.e, this.m);
        this.powerCrypter = new PowerFunction(this.e, 0);
        this.powerDecrypter = new PowerFunction(this.d, 0);
    }

    convert(inputString, powerFunction, modulo) {
        let outputString = "";
        for(let index in inputString) {
            let currentChar = inputString[index];
            let convertCharId = this.execute(this.stringUtil.getIdByChar(currentChar), powerFunction, modulo);
            outputString = outputString + this.stringUtil.getCharById(convertCharId);
        }
        return outputString;
    }

    execute(input, powerFunction, modulo) {
        return powerFunction.execute(input) % modulo;
    }

    _calculateE() {
        let calculate = true;
        let e = 2;
        while(calculate) {
            if(MathUtil.isNumbersPrimed(e, this.m)) {
                calculate = false;
            } else {
                e = e + 1;
            }
        }
        return e;
    }

}

module.exports = Rsa;