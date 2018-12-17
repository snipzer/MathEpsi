const MathUtil = require('../utils/MathUtil');

class PowerFunction {
    constructor(power) {
        this.power = parseInt(power);
    }

    execute(input) {
        return MathUtil.power(parseInt(input), this.power);
    }

    toString() {
        return `X^${this.power}`;
    }
}

module.exports = PowerFunction;
