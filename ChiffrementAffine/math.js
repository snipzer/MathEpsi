const Readline = require('readline');
const Crypter = require('./Crypter');
const MathUtil = require('./MathUtil');

// Pos test
// const modulo = 26;
// const slope = 21;
// const intercept = 2;
// const originalString = "ICANDOTHIS";

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the slope ? ', (slope) => {
    rl.question('What is the intercept ? ', (intercept) => {
        rl.question('What is the modulo ? ', (modulo) => {
            rl.question('What is the string to encrypt ? ', (string) => {
                const crypter = new Crypter(parseInt(slope, 10), parseInt(intercept, 10), parseInt(modulo, 10));

                const crypted = crypter.convert(string, crypter.affinneCrypter);
                const decrypted = crypter.convert(crypted, crypter.affinneDecrypter);

                console.log("====================");
                console.log(`Modulo : ${modulo}`);
                console.log(`EncrypterFunction : ${crypter.affinneCrypter.toString()}`);
                console.log(`DecrypterFunction : ${crypter.affinneDecrypter.toString()}`);
                console.log("====================");
                console.log(`Starting to encrypt : ${string}`);
                console.log(`Crypted string : ${crypted}`);
                console.log(`Decrypted string : ${decrypted}`);
                console.log("====================");
                console.log("====================");
                rl.close();
            });
        });
    });
});
