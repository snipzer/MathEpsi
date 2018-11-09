const MathUtil = require('./MathUtil');
const AffFunction = require('./AffFunction');
const StringUtil = require('./StringUtil');
const InversedKeyFinder = require('./InversedKeyFinder');

class Crypter {
    constructor(slope, intercept, modulo) {
        this.modulo = modulo;
        intercept = (intercept > 0) ? intercept : MathUtil.getPosOfModulo(intercept, modulo);
        this.affinneCrypter = new AffFunction(slope, intercept);
        this.affinneDecrypter = MathUtil.constructInverseEq(new InversedKeyFinder(slope).execute(slope, modulo), this.affinneCrypter, modulo);
        this.stringUtil = new StringUtil();
    }

    execute(input, affineFunction) {
        return affineFunction.execute(input) % this.modulo;
    }

    convert(inputString, affineFunction) {
        let outputString = "";
        for(let index in inputString) {
            let currentChar = inputString[index];
            let convertCharId = this.execute(this.stringUtil.getIdByChar(currentChar), affineFunction);
            outputString = outputString + this.stringUtil.getCharById(convertCharId);
        }
        return outputString;
    }
}

module.exports = Crypter;
