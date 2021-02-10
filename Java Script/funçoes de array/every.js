/* const number = [ 15,65,42,]

const more = number.every(elemento => elemento > 10)

console.log(more) */

const age = [

    {id: 45, name: 'andre', age: 19},
    {id: 87, name: 'maria', age: 1},
    {id: 63, name: 'jones', age: 1},
    {id: 43, name: 'natan', age: 27},
    {id: 53, name: 'jorge', age: 28}

]

const moreid = age.every(elemento => elemento.id > 18)
const morename = age.every(elemento => elemento.name.length == 5 )
const more18 = age.every(elemento => elemento.age > 18)

console.log(moreid)
console.log(morename)
console.log(more18)
