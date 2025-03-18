
// declaração da variável para armazenar os nomes dos amigos
let amigos = [];

// função para adicionar um amigo lista
function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const nomeAmigo = amigoInput.value.trim();

    // caso o campo do nome não seja preenchido exibe um alerta
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);

    amigoInput.value = "";

    exibirListaAmigos();
}

// função para mostrar os amigos na lista
function exibirListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// função sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

// função para resetar a lista de amigos
function resetarLista() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
}