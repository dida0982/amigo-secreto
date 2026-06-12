const input = document.getElementById('nome-amigo');
const listaAmigos = document.getElementById('lista-amigos');
const listaSorteio = document.getElementById('lista-sorteio');

let amigos = [];

function adicionar() {
    const nome = input.value.trim();

    if (!nome) return alert('Digite um nome válido!');
    if (amigos.includes(nome)) return alert('Esse nome já foi adicionado!');

    amigos.push(nome);
    listaAmigos.textContent = amigos.join(', ');
    input.value = '';
    input.focus();
}

function sortear() {
    if (amigos.length < 2)
        return alert('Adicione pelo menos 2 amigos!');

    const embaralhados = [...amigos];

    for (let i = embaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [embaralhados[i], embaralhados[j]] = [embaralhados[j], embaralhados[i]];
    }

    listaSorteio.innerHTML = embaralhados
        .map((amigo, i) => `${amigo} → ${embaralhados[(i + 1) % embaralhados.length]}`)
        .join('<br>');
}

function reiniciar() {
    amigos = [];
    listaAmigos.textContent = listaSorteio.innerHTML = input.value = '';
}
