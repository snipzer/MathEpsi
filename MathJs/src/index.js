const MathUtil = require('./utils/MathUtil');
const InversedKeyFinder = require('./utils/InversedKeyFinderUtil');
const ChineseRemainder = require('./process/ChineseRemainder');
const CREquationHolder = require('./process/ChineseRemainderEquationHolder');
const Rsa = require('./process/Rsa');

let rsa = new Rsa(7, 9);

console.log(rsa.convert("AZERTY", rsa.powerCrypter, rsa.n));
