const number = [ 54, 5, 5, 65, 8, 23, 23, 56 ]

const numberduplicated = number.filter((elem, index, arr) => arr.indexOf(elem) === index)

console.log(numberduplicated)