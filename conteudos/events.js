/*
const titulo = document.getElementById("titulo");

function imprimirTitulo (){
    console.log(titulo)
}
titulo.addEventListener("click", imprimirTitulo)
*/

const botao = document.querySelector(".botao");

botao.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log(botao);
    console.log(evento.target.className);
    document.getElementById("meu-formulario").style.background = "blue";
    document.querySelector("body").style.background = "green";
    document.getElementsByClassName("itens")[0].lastElementChild.innerHTML = "<h1>Alterado</h1>";
});

const inputNome = document.querySelector("#nome");

inputNome.addEventListener("input", (evento) => {
    document.querySelector(".container").append(inputNome.value);
    //console.log(inputNome.value);
});