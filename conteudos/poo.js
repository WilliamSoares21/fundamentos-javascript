const nome = "William" ;
const sobrenome = "Soares" ;
const dataNascimento = "02/01/1990";

const pessoaA = {
    nome: "William",
    sobrenome: "Soares",
    dataNascimento: new Date ("8-2-90"),

    obterNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    },
    obterAnoNascimento(){
        return `${this.dataNascimento.getFullYear()}`
    }
}
const pessoaB = {
    nome: "Paul",
    sobrenome: "Atreides",
    dataNascimento: new Date ("27-12-95"),

    obterNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    },
    obterAnoNascimento(){
        return `${this.dataNascimento.getFullYear()}`
    }
}

console.log(pessoaA.obterNomeCompleto());
console.log(pessoaA.dataNascimento);
console.log(pessoaA.dataNascimento.getFullYear());
console.log(pessoaA.obterAnoNascimento());


// Função construtora
function Pessoa(nome, sobrenome, dataNascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataNascimento = new Date(dataNascimento);
    this.amigos = [];
    this.obterAnoNascimento = () => {
        return this.dataNascimento.getFullYear();
    };
    this.addAmigo =  (amigo) => {
        if(!this.amigos.includes(amigo)){
            this.amigos.push(amigo);
            amigo.amigos.push(this);
        }
    };

    this.selecionarAmigos =  () => {
        return this.amigos.map((amigo) => {
            return amigo.obterNomeCompleto();
        });
    };

    /*
    o mesmo meotodo escrito acima, só que agora escrito com javascript moderno

    this.selecionarAmigos = () => {
        return this.amigos.map((amigo) => amigo.obterNomeCompleto();
        });
    };
    */ 
}

Pessoa.prototype.obterNomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}

const pessoa1 = new Pessoa ("Luke", "Skywalker", "7-8-80");
const pessoa2 = new Pessoa ("Leia", "Organa", "7-8-80");
const pessoa3 = new Pessoa ("Chani", "Kynes", "1-9-96");



console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa1.obterAnoNascimento());
console.log(pessoa1.obterNomeCompleto());
pessoa1.addAmigo(pessoa2);
pessoa1.addAmigo(pessoa3);
console.log(`Amigos de ${pessoa1.nome}: ` ,pessoa1.selecionarAmigos());
console.log(`Amigos de ${pessoa2.nome}: ` ,pessoa2.selecionarAmigos());
console.log(`Amigos de ${pessoa3.nome}: ` ,pessoa3.selecionarAmigos());

// Construtores internos

const nome2 = new String("Leto");
console.log(typeof nome2);
console.log(typeof "Pedro");

const numero = new Number(5);
console.log(typeof numero);
console.log(typeof 5);