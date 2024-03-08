var fundoEstrada;
var imagemAtor;
var carro1
var carro2;
var carro3;
var imagensCarros;

var somDaTrilha;
var somDaColisao;
var somDoPonto;

function preload(){
  fundoEstrada = loadImage("imagens/estrada.png")

  imagemAtor = loadImage("imagens/ator-1.png")
  
  
  carro1 = loadImage("imagens/carro-1.png")
  carro2 = loadImage("imagens/carro-2.png")
  carro3 = loadImage("imagens/carro-3.png")
  carro4 = loadImage("imagens/carro-4.png")
  carro5 = loadImage("imagens/carro-5.png")
  carro6 = loadImage("imagens/carro-6.png")
  
  
  imagensCarros = [carro1, carro2, carro3, carro4, carro5, carro6]


  somDaTrilha = loadSound("Sons/trilha.mp3")
  somDaColisao = loadSound("Sons/colidiu.mp3")
  somDoPonto = loadSound("Sons/pontos.wav")
  
}  