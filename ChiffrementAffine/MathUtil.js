const AffFunction = require('./AffFunction');

class MathUtil {
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

    // TODO avoir la notion de coefficient devant le modulo en plus de l'inverse du résultat
    static findKey(pente, modulo, eq) {
        eq = eq || [];
        if(pente === 1 && eq.length === 0) {
            return pente;
        } else {
            let resultat = Math.trunc(modulo / pente);
            let reste = MathUtil.modulo(modulo, pente);
            let inverseResultat = resultat * -1;
            eq.unshift({
                pente: pente,
                modulo: modulo,
                inverseResultat: inverseResultat,
                stringEq: `${reste} = ${modulo} + ${pente} * ${inverseResultat}`
            });
            if (reste === 1) {
                console.log(eq)
                if(eq.length === 1) {
                    return eq[0].inverseResultat;
                } else {
                    let finalResult = 1;
                    eq.forEach(obj => {
                        finalResult = finalResult * obj.inverseResultat
                    });
                    return finalResult +1;
                }
            }
            return MathUtil.findKey(reste, pente, eq);
        }
    }

    static constructInverseEq(inversedKey, affFunction, modulo) {
        return new AffFunction(inversedKey, MathUtil.getPosOfModulo(affFunction.intercept * -1 * inversedKey, modulo));
    }
}

module.exports = MathUtil;