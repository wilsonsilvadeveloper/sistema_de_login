var nome = document.getElementById("nome");
var user = document.getElementById("user");
var email = document.getElementById("email");
var senha = document.getElementById("senha");

var dados;

export function enviar() {
    dados = { nome :nome.value, User: user.value,Email: email.value, Password: senha.value}
    console.log(dados);

    return dados;
}
