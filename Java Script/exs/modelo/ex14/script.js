function verificar(){
        
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("input.txtano")
    var res = document.querySelector("div.res")

        if( fano.value.length == 0 || fano.value > ano ){

            alert("verifique os dados")

        } else {

            var fsex = document.getElementsByName("radsex")
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')

             } if (fsex[1].checked) {

                genero = 'mulher'
            
             } else if (idade == 0 || idade <= 5) {

                img.setAttribute('src', 'bebemenino.jpg')

             } else if (idade == 5 || idade <= 13) {
            
                img.setAttribute('src', 'menino.jpg')

             } else if (idade == 13 || idade <= 25 ) {

                img.setAttribute('src', 'homem.jpg')

             } else if (idade == 25 || idade  == 45 ) {

                img.setAttribute('src', 'pai.jpg')

             } else {

                img.setAttribute('src', 'avo.jpg')

             } 
             
             
            if (fsex[0].checked) {
 
                genero = 'homem'

             } else if (idade == 0 || idade <= 5) {

                img.setAttribute('src', 'bebemenina.jpg')

             } else if (idade == 5 || idade <= 13) {
            
                img.setAttribute('src', 'menina.jpg')

             } else if (idade == 13 || idade <= 25 ) {

                img.setAttribute('src', 'mulher.jpg')

             } else if (idade == 25 || idade == 45 ) {

                img.setAttribute('src', 'mae.jpg')

             } else {

                img.setAttribute('src', 'avó.jpg')

             }
            

            res.style.textAlign ="center"
            res.innerHTML = `detectamos ${genero} com ${idade} anos`
            res.appendChild(img)

        }
    

    




