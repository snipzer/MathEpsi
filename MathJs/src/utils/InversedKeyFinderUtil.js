const MathUtil = require('./MathUtil');

class InversedKeyFinder {
    constructor(originalPente) {
        this.originalPente = originalPente;
    }

    execute(pente, modulo, equationArray) {
        equationArray = equationArray || [];
        if(pente === 1 && equationArray.length === 0) return pente;
        let resultat = Math.trunc(modulo / pente);
        let reste = MathUtil.modulo(modulo, pente);
        let inverseReste = resultat * -1;
        this._fillEquationArray(equationArray, reste, pente, modulo, inverseReste);
        if (reste === 1) {
            return this._outExecution(equationArray);
        }
        return this.execute(reste, pente, equationArray);
    }

    _fillEquationArray(equationArray, reste, pente, modulo, inverseReste) {
        equationArray.unshift({
            reste: reste,
            pente: pente,
            modulo: modulo,
            inverseReste: inverseReste,
            stringEq: `${reste} = ${modulo} + ${pente} * ${inverseReste}`
        });
    }

    _outExecution(equationArray) {
        let equationDatas = this._scanEquations(equationArray);
        const originalEquationDatas = equationDatas;
        let quotientHolder = [];
        for (let i = equationArray.length - 1; i >= 0; i--) {
            let currentMultiplicater = equationArray[i].inverseReste;
            equationDatas.forEach(equationData => {
                quotientHolder = this._getQuotientsFromUpwardEquation(quotientHolder, equationArray, i, equationData);
                this._getQuotientsFromUpwardEquationWithModulo(equationArray, i, equationData, originalEquationDatas, quotientHolder);
                this._getQuotientsFromUpwardEquationWithSlope(equationArray, i, equationData, currentMultiplicater, quotientHolder);
            });
            if (equationArray[i].modulo === this.originalPente) {
                quotientHolder.push(1);
            }
        }
        return this._calculateResult(quotientHolder);
    }

    _scanEquations(equationArray) {
        let equationDatas = [];
        for (let i = 0; i < equationArray.length; i++) {
            equationDatas.push({
                reste: equationArray[i].reste,
                quotients: []
            });
            equationDatas[i].quotients.push(equationArray[i].inverseReste);
            if (equationArray[i].modulo === this.originalPente) {
                equationDatas[i].quotients.push(1);
            }
        }
        return equationDatas;
    }

    _getQuotientsFromUpwardEquation(quotientHolder, equationArray, i, equationData) {
        if (quotientHolder.length > 0 && (equationArray[i].pente === equationData.reste)) {
            equationData.quotients = quotientHolder;
            quotientHolder = [];
        }
        return quotientHolder;
    }

    _getQuotientsFromUpwardEquationWithModulo(equationArray, i, equationData, originalEquationDatas, quotientHolder) {
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

    _getQuotientsFromUpwardEquationWithSlope(equationArray, i, equationData, currentMultiplicater, quotientHolder) {
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

    _calculateResult(quotientHolder) {
        let finalResult = 0;
        quotientHolder.forEach(quotient => {
            finalResult = finalResult + quotient;
        });
        return finalResult;
    }
}

module.exports = InversedKeyFinder;