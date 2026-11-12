
// Capturando os elementos HTML
const campoSenha = document.getElementById("senha");
const campoTamanho = document.getElementById("tamanho");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const especiais = document.getElementById("especiais");

const botaoGerar = document.getElementById("gerar");
const botaoLimpar = document.getElementById("limpar");
const botaoCopiar = document.getElementById("copiar");
const botaoMostrar = document.getElementById("mostrar");

const mensagem = document.getElementById("mensagem");


// Função para gerar a senha
function gerarSenha() {

    let caracteres = "";
    let senha = "";

    const tamanho = Number(campoTamanho.value);

    // Verificando o tamanho informado
    if (!Number.isInteger(tamanho) || tamanho < 1 || tamanho > 128) {
        mensagem.textContent = "Informe um tamanho entre 1 e 128.";
        mensagem.style.color = "red";
        return;
    }

    // Verificando as opções selecionadas
    if (maiusculas.checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (minusculas.checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numeros.checked) {
        caracteres += "0123456789";
    }

    if (especiais.checked) {
        caracteres += "!@#$%&*()_+-=[]{}?";
    }

    // Verificando se alguma categoria foi selecionada
    if (caracteres.length === 0) {
        mensagem.textContent = "Selecione pelo menos uma categoria!";
        mensagem.style.color = "red";
        return;
    }

    // Gerando a senha
    for (let i = 0; i < tamanho; i++) {

        const indice = Math.floor(
            Math.random() * caracteres.length
        );

        senha += caracteres[indice];
    }

    // Exibindo a senha
    campoSenha.value = senha;

    mensagem.textContent = "Senha gerada com sucesso!";
    mensagem.style.color = "green";
}


// Função para limpar a senha
function limparSenha() {

    campoSenha.value = "";
    mensagem.textContent = "";

}


// Função para copiar a senha
async function copiarSenha() {

    if (campoSenha.value === "") {
        mensagem.textContent = "Gere uma senha primeiro!";
        mensagem.style.color = "red";
        return;
    }

    try {
        await navigator.clipboard.writeText(campoSenha.value);

        mensagem.textContent = "Senha copiada com sucesso!";
        mensagem.style.color = "green";

    } catch (erro) {
        mensagem.textContent = "Não foi possível copiar a senha.";
        mensagem.style.color = "red";
    }
}


// Função para mostrar ou ocultar a senha
function mostrarSenha() {

    if (campoSenha.type === "password") {

        campoSenha.type = "text";
        botaoMostrar.textContent = "Ocultar";

    } else {

        campoSenha.type = "password";
        botaoMostrar.textContent = "Mostrar";

    }

}


// Eventos de clique
botaoGerar.addEventListener("click", gerarSenha);

botaoLimpar.addEventListener("click", limparSenha);

botaoCopiar.addEventListener("click", copiarSenha);

botaoMostrar.addEventListener("click", mostrarSenha);
