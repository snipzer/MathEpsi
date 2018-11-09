const MathUtil = require('./MathUtil');
const InversedKeyFinder = require('./InversedKeyFinder');

class ChineseRemainder {
    constructor(equations) {
        if(equations.length < 2) throw new Error('You need at least 2 equations for this algorythm');
        this.finalModulo = 1;
        equations.forEach(equation => {
            this.finalModulo = this.finalModulo * equation.modulo;
        });
        this.equations = equations;
    }

    execute() {
        for(let i = 0;i < this.equations.length;i++) {
            this._calculateMValue(i);
            this._calculateYValue(this.equations[i]);
        }
        return this._calculateResultat();
    }

    _calculateMValue(index) {
        let currentEquation = this.equations.splice(index, 1)[0];
        this.equations.forEach(equation => {
            currentEquation.Mvalue = currentEquation.Mvalue * equation.modulo;
        });
        this.equations.splice(index, 0, currentEquation);
    }

    _calculateYValue(equation) {
        let mValue = equation.Mvalue;
        if(mValue > equation.modulo) {
            mValue = MathUtil.getInfOfModulo(equation.Mvalue, equation.modulo);
        }
        if(mValue < 0) {
            mValue = MathUtil.getPosOfModulo(equation.Mvalue, equation.modulo);
        }
        equation.Yvalue = new InversedKeyFinder(mValue).execute(mValue, equation.modulo);
    }

    _calculateResultat() {
        let finalResultat = 0;
        this.equations.forEach(equation => {
            finalResultat = (equation.value * equation.Yvalue * equation.Mvalue) + finalResultat;
        });
        finalResultat = finalResultat % this.finalModulo;
        return this._normalizeResultat(finalResultat);
    }

    _normalizeResultat(finalResultat) {
        if(finalResultat > this.finalModulo) {
            finalResultat = MathUtil.getInfOfModulo(finalResultat, this.finalModulo);
        }
        if(finalResultat < 0) {
            finalResultat = MathUtil.getPosOfModulo(finalResultat, this.finalModulo);
        }
        return finalResultat;
    }

}

module.exports = ChineseRemainder;
