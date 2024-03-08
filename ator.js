//ator
var xAtor = 100;
var yAtor = 366;
var colisao = false;
var meusPontos = 0;


function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30)
}

function movimentoAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
    
  }
   if (keyIsDown(DOWN_ARROW)){
     if(podeSeMover()){
      yAtor += 3;
     }
  }
}

function verificaColisao(){
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagensCarros.length; i = i + 1){
    if (i >= imagensCarros.length / 2){
  colisao = collideRectCircle(xCarros[i],yCarros[i], compriCarro, alturaCarro, xAtor, yAtor, 15)
    }
      else {
        colisao = collideRectCircle(xCarros[i],yCarros[i], compriCarro, alturaCarro, xAtor, yAtor, 30)
      }
    if (colisao)  {
         voltaComeço();
          somDaColisao.play();
          if (meusPontos >0){
              meusPontos -= 1;
      }
    }
  }
}
function voltaComeço(){
  yAtor= 366;
}

function mostraPontos () {
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60))
  text(meusPontos, width/5, 27);
}

function marcaPontos() {
 if (yAtor < 15) {
   meusPontos += +1;
   somDoPonto.play();
   voltaComeço();
 } 
}

function podeSeMover() {
  return yAtor < 366;
}