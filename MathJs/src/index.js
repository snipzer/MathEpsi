const Rsa = require('./process/Rsa');

let rsa = new Rsa(2, 13);

console.log("====================");
console.log("Starting to encrypt with :");
console.log(`n = ${rsa.n}`);
console.log(`m = ${rsa.m}`);
console.log(`e = ${rsa.e}`);
console.log(`d = ${rsa.d}`);
console.log(`encypterFunction : ${rsa.powerCrypter.toString()}`);
console.log(`decrypterFunction : ${rsa.powerDecrypter.toString()}`);
console.log("====================");

console.log(rsa.convert("AZERTY", rsa.powerCrypter, rsa.n));
