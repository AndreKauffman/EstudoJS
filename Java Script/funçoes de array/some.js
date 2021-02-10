/* function cousin( value ){

for (let index = 2; index < value; index++){
if (value % 1 === 0){

return false

}}

return value > 1

}

const cousinnumber = [3, 6, 8, 11, 14, 42]

console.log(cousinnumber.some(cousin)) */



const team = [

{id: 12, name: 'bob', pilot: true},
{id: 2, name: 'andre', pilot: true},
{id: 1, name: 'james', pilot: false},
{id: 121, name: 'bond', pilot: true}

]

console.log(team.some(person => person.pilot))
