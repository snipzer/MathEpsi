const MathUtil = require('../utils/MathUtil');
const InversedKeyFinder = require('../utils/InversedKeyFinderUtil');
const ChineseRemainder = require('../process/ChineseRemainder');
const CREquationHolder = require('../process/ChineseRemainderEquationHolder');

//
console.log("Exercice 1");
let eq1 = "0 %25";
let eq2 = "-3 %31";

let a = 0;
let modA = 25;

console.log("a = "+a);
console.log("modA = "+modA);

let b = -3;
let modB = 31;

console.log("b = "+b);
console.log("modB = "+modB);

let k = modA * modB;

console.log('k = '+k);

let Ma = modB;
let Mb = modA;

console.log('Ma = '+Ma);
console.log('Mb = '+Mb);

console.log(MathUtil.getInfOfModulo(Ma, modA))
console.log(MathUtil.getInfOfModulo(Mb, modB))

let ya = new InversedKeyFinder(MathUtil.getInfOfModulo(Ma, modA)).execute(MathUtil.getInfOfModulo(Ma, modA), modA);
let yb = new InversedKeyFinder(MathUtil.getInfOfModulo(Mb, modB)).execute(MathUtil.getInfOfModulo(Mb, modB), modB);

console.log("ya = "+ya);
console.log("yb = "+yb);

let result = ((a * ya * Ma) + (b * yb * Mb)) % k;

console.log("Procedural result = " + MathUtil.getPosOfModulo(result, k));

const chineseRemainder = new ChineseRemainder([
    new CREquationHolder(0, 25),
    new CREquationHolder(-3, 31)
]);
console.log("Result with chineseRemainderProcess = " + chineseRemainder.execute());


// console.log("Exercice 2");
// let eq1 = "3 %5";
// let eq2 = "2 %7";
// let eq3 = "-3 % 11";
//
// let a = 3;
// let modA = 5;
//
// console.log("a = "+a);
// console.log("modA = "+modA);
//
// let b = 2;
// let modB = 7;
//
// console.log("b = "+b);
// console.log("modB = "+modB);
//
// let c = -3;
// let modC = 11;
//
// console.log("c = "+c);
// console.log("modC = "+modC);
//
// let k = modA * modB * modC;
//
// console.log('k = '+k);
//
// let Ma = modB*modC;
// let Mb = modA*modC;
// let Mc = modB*modA;
//
// console.log('Ma = '+Ma);
// console.log('Mb = '+Mb);
// console.log("Mc = "+Mc);
//
// console.log(MathUtil.getInfOfModulo(Ma, modA));
// console.log(MathUtil.getInfOfModulo(Mb, modB));
// console.log(MathUtil.getInfOfModulo(Mc, modC));
//
// let ya = MathUtil.findKey(MathUtil.getInfOfModulo(Ma, modA), modA, MathUtil.getInfOfModulo(Ma, modA));
// let yb = MathUtil.findKey(MathUtil.getInfOfModulo(Mb, modB), modB, MathUtil.getInfOfModulo(Ma, modA));
// let yc = MathUtil.findKey(MathUtil.getInfOfModulo(Mc, modC), modC, MathUtil.getInfOfModulo(Ma, modA));
//
// console.log("ya = "+ya);
// console.log("yb = "+yb);
// console.log("yc = "+yc);
//
// let result = ((a * ya * Ma) + (b * yb * Mb) + (c * yc * Mc)) % k;
// console.log(result);
// console.log(MathUtil.getPosOfModulo(result, k));
//
// const chineseRemainder = new ChineseRemainder([
//     new CREquationHolder(3, 5),
//     new CREquationHolder(2, 7),
//     new CREquationHolder(-3, 11),
// ]);
// console.log(chineseRemainder.execute());
//
// let eq1 = "2 %13";
// let eq2 = "-3 %17";
// let eq3 = "4 % 11";
//
// let a = 2;
// let modA = 13;
//
// console.log("a = "+a);
// console.log("modA = "+modA);
//
// let b = -3;
// let modB = 17;
//
// console.log("b = "+b);
// console.log("modB = "+modB);
//
// let c = 4;
// let modC = 11;
//
// console.log("c = "+c);
// console.log("modC = "+modC);
//
// let k = modA * modB * modC;
//
// console.log('k = '+k);
//
// let Ma = modB*modC;
// let Mb = modA*modC;
// let Mc = modB*modA;
//
// console.log('Ma = '+Ma);
// console.log('Mb = '+Mb);
// console.log("Mc = "+Mc);
//
// let inverseMa = MathUtil.getInfOfModulo(Ma, modA);
// let inverseMb = MathUtil.getInfOfModulo(Mb, modB);
// let inverseMc = MathUtil.getInfOfModulo(Mc, modC);
//
// console.log();
// console.log(inverseMa);
// console.log(inverseMb);
// console.log(inverseMc);
//
// let ya = new InversedKeyFinder(inverseMa).execute(inverseMa, modA);
// console.log("ya = "+ya);
// let yb = new InversedKeyFinder(inverseMb).execute(inverseMb, modB);
// console.log("yb = "+yb);
// let yc = new InversedKeyFinder(inverseMc).execute(inverseMc, modC);
// console.log("yc = "+yc);
//
// let result = ((a * ya * Ma) + (b * yb * Mb) + (c * yc * Mc)) % k;
//
// console.log(result);
// console.log("Procedural result = " + MathUtil.getPosOfModulo(result, k));
//
// const chineseRemainder = new ChineseRemainder([
//     new CREquationHolder(2, 13),
//     new CREquationHolder(-3, 17),
//     new CREquationHolder(4, 11),
// ]);
// console.log("Result with chineseRemainderProcess = " + chineseRemainder.execute());

console.log(MathUtil.power(2, 5));
