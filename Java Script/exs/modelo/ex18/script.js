function tabuada() {

   let num = document.querySelector('input.txtn')
   let tab = 1

      if (num.value.length == 0) {

           alert('por favor digite um numero!!')

      } else {

           let n = Number(num.value)
           tab = 0
           

           for (let t = tab; t <= 10 ; t++ ) {

           res.innerHTML += `</br></br>${n} x ${t} = ${n * t} </br>`

           }
       }

   }

