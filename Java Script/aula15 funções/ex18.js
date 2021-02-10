let num = ['7', '9', '10']
num.pop(9)
num.push(45)
console.log(`o valor tem ${num.length} posiçoes`)
console.log(`o primeiro valor do vetor eh: ${num[1]}`)

for (let pos = 0; pos < num.length; pos++){

console.log(num[pos])

}

for (let pos in num) {

console.log(num[pos])

}