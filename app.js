let elementos = document.querySelectorAll('.player-options img')
let playerOption = ''
let enemyOptions = ''

validarVitoria = ()=>{

  let vencedor = document.querySelector('.vencedor')

  if(playerOption == 'papel')
    if(inimigOption == 'pedra'){
     vencedor.innerHTML = 'O player ganhou'
    }
    else if(inimigOption == 'tesoura'){
      vencedor.innerHTML = 'O inimigo ganhou';
    }
    else if(inimigOption == 'papel'){
      vencedor.innerHTML = 'O jogo empatou';
    }

    if(playerOption == 'tesoura')
      if(inimigOption == 'pedra'){
      vencedor.innerHTML = 'O inimigo ganhou'
      }
      else if(inimigOption == 'papel'){
        vencedor.innerHTML = 'O player ganhou';
      }
      else if(inimigOption == 'tesoura'){
        vencedor.innerHTML = 'O jogo empatou';
      }
   
    if(playerOption == 'pedra')
      if(inimigOption == 'papel'){
      vencedor.innerHTML = 'O inimigo ganhou'
      }
      else if(inimigOption == 'tesoura'){
        vencedor.innerHTML = 'O player ganhou';
      }
      else if(inimigOption == 'pedra'){
        vencedor.innerHTML = 'O jogo empatou';
      }
   
    
    
  
  //alert(`Você escolheu : ${playerOption}`)
  //alert(`O inimigo escolheu : ${inimigOption}`)
}

resetOpacity = ()=>{
  for (let i=0; i<elementos.length; i++){
    elementos[i].style.opacity = 0.3;
  }
}


resetInimigo = ()=>{
  for(let i=0; i<enemyOptions.length; i++){
    enemyOptions[i].style.opacity = 0.3
  }
}

inimigoJogar = ()=>{
  let random = Math.floor(Math.random()*3)
  
  const enemyOptions = document.querySelectorAll('.enemy-options img')
  resetInimigo();
  for(let i=0; i<enemyOptions.length; i++){
    if(i == random){
      enemyOptions[i].style.opacity = 1
      inimigOption = enemyOptions[i].getAttribute('option')
    }
  }
  validarVitoria()
}



for (let i=0; i<elementos.length; i++){
  elementos[i].addEventListener('click',((t)=>{
    resetOpacity()
    t.target.style.opacity = 1;
    playerOption = t.target.getAttribute('option')
    inimigoJogar();
    
  }))
}



