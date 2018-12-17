class AffFunction {
    constructor(slope, intercept) {
        this.slope = parseInt(slope);
        this.intercept = parseInt(intercept);
    }

    execute(input) {
        return this.slope * parseInt(input) + this.intercept;
    }

    toString() {
        return `${this.slope} * X + ${this.intercept}`;
    }
}

module.exports = AffFunction;