function separarParesEImpares(numeros) {
    const resultado = {
        pares: [],
        impares: []
    };

    numeros.forEach(numero => {
        if (numero % 2 == 0) {
            resultado.pares.push(numero);
        } else {
            resultado.impares.push(numero);
        }
    });

    return resultado;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultado = separarParesEImpares(numeros);
console.log(resultado);
