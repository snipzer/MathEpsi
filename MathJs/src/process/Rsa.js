const MathUtil = require('../utils/MathUtil');
const StringUtil = require('../services/StringService');
const ExtendedEuclidAlgorythm = require('./ExtendedEuclidAlgorythm');
const PowerFunction = require('../functions/PowerFunction');

class Rsa {
    constructor(p, q) {
        p = parseInt(p);
        q = parseInt(q);
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
        console.log("====================");
        console.log(`Finding hidden modulo m : (p-1)*(q-1)`);
        this.m = (p-1)*(q-1);
        console.log(`Hidden modulo m equals : ${this.m}`);
        this.e = this._calculateE();
        this.d = this._calculateD();
        this.powerCrypter = new PowerFunction(this.e);
        this.powerDecrypter = new PowerFunction(this.d);
    }

    encrypt(string) {
        let stringInt = this._stringToInt(string);
        let intStringArray = this.stringUtil.breakString(stringInt, 2);
        let resultIntArray = [];
        intStringArray.forEach(intString => {
            resultIntArray.push(MathUtil.modpow(parseInt(intString, 10), this.e, this.n));
        });
        resultIntArray = this._adaptIntToBlockSize(resultIntArray, this.n.toString().length);
        return this.stringUtil.fusionArray(resultIntArray);
    }

    _stringToInt(string) {
        let intString = '';
        for(let index in string) {
            let int = this.stringUtil.getIdByChar(string[index]);
            if(int < 10) {
                int = '0' + int;
            }
            intString = intString + int;
        }
        return intString;
    }

    _adaptIntToBlockSize(intArray, blockSize) {
        for(let i = 0; i < intArray.length; i++) {
            if(intArray[i].toString().length < blockSize) {
                let zeroToAddQuantity = blockSize - intArray[i].toString().length;
                for(let j = 0; j < zeroToAddQuantity; j++) {
                    intArray[i] = "0" + intArray[i]
                }
            } else {
                intArray[i] = "" + intArray[i];
            }
        }
        return intArray;
    }

    decrypt(string) {
        let intArray = this.stringUtil.breakString(string, this.n.toString().length);
        let resultIntArray = [];
        intArray.forEach(intString => {
            resultIntArray.push(MathUtil.modpow(parseInt(intString), this.d, this.n));
        });
        resultIntArray = this._adaptIntToBlockSize(resultIntArray, this.n.length);
        resultIntArray = this.stringUtil.breakString(this.stringUtil.fusionArray(resultIntArray), 2);
        return this._intToString(resultIntArray);
    }

    _intToString(resultIntArray) {
        let result = '';
        resultIntArray.forEach(int => {
            result = result + this.stringUtil.getCharById(parseInt(int));
        });
        return result;
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
        let value = new ExtendedEuclidAlgorythm(this.e).execute(this.e, this.m);
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
