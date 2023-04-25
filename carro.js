//carros
let xCarros = [600,600,600,600,600,600]
let yCarros = [40,97,151,211,263,320]
let widhtCarros = 50
let heightCarros = 40
let colisao = false

//PONTOS
let meusPontos = 0

//velocidade dos carros
let speeds = [2,4,3.3,6,4.6,4.4]

function movimentaCarro(){
  for(let i = 0; i<imagemCarros.length;i++){
  xCarros[i] -= speeds[i]
  }
}

function mostraCarro(){
 
 for(let i = 0; i<imagemCarros.length;i++){   image(imagemCarros[i],xCarros[i],yCarros[i],widhtCarros,heightCarros)}
}

function voltaCarro(){
  for(let i = 0; i<imagemCarros.length;i++){ 
  if(verificaUtrapassagem(xCarros[i])){
   xCarros[i] = 600}
  }
  
  function verificaUtrapassagem(xCarro){
    return xCarro+50<0
  }
}

function verificaColisao(){

  for (let i = 0; i<imagemCarros.length; i++){
  colisao = collideRectCircle(xCarros[i],yCarros[i],widhtCarros, heightCarros,xAtor,yAtor+15,30)
    
    if(colisao){
      colidiu()
      if(meusPontos>0)
      meusPontos--
     }
  }
}

function colidiu(){
  
  yAtor = 366
  colisoes.play()
  
}

function incluiPontos(){
  textStyle(BOLDITALIC)
  textAlign(CENTER);
  textSize(25)
  fill(color(255,240,60))
  text(meusPontos,width/5, 27)
  
}

function marcaPonto(){
  
  if(yAtor<30){
    meusPontos++;
    pontos.play()
    colidiu()
  }
  
}
