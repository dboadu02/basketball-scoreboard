//declare variables to hold scores
let pointHome = 0
let pointGuest = 0

//interact with DOM elements
let homeScoreEl = document.getElementById("homescore-el");
let guestScoreEl = document.getElementById("guestscore-el");


//change scores for home or guest
export function addPoints(team, points) {
  if (team === 'home') {
    pointHome += points;
    homeScoreEl.textContent = pointHome;
    console.log(pointHome + ' points added to home')
  } else {
    pointGuest += points;
    guestScoreEl.textContent = pointGuest;
    console.log(pointGuest + " points added to guest");
  }
}



//reset points
export function resetPoints(){
   pointHome = 0
   pointGuest = 0

   homeScoreEl.textContent = pointHome;
   guestScoreEl.textContent = pointGuest;
   console.log('Game reset')
}


// Make functions globally accessible
globalThis.addPoints = addPoints;
globalThis.resetPoints = resetPoints;