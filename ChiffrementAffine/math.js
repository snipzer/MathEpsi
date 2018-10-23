class StringUtil {
  constructor(defaultAlphabet) {
    this.defaultAlphabet = defaultAlphabet;
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

class MathUtil {
  static getPosOfModulo(number, modulo) {
    number = number + modulo;
    if(number >= 0) {
      return number;
    }
    return MathUtil.getPosOfModulo(number, modulo);
  }

  static modulo(number, modulo) {
    const quotient = Math.trunc(number / modulo);
    const product = Math.trunc(quotient * modulo);
    return number - product;
  }

  static findKey(pente, modulo, eq) {
    eq = eq || [];
    let resultat = Math.trunc(modulo / pente);
    let reste = MathUtil.modulo(modulo, pente);
    let inverseResultat = resultat * -1;
    eq.unshift({
      inverseResultat: inverseResultat,
      stringEq: `${reste} = ${modulo} + ${pente} * ${inverseResultat}`
    });
    if (reste == 0) {
      eq.shift()
      let finalResult = 1;
      eq.forEach(obj => {
        finalResult = finalResult * obj.inverseResultat
      })
      return finalResult + 1;
    }
    return MathUtil.findKey(reste, pente, eq);
  }

  static constructInverseEq(inversedKey, affFunction, modulo) {
    return new AffFunction(inversedKey, MathUtil.getPosOfModulo(affFunction.intercept * -1 * inversedKey, 26));
  }
}

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

class Crypter {
  constructor(slope, intercept, modulo) {
    this.modulo = modulo;
    this.affinneCrypter = new AffFunction(slope, intercept);
    this.affinneDecrypter = MathUtil.constructInverseEq(MathUtil.findKey(slope, modulo), this.affinneCrypter, modulo);
    this.stringUtil = new StringUtil("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  execute(input, affineFunction) {
    return affineFunction.execute(input) % this.modulo;
  }

  convert(inputString, affineFunction) {
    let outputString = "";
    for(let index in inputString) {
      let currentChar = inputString[index];
      let convertCharId = this.execute(this.stringUtil.getIdByChar(currentChar), affineFunction);
      outputString = outputString + this.stringUtil.getCharById(convertCharId);
    }
    return outputString;
  }
}

// Test unitaire positif
// const encrypterSlope = 19;
// const encrypterIntercept = 8;

const modulo = 26
const encrypterSlope = 21;
const encrypterIntercept = 2;


const originalString = "ICANDOTHIS";

const crypter = new Crypter(encrypterSlope, encrypterIntercept, modulo);

const crypted = crypter.convert(originalString, crypter.affinneCrypter);
const decrypted = crypter.convert(crypted, crypter.affinneDecrypter);

console.log("====================");
console.log(`Modulo : ${modulo}`);
console.log(`EncrypterFunction : ${crypter.affinneCrypter.toString()}`);
console.log(`DecrypterFunction : ${crypter.affinneDecrypter.toString()}`);
console.log("====================");
console.log(`Starting to encrypt : ${originalString}`)
console.log(`Crypted string : ${crypted}`);
console.log(`Decrypted string : ${decrypted}`);
console.log("====================");
console.log("====================");
