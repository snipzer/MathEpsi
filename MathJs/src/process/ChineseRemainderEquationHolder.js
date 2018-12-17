class ChineseRemainderEquationHolder {
    constructor(value, modulo) {
        this.value = parseInt(value);
        modulo = parseInt(modulo);
        this.modulo = (modulo > 0) ? modulo : modulo * -1;
        this.Mvalue = 1;
        this.Yvalue = null;
    }
}

module.exports = ChineseRemainderEquationHolder;
