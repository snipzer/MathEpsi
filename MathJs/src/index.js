const Rsa = require('./process/Rsa');

const rsa = new Rsa(7, 11);
const initialString = "AZERTYAZERTY";


console.log("====================");
console.log(`Starting to encrypt "${initialString}" with :`);
console.log(`n = ${rsa.n}`);
console.log(`m = ${rsa.m}`);
console.log(`e = ${rsa.e}`);
console.log(`d = ${rsa.d}`);
console.log(`encypterFunction : ${rsa.powerCrypter.toString()} mod(${rsa.n})`);
console.log(`decrypterFunction : ${rsa.powerDecrypter.toString()} mod(${rsa.n})`);
console.log("====================");

const cryptedString = rsa.convert(initialString, rsa.e, rsa.n);
console.log(`Crypted string = ${cryptedString}`);

const decryptedString = rsa.convert(cryptedString, rsa.d, rsa.n);
console.log(`Decrypted string = ${decryptedString}`);
