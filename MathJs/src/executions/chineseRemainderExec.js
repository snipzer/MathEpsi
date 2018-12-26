const ChineseRemainder = require('../process/ChineseRemainder');
const CREquationHolder = require('../process/ChineseRemainderEquationHolder');
const Readline = require('readline');

// Pos test
// let eq1 = "0 %25";
// let eq2 = "-3 %31";
// result = 400;

// let eq1 = "2 %13";
// let eq2 = "-3 %17";
// let eq3 = "4 % 11";
// result = 1731;

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askEquationNumber = () => {
    return new Promise(resolve => {
        rl.question('How many equation ? ', (question) => {
            resolve(question);
        });
    });
};

const getSlope = () => {
    return new Promise(resolve => {
        rl.question('Choose the slope : ', (slope) => {
            resolve(slope)
        });
    });
};

const getModulo = () => {
    return new Promise(resolve => {
        rl.question('Choose the modulo : ', (modulo) => {
            resolve(modulo)
        });
    });
};

const main = async () => {
    let number = await askEquationNumber();
    let equationArray = [];
    for(let i = 1; i <= number; i++) {
        console.log(`For the equation n°: ${i}...`);
        let slope = await getSlope();
        let modulo = await getModulo();
        equationArray.push(new CREquationHolder(slope, modulo));
    }
    const chineseRemainder = new ChineseRemainder(equationArray);
    console.log(chineseRemainder.execute());
    rl.close();
};

main();