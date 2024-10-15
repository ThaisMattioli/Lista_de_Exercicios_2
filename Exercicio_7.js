function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;

    if (colunasA != linhasB) {
        throw new Error("O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz.");

      
    }

  
    const resultado = Array.from({ length: linhasA }, () => Array(colunasB).fill(0));

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return resultado;
}

const matrizA = [
    [1, 2],
    [3, 4]
];

const matrizB = [
    [5, 6],
    [7, 8]
];

console.log(multiplicarMatrizes(matrizA, matrizB));


//explicação do resultado:
// resultado[0][0] = (1 * 5) + (2 * 7) = 5 + 14 = 19
// resultado[0][1] = (1 * 6) + (2 * 8) = 6 + 16 = 22
//resultado[1][0] = (3 * 5) + (4 * 7) = 15 + 28 = 43
//resultado[1][1] = (3 * 6) + (4 * 8) = 18 + 32 = 50
// Saída: [[19, 22], [43, 50]]
