var resposta = []
    for(let i = 0; i < array.length;i++){
        if(num > array[i]){ 
            array[i].pop()
        }else if(num < array[i]){
            resposta.push(array[i])
        }
    }

    return resposta

