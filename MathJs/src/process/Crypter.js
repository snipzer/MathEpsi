const MathUtil = require('../utils/MathUtil');
const AffFunction = require('../functions/AffFunction');
const StringUtil = require('../utils/StringUtil');
const ExtendedEuclidAlgorythm = require('./ExtendedEuclidAlgorythm');

class Crypter {
    constructor(slope, intercept, modulo) {
        this.modulo = modulo;
        intercept = (intercept > 0) ? intercept : MathUtil.getPosOfModulo(intercept, modulo);
        this.affinneCrypter = new AffFunction(slope, intercept);
        this.affinneDecrypter = this.constructInverseEq(new ExtendedEuclidAlgorythm(slope).execute(slope, modulo), this.affinneCrypter, modulo);
        this.stringUtil = new StringUtil();
    }

    execute(input, affineFunction) {
        return affineFunction.execute(input) % this.modulo;
    }

    convert(inputString, affineFunction) {
        let outputString = "";
        for(let index in inputString.toUpperCase()) {
            let currentChar = inputString[index];
            let convertCharId = this.execute(this.stringUtil.getIdByChar(currentChar), affineFunction);
            outputString = outputString + this.stringUtil.getCharById(convertCharId);
        }
        return outputString;
    }

    constructInverseEq(inversedKey, affFunction, modulo) {
        inversedKey = (inversedKey > 0)? inversedKey : MathUtil.getPosOfModulo(inversedKey, modulo);
        let newIntercept = affFunction.intercept * -1 * inversedKey;
        newIntercept = (newIntercept > 0)? newIntercept : MathUtil.getPosOfModulo(newIntercept, modulo);
        return new AffFunction(inversedKey, newIntercept);
    }
}

module.exports = Crypter;
