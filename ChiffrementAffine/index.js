const MathUtil = require('./MathUtil');
const AffFunction = require('./AffFunction');
//
// console.log("Exercice 1");
// let eq1 = "0 %25";
// let eq2 = "-3 %31";
//
// let a = 0;
// let modA = 25;
//
// console.log("a = "+a);
// console.log("modA = "+modA);
//
// let b = -3;
// let modB = 31;
//
// console.log("b = "+b);
// console.log("modB = "+modB);
//
// let k = modA * modB;
//
// console.log('k = '+k);
//
// let Ma = modB;
// let Mb = modA;
//
// console.log('Ma = '+Ma);
// console.log('Mb = '+Mb);
//
// let ya = MathUtil.findKey(Ma, modA);
// let yb = MathUtil.findKey(Mb, modB);
//
// console.log("ya = "+ya);
// console.log("yb = "+yb);
//
// let result = ((a * ya * Ma) + (b * yb * Mb)) % k;
//
// console.log(result);

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
//
// let ya = MathUtil.findKey(MathUtil.getInfOfModulo(Ma, modA), modA);
// let yb = MathUtil.findKey(MathUtil.getInfOfModulo(Mb, modB), modB);
// let yc = MathUtil.findKey(MathUtil.getInfOfModulo(Mc, modC), modC);
//
// console.log("ya = "+ya);
// console.log("yb = "+yb);
// console.log("yc = "+yc);
//
// let result = ((a * ya * Ma) + (b * yb * Mb) + (c * yc * Mc)) % k;
//
// console.log(MathUtil.getPosOfModulo(result, k));


let eq1 = "2 %13";
let eq2 = "-3 %17";
let eq3 = "4 % 11";

let a = 2;
let modA = 13;

console.log("a = "+a);
console.log("modA = "+modA);

let b = -3;
let modB = 17;

console.log("b = "+b);
console.log("modB = "+modB);

let c = 4;
let modC = 11;

console.log("c = "+c);
console.log("modC = "+modC);

let k = modA * modB * modC;

console.log('k = '+k);

let Ma = modB*modC;
let Mb = modA*modC;
let Mc = modB*modA;

console.log('Ma = '+Ma);
console.log('Mb = '+Mb);
console.log("Mc = "+Mc);

console.log(MathUtil.getInfOfModulo(Ma, modA));
console.log(MathUtil.getInfOfModulo(Mb, modB));
console.log(MathUtil.getInfOfModulo(Mc, modC));


let ya = MathUtil.findKey(MathUtil.getInfOfModulo(Ma, modA), modA);
// let yb = MathUtil.findKey(MathUtil.getInfOfModulo(Mb, modB), modB);
// let yc = MathUtil.findKey(MathUtil.getInfOfModulo(Mc, modC), modB);

console.log("ya = "+ya);
// console.log("yb = "+yb);
// console.log("yc = "+yc);

// let result = ((a * ya * Ma) + (b * yb * Mb) + (c * yc * Mc)) % k;
//
// console.log(result);
// console.log(MathUtil.getPosOfModulo(result, k));