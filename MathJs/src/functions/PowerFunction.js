const MathUtil = require('../utils/MathUtil');

class PowerFunction {
    constructor(power, intercept) {
        this.power = power;
        this.intercept = intercept || 0;
    }

    execute(input) {
        return MathUtil.power(input, this.power) + this.intercept;
    }

    executeModPow(input, modulo) {
        return MathUtil.modpow(input, this.power, modulo);
    }

    toString() {
        return `X^${this.power} + ${this.intercept}`;
    }
}

module.exports = PowerFunction;
