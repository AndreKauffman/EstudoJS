var agora = new Date()
var hora = agora.getHours()


// console.log(`agora são ${hora} horas!! `)

if (hora <= 0 || hora <= 4) {

console.log(`agora são ${hora} e ainda é de madrugada`)

} else if (hora == 4 || hora < 11) {

console.log(`agora são ${hora} e ainda é cedo`)

} else if (hora == 11 || hora < 18) {

console.log(`agora são ${hora} e ainda já é tarde`)

} else if (hora == 18 || hora <=24) {

console.log(`agora são ${hora} VAI DORMI LOKI`)

}else{

console.log('n existe ess hora')

}