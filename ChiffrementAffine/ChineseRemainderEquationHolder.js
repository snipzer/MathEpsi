class ChineseRemainderEquationHolder {
    constructor(value, modulo) {
        this.value = value;
        this.modulo = (modulo > 0) ? modulo : modulo * -1;
        this.Mvalue = 1;
        this.Yvalue = null;
    }
}

module.exports = ChineseRemainderEquationHolder;
