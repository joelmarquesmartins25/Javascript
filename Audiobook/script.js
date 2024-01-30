const audioCapitulo = document.getElementById('audio-capitulo');
const botaoPlayPause = document.getElementById('play-pause');
const botaoAnterior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');
const capitulo = document.getElementById('capitulo');

const numeroCapitulos = 10;
let capituloAtual = 1;
let taTocando = false;

function voltarFaixa(){
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    tocarFaixa();
}

function proximaFaixa(){
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    tocarFaixa();
}

function tocarFaixa(){
    capitulo.innerText = "Capítulo " + capituloAtual;
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    audioCapitulo.play();
    taTocando = true;
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    botaoPlayPause.classList.remove('bi-play-circle-fill');
}

function pausarFaixa(){
    audioCapitulo.pause();
    taTocando = false;
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPassarFaixa(){
    if (taTocando === true) {
        pausarFaixa();
        return;
    }

    tocarFaixa();
} 

botaoPlayPause.addEventListener('click', tocarOuPassarFaixa);
botaoAnterior.addEventListener('click', voltarFaixa);
botaoProximo.addEventListener('click', proximaFaixa);