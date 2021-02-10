const rockets = [

{ country: "brasil", launches: 32},
{ country: "holanda", launches: 20},
{ country: "china", launches: 19},
{ country: "japão", launches: 45 },
{ country: "eua", launches: 21}

]

const totalrockets = rockets.reduce((prevVal, elemento) => prevVal + elemento.launches, 0 )

console.log(totalrockets)