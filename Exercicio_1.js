function contarOcorrencias(array) {
    const frequencias = {};

    array.forEach(numero => {
        if (frequencias[numero]) {
            frequencias[numero]++;
        } else {
            frequencias[numero] = 1;
        }
    });

    return frequencias;
}

const numeros = [1, 2, 2, 3, 1, 4, 3, 3];
const resultado = contarOcorrencias(numeros);
console.log(resultado); 

