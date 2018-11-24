const Readline = require('readline');
const Rsa = require('../process/Rsa');

// Pos test
// const p = 23;
// const p = 97;
// const initialInput = "{message: Hellow World !}";

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Choose the first primed number ? ', (p) => {
    rl.question('Choose the second primed number ? ', (q) => {
        rl.question('Write the message ? ', (initialInput) => {
            try {
                const rsa = new Rsa(p, q);
                console.log("====================");
                console.log(`Starting to encrypt "${initialInput}" with :`);
                console.log(`n = ${rsa.n}`);
                console.log(`m = ${rsa.m}`);
                console.log(`e = ${rsa.e}`);
                console.log(`d = ${rsa.d}`);
                console.log(`encypterFunction : ${rsa.powerCrypter.toString()} mod(${rsa.n})`);
                console.log(`decrypterFunction : ${rsa.powerDecrypter.toString()} mod(${rsa.n})`);
                console.log("====================");
                const cryptedInput = rsa.encrypt(initialInput);
                console.log(`Crypted input = ${cryptedInput}`);
                const decryptedInput = rsa.decrypt(cryptedInput);
                console.log(`Decrypted input = ${decryptedInput}`);
            } catch(error) {
                console.log(error.message);
            }
            rl.close();
        });
    });
});
