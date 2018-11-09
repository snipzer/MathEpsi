class StringUtil {
    constructor(isExtendedAlphabet) {
        isExtendedAlphabet = isExtendedAlphabet || false;
        if(isExtendedAlphabet) {
            this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,?;.:/!§ù%*µ^¨$£¤}=+])°@àç_è-[({#~é&²'
        } else {
            this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
    }

    getCharById(id) {
        if(id < 0 && id > this.alphabet.length-1) throw new Error("Error, parameter must be an integer beetween 0 and 25");
        return this.alphabet[id];
    };

    getIdByChar(char) {
        if(typeof char !== "string") throw new Error("Error, parameter must be a string");
        return this.alphabet.indexOf(char);
    }
}

module.exports = StringUtil;
