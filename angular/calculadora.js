'use-strict'

console.log('Hola mundo desde NodeJs');

var params = process.argv.slice(2);

var n1 = parseFloat(params[0]);
var n2 = parseFloat(params[1]);

var operaciones = `
    La suma: ${n1 + n2}
    La resta: ${n1 - n2}
    La multiplicacion: ${n1 * n2}
    La division: ${n1 / n2}
    El resto: ${n1 % n2}
`;

console.log(operaciones);