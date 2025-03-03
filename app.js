const nomeAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];
let sorteados = [];

function adicionarAmigo() {
    const nome = nomeAmigo.value.trim();

    if (nome.length === 0) {
        alert("Por favor, digite um nome válido!");
        return;
    };
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado! Digite um nome diferente.");
        return;
    
    } 
    
    amigos.push(nome);
    atualizarLista();
    
    nomeAmigo.value = "";
    nomeAmigo.focus();
    
};

nomeAmigo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        adicionarAmigo();
    }
  });


function atualizarLista() {
    listaAmigos.innerHTML = ""; 

    let linhas = Math.ceil(amigos.length / 4); 

    for (let i = 0; i < linhas; i++) {
        let linha = document.createElement("div");
        linha.classList.add("linha-nomes");

        for (let j = 0; j < 4; j++) {
            let index = i * 4 + j;
            if (index < amigos.length) {
                let nomeItem = document.createElement("span");
                nomeItem.classList.add("nome-item");
                nomeItem.textContent = amigos[index];
                linha.appendChild(nomeItem);
            }
        }

        listaAmigos.appendChild(linha);
    }
}

function sortearAmigo() {
    if (amigos.length < 3) {
        alert(`Digite ${3 - amigos.length} amigo(s) para sortear!`);
        return;
        
    }; 

    const amigosNaoSorteados = amigos.filter(amigo => !sorteados.includes(amigo));

    if (amigosNaoSorteados.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        return;
    };

    const sorteioAmigo = amigosNaoSorteados[Math.floor(Math.random() * amigosNaoSorteados.length)];

    sorteados.push(sorteioAmigo);
    
    resultado.textContent = `O amigo sorteado é: ${sorteioAmigo}`;
    
    const sorteioBorda = document.querySelector(".sorteioBorda");
        if (sorteioBorda) {
            sorteioBorda.classList.add("border-ativada");
        }

};

function button_reset() {
    listaAmigos.innerHTML = "";
    resultado.textContent = "";
    
    const sorteioBorda = document.querySelector(".sorteioBorda");
        if(sorteioBorda) {
            sorteioBorda.classList.remove("border-ativada");
        }
    
    amigos = [];
    sorteados = [];

    nomeAmigo.value = "";
    nomeAmigo.focus();
};
    

 
