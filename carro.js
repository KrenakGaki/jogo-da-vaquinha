//carro


var velocidadeCarro = [2, 4, 3.8, 3, 5, 3.2]
var xCarros = [600,600,600,-50, -50, -50]
var yCarros = [40,95,150, 210, 261, 314]
var compriCarro = 50;
var alturaCarro = 40;



//aparecer o carro
function mostraCarro(){
  for (var i = 0; i < imagensCarros.length; i = i + 1) {
    image(imagensCarros[i], xCarros[i], yCarros[i], compriCarro, alturaCarro)
  }
}

//movimento do carro
function movimentoCarro(){
 for (var i = 0; i < imagensCarros.length; i = i + 1)
 if (i >= imagensCarros.length / 2){
   xCarros[i] += velocidadeCarro[i]
 }
  else {
    xCarros[i] -= velocidadeCarro[i]
}
}
//repetição da volta
function loopCarro(){
  for (var i = 0; i < imagensCarros.length; i = i + 1){
    if (i >= imagensCarros.length / 2){
      if (xCarros[i] > 600){
        xCarros[i] = -50
      }
    }
    else{
      if (xCarros[i] < -50){
        xCarros[i] = 600
      }  
    }
  }
}  