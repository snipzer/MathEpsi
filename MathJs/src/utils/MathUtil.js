const BigInt = require('big-integer');

class MathUtil {
    constructor() {
        throw new Error('Don\'t instanciate an util class !');
    }

    static isNumbersPrimed(a, b) {
        a = parseInt(a);
        b = parseInt(b);
        if (b) {
            return MathUtil.isNumbersPrimed(b, a % b);
        } else {
            return (a === 1);
        }
    }

    static isPrime(number) {
        number = parseInt(number);
        for(let i = 2; i < number; i++)
            if(number % i === 0) return false;
        return number !== 1 && number !== 0;
    }

    static power(number, power) {
        number = parseInt(number);
        power = parseInt(number);
        for(let i = 1; i < power; i++) {
            number = number + number;
        }
        return number;
    }

    static modpow(number, exp, m) {
        return BigInt(number).modPow(exp, m);
    }

    // TODO Non fonctionnel avec les grands nombres premiers (exemple: 21313, 21317)
    // static modpow(number, exp, m) {
    //     let result = 1;
    //     number = parseInt(number);
    //     while (exp > 0) {
    //         if ((exp & 1) > 0) result = (result * number) % m;
    //         exp >>= 1;
    //         number = (number * number) % m;
    //     }
    //     return result;
    // }

    static getPosOfModulo(number, modulo) {
        number = parseInt(number) + parseInt(modulo);
        if(number >= 0) {
            return number;
        }
        return MathUtil.getPosOfModulo(number, modulo);
    }

    static getInfOfModulo(number, modulo) {
        number = parseInt(number);
        modulo =  parseInt(modulo);
        return number%modulo;
    }

    static modulo(number, modulo) {
        number = parseInt(number);
        modulo = parseInt(modulo);
        const quotient = Math.trunc(number / modulo);
        const product = Math.trunc(quotient * modulo);
        return number - product;
    }
}

module.exports = MathUtil;
