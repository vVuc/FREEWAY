//ator
let xAtor = 85
let yAtor = 366
let widhtAtor = 30
let heigtht = 30

function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,widhtAtor,heigtht)
}

function movimentaAtor(){
  
  if(keyIsDown(UP_ARROW)){
    
    yAtor-= 3
  }
  if(yAtor<368){
  if(keyIsDown(DOWN_ARROW)){
    
    yAtor+= 3
  }
  }
}
