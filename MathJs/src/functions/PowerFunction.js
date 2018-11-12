const MathUtil = require('../utils/MathUtil');

class PowerFunction {
    constructor(power) {
        this.power = power;
    }

    execute(input) {
        return MathUtil.power(input, this.power);
    }

    executeModPow(input, modulo) {
        return
    }

    toString() {
        return `X^${this.power}`;
    }
}

module.exports = PowerFunction;
