class AffFunction {
    constructor(slope, intercept) {
        this.slope = slope;
        this.intercept = intercept;
    }

    execute(input) {
        return this.slope * input + this.intercept;
    }

    toString() {
        return `${this.slope} * X + ${this.intercept}`;
    }
}

module.exports = AffFunction;