var linhas;
var colunas;
var bombas;
var matriz;
var tabela;
var pontuacao=0;

onload = registrandoEventos;// Responsável em carregar a página

function registrandoEventos() {
  /*
 Grupo CANADA.
 Função: registrandoEventos.
 Descrição: Esta função que puxa o inicioDeJogo.
 */
    inicioDeJogo();
}

function reiniciar(){
  /*
 Grupo CANADA.
 Função: reiniciar.
 Descrição: Botão que reinicia o jogo.
 */
  location.reload();
}

function inicioDeJogo() {
  /*
 Grupo CANADA
 Função: inicioDeJogo
 Descrição: Esta função que inicia todo o jogo (peça-chave)
 */
    tabela = document.getElementById("tabela");
    tabela.onclick = analisar; //evento (acontecimento) da tabela
    tabela.oncontextmenu = bandeira;
    //Definindo áreas do tabuleiro
    linhas = 16;
    colunas = 16;
    bombas = 25;
    pontuacao=0;
    //O que consiste no tabuleiro
    criarTabela(linhas, colunas);
    criarBombas();
    criarNumeros();
}

function bandeira(event) {
  /*
 Grupo CANADA
 Função: bandeira
 Descrição: Esta função que cria e retira a bandeira
 */
    var botaoDireito = event.target; //Muda a configuração do Botão direito
    var linha = botaoDireito.parentNode.rowIndex; // var l
    var coluna = botaoDireito.cellIndex; // var c
    if (botaoDireito.className === "blocked") {
        botaoDireito.className = "flag";
        botaoDireito.innerHTML = "&#128681;"; // Cria Emoji bandeira;
        }
    else if (botaoDireito.className === "flag") {
        botaoDireito.className = "blocked";
        botaoDireito.innerHTML = ""; //Tira a bandeira
    }
    return false;
}

function analisar(event) {
 /*
 Grupo CANADA
 Função: analisar
 Descrição: Esta função analisa as ações do jogador no tabuleiro
 */
    var cell = event.target;
    if (cell.className !== "flag") {
        var linha = cell.parentNode.rowIndex; // var l
        var coluna = cell.cellIndex; // var c
        switch (matriz[linha][coluna]) {
            case -1: //Casa da BOMBA!!!
                kaboom();
                cell.style.backgroundColor = "red";//cor vermelha na casa da bomba
                tabela.onclick = undefined;
                tabela.oncontextmenu = undefined;
                alert("Você perdeu!");//Ao clicar na bomba exibe a mensagem de derrota
                 pontuacao=0
                
                break;
            case 0: //Casa especial limparCelula
                limparCelulas(linha, coluna);
                 pontuacao=pontuacao+5
                break;
            default: //Uma casa
                cell.innerHTML = matriz[linha][coluna];
                cell.className = "n" + matriz[linha][coluna];
                pontuacao= pontuacao+5;
        }
         var pontos = document.getElementById("pontuacao");
        pontos.innerHTML=pontuacao;
        fimDeJogo();
    }
}

function kaboom()
/*
Grupo CANADA
Função: kaboom
Descrição: Esta função mostra as bombas no tabuleiro no fimDeJogo
*/
 {
    for (var i = 0; i < linhas; i++) {
        for (var j = 0; j < colunas; j++) {
            if (matriz[i][j] === -1) {
                var cell = tabela.rows[i].cells[j];
                cell.innerHTML = "&#128163;"; // Emoji bomba
                cell.className = "blank";
            }
        }
    }
}

function limparCelulas(l, c) {
  /*
 Grupo CANADA
 Função: limparCelulas
 Descrição: Esta função é a casa especial que revela os espaços no tabuleiro
 */
    for (var i = l - 1; i <= l + 1; i++) {
        for (var j = c - 1; j <= c + 1; j++) {
            if (i >= 0 && i < linhas && j >= 0 && j < colunas) {
                var cell = tabela.rows[i].cells[j];
                if (cell.className !== "blank") {
                  switch (matriz[i][j]) {
                        case -1: //casa da bomba
                            break;
                        case 0: //casa vazia especial
                            cell.innerHTML = "";
                            cell.className = "blank";
                            limparCelulas(i, j);
                            break;
                        default: //casa com número
                            cell.innerHTML = matriz[i][j];
                            cell.className = "n" + matriz[i][j];
                    }
                }
            }
        }
    }
}

function fimDeJogo() {
  /*
 Grupo CANADA
 Função: fimDeJogo
 Descrição: Esta função é o fimDeJogo (encerra o jogo com mensagem de vitória)
 */
    var cells = document.querySelectorAll(".blocked, .flag");
    if (cells.length === bombas) {
        kaboom(); //se não clicou em nenhuma bomba, você venceu
        tabela.onclick = undefined;
        tabela.oncontextmenu = undefined;
        alert("Você venceu!");
    }
}


function criarTabela(l,c){ //função que cria tabela(botão)
/*
 Grupo CANADA
 Função: criarTabela
 Descrição: Esta função cria os botões (células)
 */
  criarMatriz(l,c);
  var str="";
  for(var i=0; i<l; i++){
    str+="<tr>";
    for(var j=0; j<c; j++){
      str+= "<td class='blocked'></td>";
    }
    str+= "</tr>";    
  }
  tabela.innerHTML=str;
}

function criarMatriz(l,c){ //função que cria matriz
/*
 Grupo CANADA
 Função: criarMatriz
 Descrição: Esta função cria o campo/tabuleiro
 */
  matriz=[];
  for(var i=0; i<l; i++){
    matriz[i]= new Array(c).fill(0);
  }
  console.log(matriz);
}

function criarBombas() {
  /*
 Grupo CANADA
 Função: criarBombas
 Descrição: Esta função cria as bombas em espaços aleatórios
 */
    for (var i = 0; i < bombas;) {
        var linha = Math.floor((Math.random() * linhas)); //posição da bomba linha
        var coluna = Math.floor((Math.random() * colunas)); //posição da bomba coluna
        if (matriz[linha][coluna] === 0) {
            matriz[linha][coluna] = -1;
            i++;
        }
    }
}

function criarNumeros() {
  /*
 Grupo CANADA
 Função: criarNumeros
 Descrição: Esta função cria o número na célula (tabela)
 */
    for (var i = 0; i < linhas; i++) {
        for (var j = 0; j < colunas; j++) {
            if (matriz[i][j] !== -1) { //Valor diferente da bomba
                calcularNumero(i, j);
            }
        }
    }
}

function calcularNumero(l, c) {
  /*
 Grupo CANADA
 Função: calcularNumero
 Descrição: Esta função calcula quantas bombas há ao redor da célula (tabela)
 */  
    var count = 0;
    for (var i = l - 1; i <= l + 1; i++) {
        for (var j = c - 1; j <= c + 1; j++) {
            if (i >= 0 && i < linhas && j >= 0 && j < colunas) {
                if (matriz[i][j] === -1) {
                    count++;
                }
            }
        }
    }
    matriz[l][c] = count;
}