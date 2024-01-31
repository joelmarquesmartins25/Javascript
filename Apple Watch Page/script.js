const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');

const corVerdeCipreste = {
    nome: "Verde-Cipreste",
    pasta: "imagens-verde-cipreste"
};

const corAzulInverno = {
    nome: "Azul-Inverno",
    pasta: "imagens-azul-inverno"
};

const corMeiaNoite = {
    nome: "Meia-Noite",
    pasta: "imagens-meia-noite"
};

const corEstelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
};

const corRosaClaro = {
    nome: "Rosa-Claro",
    pasta: "imagens-rosa-claro"
};

const opcoesCores = [corVerdeCipreste, corAzulInverno, corMeiaNoite, corEstelar, corRosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];
let corSelecionada = 1;
let tamanhoSelecionado = 1;
let imagemSelecionada = 1;

function atualizarTitulo(){
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
}

function atualizarImagem(){
    imagemVisualizacao.src= "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";
}

function trocarCor(){
    corSelecionada = document
        .querySelector('[name="opcao-cor"]:checked')
        .id
        .charAt(0);
    atualizarTitulo();
    atualizarImagem();
    nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;
}

function trocarTamanho(){
    tamanhoSelecionado = document
        .querySelector('[name="opcao-tamanho"]:checked')
        .id
        .charAt(0);
    atualizarTitulo();

    if (opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

function trocarImagem(){
    imagemSelecionada = document
        .querySelector('[name="opcao-imagem"]:checked')
        .id
        .charAt(0);    
    atualizarImagem();
}