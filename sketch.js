
function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(fundoEstrada);
  mostraAtor();
  mostraCarro();
  movimentoCarro();
  loopCarro();
  movimentoAtor();
  verificaColisao();
  mostraPontos();
  marcaPontos();
}


