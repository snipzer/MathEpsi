const AffFunction = require('../functions/AffFunction');

class MathUtil {
    constructor() {
        throw new Error('Don\'t instanciate an util class !');
    }

    static isNumbersPrimed(a, b) {
        if (b) {
            return MathUtil.isNumbersPrimed(b, a % b);
        } else {
            return (a === 1);
        }
    }

    static isPrime(num) {
        for(let i = 2; i < num; i++)
            if(num % i === 0) return false;
        return num !== 1 && num !== 0;
    }

    static power(number, power) {
        for(let i = 1; i < power; i++) {
            number = number + number;
        }
        return number;
    }

    static modpow(number, exp, m) {
        let result = 1;
        while (exp > 0) {
            if ((exp & 1) > 0) result = (result * number) % m;
            exp >>= 1;
            number = (number * number) % m;
        }
        return result;
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
}

module.exports = MathUtil;
