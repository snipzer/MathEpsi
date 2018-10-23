const AffFunction = require('./AffFunction');

class MathUtil {
    static getPosOfModulo(number, modulo) {
        number = number + modulo;
        if(number >= 0) {
            return number;
        }
        return MathUtil.getPosOfModulo(number, modulo);
    }

    static modulo(number, modulo) {
        const quotient = Math.trunc(number / modulo);
        const product = Math.trunc(quotient * modulo);
        return number - product;
    }

    static findKey(pente, modulo, eq) {
        eq = eq || [];
        let resultat = Math.trunc(modulo / pente);
        let reste = MathUtil.modulo(modulo, pente);
        let inverseResultat = resultat * -1;
        eq.unshift({
            inverseResultat: inverseResultat,
            stringEq: `${reste} = ${modulo} + ${pente} * ${inverseResultat}`
        });
        if (reste === 0) {
            eq.shift();
            let finalResult = 1;
            eq.forEach(obj => {
                finalResult = finalResult * obj.inverseResultat
            });
            return finalResult + 1;
        }
        return MathUtil.findKey(reste, pente, eq);
    }

    static constructInverseEq(inversedKey, affFunction, modulo) {
        return new AffFunction(inversedKey, MathUtil.getPosOfModulo(affFunction.intercept * -1 * inversedKey, modulo));
    }
}

module.exports = MathUtil;