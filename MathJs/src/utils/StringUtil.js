class StringUtil {
    constructor(isExtendedAlphabet) {
        isExtendedAlphabet = isExtendedAlphabet || false;
        if(isExtendedAlphabet) {
            this.alphabet = this._creatingExtendedAlphabet();
        } else {
            this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz123456789';
        }
    }

    getCharById(id) {
        if(id < 0 && id > this.alphabet.length-1) throw new Error(`Error, parameter must be an integer beetween 0 and ${this.alphabet.length-1}`);
        return this.alphabet[id];
    };

    getIdByChar(char) {
        if(typeof char !== "string") throw new Error("Error, parameter must be a string");
        return this.alphabet.indexOf(char);
    }

    _creatingExtendedAlphabet() {
        let alphabet = '';
        for(let i = 32; i <= 127; i++) {
            alphabet += String.fromCharCode(i);
        }
        return alphabet;
    }
}

module.exports = StringUtil;
