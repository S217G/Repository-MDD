let arreglo = [1, 2, 3, 4, 5];
let suma = arreglo.reduce(function(anteriores, valorActual) {
    return anteriores + valorActual;
}, 0);
console.log(suma);