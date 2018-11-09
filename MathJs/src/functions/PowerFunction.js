const MathUtil = require('../utils/MathUtil');

class PowerFunction {
    constructor(power, intercept) {
        this.power = power;
        this.intercept = intercept;
    }

    execute(input) {
        return MathUtil.power(input, this.power) + this.intercept;
    }

    toString() {
        return `X^${this.power} + ${this.intercept}`;
    }
}

module.exports = PowerFunction;