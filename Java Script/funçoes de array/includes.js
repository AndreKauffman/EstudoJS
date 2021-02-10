/*console.log([1, 2 , 3, 4, 5, 6, NaN].includes(NaN))*/

/*const peaple = ['andre', 'julia', 'rayana']

console.log(peaple.includes('rayana'))*/

const peaple = [

{id: 12, name:'Andre', age:18},
{id: 14, name:'maria', age:48},
{id: 18, name:'envis', age:54},
{id: 19, name:'marcos', age:8},
{id: 2, name:'milla', age:1},
{id: 1, name:'rayana', age:19}

]

const filterpeaple = peaple.filter( peaple => peaple.name.includes('a') )

console.log(filterpeaple)