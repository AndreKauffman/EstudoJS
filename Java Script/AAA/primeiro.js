const personagens = ["Hermione", "Trinity", "Leia"]
const filmes = ["Harry Potter", "Matrix", "Star wars"]
const lancamentos = [2001, 1999, 1977]
const id = Math.round(Math.random() * (3 - 1) + 1)
console.log(id)
function filme(personagens, filmes, lancamentos, id){

    if(id == 1){

        personagens = personagens[0]
        filmes = filmes[0]
        lancamentos = lancamentos[0]

    }else if(id == 2){

        personagens = personagens[1]
        filmes = filmes[1]
        lancamentos = lancamentos[1]

    }else if(id == 3){

        personagens = personagens[2]
        filmes = filmes[2]
        lancamentos = lancamentos[2]

    }

    if(id < 1 || id > 3){
    return console.log("Essa não é uma opção válida.")
    }else{
    return console.log(personagens + " é um personagem do filme " +filmes+ " que estreou no cinema em " + lancamentos +".")

    }
}

filme(personagens, filmes, lancamentos, id)