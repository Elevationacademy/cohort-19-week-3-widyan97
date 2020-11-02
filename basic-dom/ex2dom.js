
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

const checkReservation= function(){
    const name = document.getElementById("text").value ;
    if(reservations[name] && !reservations[name].claimed) {
        alert("Welcome , " + name)
      } else if (reservations[name] && reservations[name].claimed){
        alert("Hmm, someone already claimed this reservation")
      } else if (!reservations[name]) {
        alert("You have no reservation")
      }	
        console.log(reservations)
    }


    