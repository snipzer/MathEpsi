const Dijktra = require('../process/Dijktra');

const graph = {
    start: {A: 5},
    A: {F: 12, B: 6},
    B: {A: 6, G: 8, D: 4, C: 3},
    C: {B: 3, E: 7},
    D: {B: 4, E: 5},
    F: {E: 4, A: 12, G: 3},
    G: {F: 3, B: 8, finish: 4},
    finish: {}
};

const dijktra = new Dijktra(graph);
console.log(dijktra.exec());