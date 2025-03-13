const x = 10;
const y = 2.5;
const nome = "William";
const sobrenome = "Soares";
const nao_definido = undefined;
const falso = false;
const verdade = true;
const nulo = null;

let nome_usuario = "Usul";
console.log(nome_usuario);
nome_usuario = "Atreides";
console.log(nome_usuario);

console.log(typeof x);// verificando tipo de const
console.log(x);
console.log(y);
console.log(nome);
console.log(sobrenome);
console.log(falso);
console.log(verdade)
console.log(nulo)


function dizer_ola(nome = "Fulano") {
  console.log("Olá " + nome);
}

// Funções setas
const dizer_oi = () => console.log("oi");



function criar_nome_completo(nome, sobrenome, sexo) {

  sexo = sexo.toUpperCase();

  if (sexo == "M") {
    return `Sr. ${nome} ${sobrenome}`;

  } else if (sexo == "F") {
    return `Sra. ${nome} ${sobrenome}`;

  } else {
    return `${nome} ${sobrenome}`;

  }

}

const nomeCompleto = criar_nome_completo("William", "Soares", "M");
const nomeCompleto2 = criar_nome_completo("Ana", "Catarina", "F");

dizer_ola(nomeCompleto);
dizer_ola(nomeCompleto2);

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero) {
  console.log(numero);
})

const letras = ["A", "B", "C", "D", "E"];

letras.forEach(function (letra, indice) {
  console.log(`${indice} : ${letra}`)
})

const tarefas = [
  {
    id: 1,
    texto: "Estudar",
    completo: false,
  },
  {
    id: 2,
    texto: "Trabalhar",
    completo: false,
  },
  {
    id: 3,
    texto: "Limpar a casa",
    completo: true,
  }
]

tarefas.forEach(function (tarefa, indice, minhasTarefas) {
  console.log(`${indice + 1}: ${tarefa.texto}`);
  console.log(minhasTarefas);

})

const vetorDeTextosDasTarefas = tarefas.map(function (tarefa){
  return `Tarefa: ${tarefa.id} : ${tarefa.texto}`;
});

console.log(vetorDeTextosDasTarefas);


const tarefa1 = tarefas.filter(function (tarefa){
  return tarefa.id === 1;
});

console.log(tarefa1);

const vetor = [1, 2, 3, 4];
const valorInicial = 0;

const soma = vetor.reduce(function (acumulador, elementoAtual){
  return acumulador + elementoAtual
}, valorInicial);

console.log(soma);















