const Readline = require('readline');
const Crypter = require('./Crypter');


const modulo = 26;
const slope = 21;
const intercept = 2;
const originalString = "ICANDOTHIS";


const crypter = new Crypter(slope, intercept, modulo);


const crypted = crypter.convert(originalString, crypter.affinneCrypter);
const decrypted = crypter.convert(crypted, crypter.affinneDecrypter);

console.log("====================");
console.log(`Modulo : ${modulo}`);
console.log(`EncrypterFunction : ${crypter.affinneCrypter.toString()}`);
console.log(`DecrypterFunction : ${crypter.affinneDecrypter.toString()}`);
console.log("====================");
console.log(`Starting to encrypt : ${originalString}`);
console.log(`Crypted string : ${crypted}`);
console.log(`Decrypted string : ${decrypted}`);
console.log("====================");
console.log("====================");
