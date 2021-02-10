async function getpeaple(){

const response = await fetch('https://randomuser.me/api/?results=5')

return response.json()

}



getpeaple().then(data => console.log(data))