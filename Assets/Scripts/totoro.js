const container = document.querySelector(".container");
const usuario = document.querySelector("#usuario");
const senha = document.querySelector("#senha");
const button = document.querySelector(".login");

button.addEventListener("click", function(event) {
    event.preventDefault();
    const usuario_capturado = usuario.value;
    const senha_capturada = senha.value

    if (senha_capturada === "123456") {
        window.alert("Usuário " + usuario_capturado + " cadastrado com sucesso");
    } else {
        window.alert("Senha inválida");
    }
});