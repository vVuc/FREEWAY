//imagens e sons do jogo
let imagemDoAtor;
let imagemDaEstrada;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let trilha;
let colisoes;
let pontos;

function preload(){
  
  imagemDaEstrada = loadImage("imagens/estrada.png");
   imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  trilha = loadSound("sons/trilha.mp3")
  colisoes = loadSound("sons/colidiu.mp3")
  pontos = loadSound("sons/pontos.wav")
  
  imagemCarros = [imagemCarro1,imagemCarro2,imagemCarro3,imagemCarro1,imagemCarro2,imagemCarro3]
}