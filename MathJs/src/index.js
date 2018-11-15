const Rsa = require('./process/Rsa');

const rsa = new Rsa(43, 73);
const initialInput = 1236;


console.log("====================");
console.log(`Starting to encrypt "${initialInput}" with :`);
console.log(`n = ${rsa.n}`);
console.log(`m = ${rsa.m}`);
console.log(`e = ${rsa.e}`);
console.log(`d = ${rsa.d}`);
console.log(`encypterFunction : ${rsa.powerCrypter.toString()} mod(${rsa.n})`);
console.log(`decrypterFunction : ${rsa.powerDecrypter.toString()} mod(${rsa.n})`);
console.log("====================");

try {
    const cryptedInput = rsa.convert(initialInput, rsa.e, rsa.n);
    console.log(`Crypted input = ${cryptedInput}`);
    const decryptedInput = rsa.convert(cryptedInput, rsa.d, rsa.n);
    console.log(`Decrypted input = ${decryptedInput}`);
} catch(error) {
    console.log(error.message);
}

// let encryptedString = rsa.encrypt("AZERTY");
// console.log(encryptedString);
//
// console.log(rsa.decrypt(encryptedString));