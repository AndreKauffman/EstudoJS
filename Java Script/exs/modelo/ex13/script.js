function carregar() {
var msg = document.querySelector('div#msg')
var img = document.querySelector('div#imagem')
var data = new Date()
var hora = data.getHours()
var nome = prompt('qual seu nome?')
var min = new Date()
var minutos = data.getMinutes()
msg.innerHTML = `agora são ${hora} horas e ${minutos} minutos, ${nome}`

    if(hora == 0 || hora < 12){

        imagem.src='dia.png'
        document.body.style.background ='#e2cd9f'

    } else if (hora == 12 ){

        imagem.src='tarde.png'  
        imagem.innerHTML = `agora é meio dia e ${minutos} minutos, ${nome}`
        document.body.style.background ='#b9846f'

    } else if ( hora > 12 ) {

        imagem.src='tarde.png' 
        document.body.style.background ='#b9846f'

    } else if (hora <= 18 ){

        imagem.src='tarde.png'
        document.body.style.background ='#b9846f'

    } else {

        imagem.src='noite.png'
        document.body.style.background ='black'

    }
}


