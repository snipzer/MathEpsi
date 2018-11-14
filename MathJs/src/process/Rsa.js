const MathUtil = require('../utils/MathUtil');
const StringUtil = require('../utils/StringUtil');
const InversedKeyFinder = require('../utils/InversedKeyFinderUtil');
const PowerFunction = require('../functions/PowerFunction');

class Rsa {
    constructor(p, q) {
        this.stringUtil = new StringUtil(true);
        if(!MathUtil.isPrime(p))
            throw new Error(`p must be a primed number`);
        if(!MathUtil.isPrime(q))
            throw new Error(`q must be a primed number`);
        console.log("====================");
        console.log(`Calculating modulo with p equals ${p}, and q equals ${q}:`);
        this.n = p * q;
        console.log("====================");
        console.log(`Modulo n equals : ${this.n}`);
        this.m = (p-1)*(q-1);
        console.log("====================");
        console.log(`Finding m : (p-1)*(q-1) equals ${this.m}`);
        this.e = 7//this._calculateE();
        this.d = this._calculateD();
        this.powerCrypter = new PowerFunction(this.e);
        this.powerDecrypter = new PowerFunction(this.d);
    }

    convert(input, power, modulo) {
        if(typeof input === 'string' || input instanceof String) {
            return this.convertString(input, power, modulo);
        } else {
            return this.convertInt(parseInt(input, 10), power, modulo);
        }
    }

    convertString(inputString, power, modulo) {
        if(this.n > this.stringUtil.alphabet.length)
            throw new Error(`If n > ${this.stringUtil.alphabet.length}, undefined character may appear...`);
        let outputString = "";
        for(let index in inputString) {
            let currentChar = inputString[index];
            let convertCharId = this.executeModPow(this.stringUtil.getIdByChar(currentChar), power, modulo);
            outputString = outputString + this.stringUtil.getCharById(convertCharId);
        }
        return outputString;
    }

    // TODO parseInt("010", 10) => 10
    _stringToIntArray(string) {
        let intArray = [];
        for(let index in string) {
            let int = this.stringUtil.getIdByChar(string[index]);
            intArray.push();
        }
        return intArray;
    }

    _intToString(intArray) {

    }

    convertInt(integer, power, modulo) {
        if(integer > this.n)
            throw new Error(`It can't work if the input ${integer} is > to ${this.n}`);
        return this.executeModPow(integer, power, modulo);
    }

    executeModPow(input, power, modulo) {
        return MathUtil.modpow(input, power, modulo);
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
