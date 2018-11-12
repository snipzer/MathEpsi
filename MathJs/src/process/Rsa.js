const MathUtil = require('../utils/MathUtil');
const StringUtil = require('../utils/StringUtil');
const InversedKeyFinder = require('../utils/InversedKeyFinderUtil');
const PowerFunction = require('../functions/PowerFunction');

class Rsa {
    constructor(p, q) {
        this.stringUtil = new StringUtil(true);
        console.log("====================");
        console.log(`Calculating modulo with p equals ${p}, and q equals ${q}:`);
        this.n = p * q;
        console.log("====================");
        console.log(`Modulo n equals : ${this.n}`);
        if(this.n > this.stringUtil.alphabet.length)
            throw new Error(`If n > ${this.stringUtil.alphabet.length}, undefined character may appear...`);
        this.m = (p-1)*(q-1);
        console.log("====================");
        console.log(`Finding m : (p-1)*(q-1) equals ${this.m}`);
        this.e = this._calculateE();
        this.d = this._calculateD();
        this.powerCrypter = new PowerFunction(this.e);
        this.powerDecrypter = new PowerFunction(this.d);
    }

    convert(inputString, powerFunction) {
        let outputString = "";
        for(let index in inputString) {
            let currentChar = inputString[index];
            console.log(`Current char : ${currentChar} => ${this.stringUtil.getIdByChar(currentChar)}`);
            let convertCharId = this.execute(this.stringUtil.getIdByChar(currentChar), powerFunction);
            console.log(`ConvertCharId: ${convertCharId} => ${this.stringUtil.getCharById(convertCharId)}`);
            outputString = outputString + this.stringUtil.getCharById(convertCharId);
        }
        return outputString;
    }

    convertDecrypt(inputString, powerFunction) {
        let outputString = "";
        for(let index in inputString) {
            let currentChar = inputString[index];
            console.log(`Current char : ${currentChar} => ${this.stringUtil.getIdByChar(currentChar)}`);
            let convertCharId = this.executeModPow(this.stringUtil.getIdByChar(currentChar), powerFunction);
            console.log(`ConvertCharId: ${convertCharId} => ${this.stringUtil.getCharById(convertCharId)}`);
            outputString = outputString + this.stringUtil.getCharById(convertCharId);
        }
        return outputString;
    }

    execute(input, powerFunction) {
        return powerFunction.execute(input) % this.n;
    }

    executeModPow(input, powerFunction) {
        return powerFunction.executeModPow(input, this.n);
    }

    _calculateE() {
        console.log("====================");
        console.log("Resolving e :");
        let calculate = true;
        let e = 4;
        while(calculate) {
            if(MathUtil.isNumbersPrimed(e, this.m)) {
                calculate = false;
            } else {
                e = e + 1;
            }
        }
        console.log(`First valid e equals : ${e}`);
        return e;
    }

    _calculateD() {
        console.log("====================");
        console.log("Resolving d :");
        let value = new InversedKeyFinder(this.e).execute(this.e, this.m);
        console.log(`Inverse of ${this.e} mod(${this.m}) equals : ${value}`);
        if(value > this.m) {
            value = MathUtil.getInfOfModulo(value, this.m);
            console.log(`Value of d is superior of ${this.m}, new of d equals : ${value}`);
        }
        if(value < 0) {
            value = MathUtil.getPosOfModulo(value, this.m);
            console.log(`Value of d is negative, new value of d equals : ${value}`);
        }
        return value;
    }
}

module.exports = Rsa;
