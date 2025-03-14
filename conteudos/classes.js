/*Função construtora

function Pessoa (nome, sobrenome, dataNascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataNascimento = new Date(dataNascimento);

    const obterNomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`;
    }

}
*/

// Classe ES6
class Pessoa {
    constructor(nome, sobrenome, dataNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = new Date(dataNascimento);
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

}

const pessoa1 = new Pessoa ("Julian", "Casablancas", "8-23-78");
console.log(pessoa1);
console.log(pessoa1.obterNomeCompleto());

class Client extends Pessoa {
    constructor (nome, sobrenome, dataNascimento, saldo) {
        super(nome, sobrenome, dataNascimento);
        this. saldo = saldo;
    }
}

const cliente1 = new Client("Lady", "Jessica", "5-10-1950", 10000);

console.log(cliente1);
console.log(cliente1.nome);
console.log(cliente1.sobrenome);
console.log(cliente1.dataNascimento);
console.log(cliente1.saldo);
console.log(cliente1.obterNomeCompleto());