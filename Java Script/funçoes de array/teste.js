let api = [

{name: 'andre', id:1, likes: 'pineaple'},
{name: 'vitor', id:2, likes: 'jerry'},
{name: 'jones', id:3, likes: 'watermelon'},
{name: 'hebert', id:4, likes: 'banana'},
{name: 'michael', id:5, likes: 'apple'},
{name: 'jonsom', id:6, likes: 'orange'},
{name: 'vera', id:7, likes: 'melon'}

]

let search = api.find(api => api.id == 5, api => api.name.length == 5)
console.log(search)


