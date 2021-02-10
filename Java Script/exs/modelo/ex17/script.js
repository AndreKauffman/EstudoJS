function contar() {


    let inicio = document.querySelector('input.inicio')
    let fim = document.querySelector('input.fim')
    let passo = document.querySelector('input.passo')

        if (inicio.value.length <= 0 || fim.value.length <= 0 || passo.value.length <= 0 ) {

            window.alert('ta chapando irmao??')
            inicio.value.length == 0 
            fim.value.length == 0 
            passo.value.length = 0
            

        } else {

           res.innerHTML = "contando: "

           let i = Number(inicio.value)
           let f = Number(fim.value)
           let p = Number(passo.value)
           
             if(i < f) {

             for (let c = i;  c <= f ; c += p) {

             res.innerHTML += `${c}`

           } 
        } else {

            for (let c = i;  c >=f ; c -= p){

            res.innerHTML += `${c}`

            }

        }

    }
}