function ordenarPorIdade(pessoas) {
    return pessoas.sort((a, b) => a.idade - b.idade);
}

const pessoas = [
  { nome: "Thaís", idade: 20 },
  { nome: "Daniel", idade: 21 },
  { nome: "Carlos", idade: 50 },
  { nome: "Diana", idade: 38 }
];

const resultado = ordenarPorIdade(pessoas);
console.log(resultado);