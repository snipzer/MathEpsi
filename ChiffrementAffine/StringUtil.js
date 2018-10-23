class StringUtil {
    constructor() {
        this.defaultAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    getCharById(id) {
        if(id < 0 && id > 25) throw new Error("Error, parameter must be an integer beetween 0 and 25");
        return this.defaultAlphabet[id];
    };

    getIdByChar(char) {
        if(typeof char !== "string") throw new Error("Error, parameter must be a string");
        return this.defaultAlphabet.indexOf(char.toUpperCase())
    }
}

module.exports = StringUtil;