function buscarDivisivelPor(array, num){
  for(let i = 0; i < array.length;i++){
    if(array[i] <= 0){
      continue
    }
    if( array[i] % num == 0){
      return console.log( array[i])
    }else if(num == 100){

      return console.log("Nenhum número válido encontrado!")

    }

    }
}


buscarDivisivelPor( [0, 9, 4, 7, 128, 42, -1, 301, -5] )