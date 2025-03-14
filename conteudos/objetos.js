const pessoa = {
  nome: "William",
  sobrenome: "Soares",
  passatempos: ["músicas", "filmes", "esportes"],
  idade: 18,
  endereco: {
    rua: "Avenida dos Cravos",
    cidade: "Vitoria",
    estado: "ES"
  }

}
// Acessando uma propiedade
console.log(pessoa.nome);

// Acessando um elemento de uma propiedade do vetor 
console.log(pessoa.passatempos[0]);

// Acessando um propiedade de uma propiedade
console.log(pessoa.endereco.rua);

// Como definir uma nova propiedade
pessoa.email = "pedro@gmail.com";
console.log(pessoa);

// Como cirar um vetor de objetos
const tarefa = [
  {
    id: 1,
    texto: "Tirar o lixo",
    completo: false

  },
  {

    id: 2,
    texto: "Varrer o chão",
    completo: true

  },
  {

    id: 3,
    texto: "Lavar o carro",
    completo: false

  }

];


console.log(tarefa[1]); // acessando o vetor de obbjetos completo
console.log(tarefa[1].texto);// acessando uma propiedade de um elemento

// Como formatar uma propiedade de um elemento específico
console.log(JSON.stringify(tarefa));
console.log(JSON.stringify(pessoa));

for (let i = 0; i < tarefa.length; i++) { // Loop for tradicional: itera sobre o array 'tarefa' usando um índice 'i'
  console.log(`Tarefa ${i + 1}: ${tarefa[i].texto}`); // Exibe o número da tarefa (i + 1) e o texto da tarefa no console
}

for (let tarefas of tarefa) { // Loop for...of: itera diretamente sobre os elementos do array 'tarefa'
  console.log("Tarefa " + (tarefa.indexOf(tarefas) + 1) + " : " + tarefas.texto); // Exibe o número da tarefa e o texto da tarefa no console
}

