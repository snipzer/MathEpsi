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

    static findKey(pente, modulo, ORIGINAL_PENTE, equationArray) {
        equationArray = equationArray || [];
        if(pente === 1 && equationArray.length === 0) return pente;
        let resultat = Math.trunc(modulo / pente);
        let reste = MathUtil.modulo(modulo, pente);
        let inverseReste = resultat * -1;
        MathUtil._fillEquationArray(equationArray, reste, pente, modulo, inverseReste);
        if (reste === 1) {
            return MathUtil._outExecution(equationArray, ORIGINAL_PENTE);
        }
        return MathUtil.findKey(reste, pente, ORIGINAL_PENTE, equationArray);
    }

    static _fillEquationArray(equationArray, reste, pente, modulo, inverseReste) {
        equationArray.unshift({
            reste: reste,
            pente: pente,
            modulo: modulo,
            inverseReste: inverseReste,
            stringEq: `${reste} = ${modulo} + ${pente} * ${inverseReste}`
        });
    }

    static _outExecution(equationArray, ORIGINAL_PENTE) {
        let equationDatas = MathUtil._scanEquations(equationArray, ORIGINAL_PENTE);
        const originalEquationDatas = equationDatas;
        let quotientHolder = [];
        for (let i = equationArray.length - 1; i >= 0; i--) {
            let currentMultiplicater = equationArray[i].inverseReste;
            equationDatas.forEach(equationData => {
                quotientHolder = MathUtil._getQuotientsFromUpwardEquation(quotientHolder, equationArray, i, equationData);
                MathUtil._getQuotientsFromUpwardEquationWithModulo(equationArray, i, equationData, originalEquationDatas, quotientHolder);
                MathUtil._getQuotientsFromUpwardEquationWithSlope(equationArray, i, equationData, currentMultiplicater, quotientHolder);
            });
            if (equationArray[i].modulo === ORIGINAL_PENTE) {
                quotientHolder.push(1);
            }
        }
        return MathUtil._calculateResult(quotientHolder);
    }

    static _scanEquations(equationArray, ORIGINAL_PENTE) {
        let equationDatas = [];
        for (let i = 0; i < equationArray.length; i++) {
            equationDatas.push({
                reste: equationArray[i].reste,
                quotients: []
            });
            equationDatas[i].quotients.push(equationArray[i].inverseReste);
            if (equationArray[i].modulo === ORIGINAL_PENTE) {
                equationDatas[i].quotients.push(1);
            }
        }
        return equationDatas;
    }

    static _getQuotientsFromUpwardEquation(quotientHolder, equationArray, i, equationData) {
        if (quotientHolder.length > 0 && (equationArray[i].pente === equationData.reste)) {
            equationData.quotients = quotientHolder;
            quotientHolder = [];
        }
        return quotientHolder;
    }

    static _getQuotientsFromUpwardEquationWithModulo(equationArray, i, equationData, originalEquationDatas, quotientHolder) {
        if (equationArray[i].modulo === equationData.reste) {
            originalEquationDatas.forEach(originalEquationData => {
                if (originalEquationData.reste === equationData.reste) {
                    originalEquationData.quotients.forEach(quotient => {
                        quotientHolder.push(quotient);
                    })
                }
            })
        }
    }

    static _getQuotientsFromUpwardEquationWithSlope(equationArray, i, equationData, currentMultiplicater, quotientHolder) {
        if (equationArray[i].pente === equationData.reste) {
            let somme = 0;
            for (let j = 0; j < equationData.quotients.length; j++) {
                somme = somme + equationData.quotients[j] * currentMultiplicater;
            }
            if (somme !== 0) {
                quotientHolder.push(somme)
            }
        }
    }

    static _calculateResult(quotientHolder) {
        let finalResult = 0;
        quotientHolder.forEach(quotient => {
            finalResult = finalResult + quotient;
        });
        return finalResult;
    }

    static constructInverseEq(inversedKey, affFunction, modulo) {
        inversedKey = (inversedKey > 0)? inversedKey : MathUtil.getPosOfModulo(inversedKey, modulo);
        let newIntercept = affFunction.intercept * -1 * inversedKey;
        newIntercept = (newIntercept > 0)? newIntercept : MathUtil.getPosOfModulo(newIntercept, modulo);
        return new AffFunction(inversedKey, newIntercept);
    }
}

module.exports = MathUtil;
