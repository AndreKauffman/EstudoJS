let num = document.querySelector('input.txtn1')
let lista = document.querySelector('select.list')
let res = document.querySelector('div#res')
let valores = []


function isnumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100){

    return true

    } else {

    return false

    }

}

function inlista(n, l) {

    if (l.indexOf(Number(n)) != -1 ) {

    return true

    }else{

    return false

    }

}


function add() {

    if(isnumero(num.value) && !inlista(num.value, valores)){

    valores.push(Number(num.value))
    let iten = document.createElement('option')
    iten.text = `valor ${num.value} adicionado`
    lista.appendChild(iten)
    res.innerHTML = ''

    } else {

    alert('esse numero ja esta na lista ouuu n é valido!!')

    }
    num.value = ''
    num.focus()
}

function finalizar() {

    if (valores.length == 0 ){

        alert("adicione valores")

    } else {

        let total = valores.length
        res.innerHTML = ''

        if (total == 1 ) {

        res.innerHTML += `<p>Ao todo, temos um numero cadastrado.</p>`

        } else {

        res.innerHTML += `<p>Ao todo, temos ${total} numeros cadastrados.</p>`

        }


    }

}
