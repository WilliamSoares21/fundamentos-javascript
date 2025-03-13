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

const nomeCompleto = criar_nome_completo("William", "Soares", "m");
const nomeCompleto2 = criar_nome_completo("Ana", "Catarina", "F");



dizer_ola(nomeCompleto);
dizer_ola(nomeCompleto2);





























