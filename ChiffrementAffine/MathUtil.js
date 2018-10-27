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

    static findKey(pente, modulo, ORIGINAL_PENTE, equationArray) {
        equationArray = equationArray || [];
        if(pente === 1 && equationArray.length === 0) {
            return pente;
        } else {
            let resultat = Math.trunc(modulo / pente);
            let reste = MathUtil.modulo(modulo, pente);
            let inverseReste = resultat * -1;
            equationArray.unshift({
                reste: reste,
                pente: pente,
                modulo: modulo,
                inverseReste: inverseReste,
                stringEq: `${reste} = ${modulo} + ${pente} * ${inverseReste}`
            });
            if (reste === 1) {
                console.log(equationArray);
                let quotientHolder = [];
                let historiques = [];
                for(let i = 0;i < equationArray.length;i++) {
                    historiques.push({
                        reste: equationArray[i].reste,
                        quotients: []
                    });
                    historiques[i].quotients.push(equationArray[i].inverseReste);
                    if(equationArray[i].modulo === ORIGINAL_PENTE) {
                        historiques[i].quotients.push(1);
                    }
                }
                let originalHistoriques = historiques;
                for(let i = equationArray.length-1;i >= 0;i--) {
                    let currentMultiplicater = equationArray[i].inverseReste;
                    historiques.forEach(historique => {
                        if(quotientHolder.length > 0 && (equationArray[i].pente === historique.reste)) {
                            historique.quotients = quotientHolder;
                            quotientHolder = [];
                        }
                        if(equationArray[i].modulo === historique.reste) {
                            originalHistoriques.forEach(originalHistorique => {
                                if(originalHistorique.reste === historique.reste) {
                                    originalHistorique.quotients.forEach(quotient => {
                                        quotientHolder.push(quotient);
                                    })
                                }
                            })
                        }
                        if(equationArray[i].pente === historique.reste) {
                            let somme = 0;
                            for(let j = 0;j < historique.quotients.length;j++) {
                                somme = somme + historique.quotients[j] * currentMultiplicater;
                            }
                            if(somme !== 0) {
                                quotientHolder.push(somme)
                            }
                        }
                    });
                    if(equationArray[i].modulo === ORIGINAL_PENTE) {
                        quotientHolder.push(1);
                    }
                }
                let finalResult = 0;
                quotientHolder.forEach(quotient => {
                    finalResult = finalResult + quotient;
                });
                return finalResult;
            }
            return MathUtil.findKey(reste, pente, ORIGINAL_PENTE, equationArray);
        }
    }

    static constructInverseEq(inversedKey, affFunction, modulo) {
        return new AffFunction(inversedKey, MathUtil.getPosOfModulo(affFunction.intercept * -1 * inversedKey, modulo));
    }
}

module.exports = MathUtil;
