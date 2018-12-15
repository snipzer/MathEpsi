const Readline = require('readline');
const MathUtil = require('../utils/MathUtil');
const ExtendedEuclidAlgorythm = require('../process/ExtendedEuclidAlgorythm');

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Choose the modulo... ', (modulo) => {
    rl.question(`Choose a number whose primed with ${modulo}... `, (number) => {
        try {
            if(number > modulo) {
                number = MathUtil.getInfOfModulo(number, modulo);
                console.log(`number > modulo, new number value => ${number}`);
            }
            if(number < 0) {
                number = MathUtil.getPosOfModulo(number, modulo);
                console.log(`number < 0, new number value => ${number}`);
            }
            console.log('Calculating the inversed...');
            let inversedNumber = new ExtendedEuclidAlgorythm(number).execute(number, modulo);
            console.log(`The inversed of ${number} at the modulo ${modulo} equals : ${inversedNumber}`);
            // Maximum call stack exceeded, don't now why for now
            // if(inversedNumber < 0) {
            //     console.log(inversedNumber);
            //     console.log(modulo);
            //     inversedNumber = MathUtil.getPosOfModulo(inversedNumber, modulo);
            //     console.log(`Inversed is negative, corresponding value at modulo ${modulo} equals : ${inversedNumber}`)
            // }
        } catch(error) {
            console.log(error.message);
        }
        rl.close();
    });
});
