const meuFormulario = document.querySelector("#meu-formulario");

const inputNome = document.querySelector("#nome");

const inputEmail = document.querySelector("#email");

const mensagem = document.querySelector(".mensagem");

const usuarios = document.querySelector("#usuarios");


meuFormulario.addEventListener("submit", enviarFormulario);

function enviarFormulario (evento){
    evento.preventDefault();

    if(inputNome.value === "" || inputEmail.value === ""){
        mensagem.style.color = "red";
        mensagem.innerText = "Por gentileza, preencha todos os campos";

        setTimeout(() => mensagem.innerText = "", 3000);
    } else {
        const li = document.createElement("li");

        const span = document.createElement("span")

        span.innerText = (`${inputNome.value} : ${inputEmail.value}`);

        li.appendChild(span);

        usuarios.appendChild(li);

        inputNome.value = "";
        inputEmail.value = "";
    }

    
}