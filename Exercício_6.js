function substituirElemento(array, valorAntigo, novoValor) {
    for (let i = 0; i < array.length; i++) { 
        if (array[i] == valorAntigo) { 
            array[i] = novoValor; 
        }
    }
    return array; 
}


const arrayExemplo = [1, 3, 1, 4, 1, 5];
console.log(substituirElemento(arrayExemplo, 1, 6))

//o numero 1 sera substituido pelo 6 toda vez que aparecer 1.
