const ChineseRemainder = require('../process/ChineseRemainder');
const CREquationHolder = require('../process/ChineseRemainderEquationHolder');

// Pos test
// let eq1 = "0 %25";
// let eq2 = "-3 %31";
// result = 400;

// let eq1 = "2 %13";
// let eq2 = "-3 %17";
// let eq3 = "4 % 11";
// result = 1731;

const chineseRemainder = new ChineseRemainder([
    new CREquationHolder(0, 25),
    new CREquationHolder(-3, 31),
]);

console.log(chineseRemainder.execute());