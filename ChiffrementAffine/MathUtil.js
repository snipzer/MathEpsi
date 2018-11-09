const AffFunction = require('./AffFunction');

class MathUtil {
    constructor() {
        throw new Error('Don\'t instanciate an util class !');
    }

    static isNumbersPrime(a, b) {
        if (b) {
            return MathUtil.isNumbersPrime(b, a % b);
        } else {
            return (a === 1);
        }
    }

    static getPGCD(x, y) {
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
            let t = y;
            y = x % y;
            x = t;
        }
        return x;
    }

    static getPosOfModulo(number, modulo) {
        number = number + modulo;
        if(number >= 0) {
            return number;
        }
        return MathUtil.getPosOfModulo(number, modulo);
    }

    static getInfOfModulo(number, modulo) {
        return number%modulo;
    }

    static modulo(number, modulo) {
        const quotient = Math.trunc(number / modulo);
        const product = Math.trunc(quotient * modulo);
        return number - product;
    }

    static constructInverseEq(inversedKey, affFunction, modulo) {
        inversedKey = (inversedKey > 0)? inversedKey : MathUtil.getPosOfModulo(inversedKey, modulo);
        let newIntercept = affFunction.intercept * -1 * inversedKey;
        newIntercept = (newIntercept > 0)? newIntercept : MathUtil.getPosOfModulo(newIntercept, modulo);
        return new AffFunction(inversedKey, newIntercept);
    }
}

module.exports = MathUtil;
