const Rsa = require('./process/Rsa');

const rsa = new Rsa(23, 97);
const initialInput = "{message:HellowWorld}";


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
    const cryptedInput = rsa.encrypt(initialInput);
    console.log(`Crypted input = ${cryptedInput}`);
    const decryptedInput = rsa.decrypt(cryptedInput);
    console.log(`Decrypted input = ${decryptedInput}`);
} catch(error) {
    console.log(error.message);
}