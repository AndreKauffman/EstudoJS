function series(prefixo, array){
  var resultado = []  
  for(let i = 0; i < array.length;i++){
      resultado.push(prefixo +' '+ array[i])
    }

    return console.log(resultado)
}

var harryPotterPrefixo = "Harry Potter";
var harryPotterSeries = [
  "e a Pedra Filosofal",
  "e a Câmara Secreta",
  "e o Prisioneiro de Azkaban",
  "e o Cálice de Fogo",
  "e a Ordem da Fênix",
  "e o Enigma do Príncipe",
  "e as Relíquias da Morte"
]

series(harryPotterPrefixo, harryPotterSeries)
