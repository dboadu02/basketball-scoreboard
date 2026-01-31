let pointHome = 0
let pointGuest = 0

//interact with DOM
let homeScoreEl = document.getElementById("homescore-el")
let guestScoreEl = document.getElementById("guestscore-el")

//increase point by 1
//home team
function plusOneHome(){
 pointHome += 1 
 console.log(pointHome)

 homeScoreEl.textContent = pointHome;
}

//guest team
function plusOneGuest() {
  pointGuest += 1;
  console.log(pointGuest);

  guestScoreEl.textContent = pointGuest;
}


//increase point by 2
//home team
function plusTwoHome(){
 pointHome += 2 
 console.log(pointHome)

 homeScoreEl.textContent = pointHome;
}

//guest team
function plusTwoGuest() {
  pointGuest += 2;
  console.log(pointGuest);

  guestScoreEl.textContent = pointGuest;
}


//increase point by 3
//home team
function plusThreeHome(){
 pointHome += 3 
 console.log(pointHome)

 homeScoreEl.textContent = pointHome;
}

//guest team
function plusThreeGuest() {
  pointGuest += 3;
  console.log(pointGuest);

  guestScoreEl.textContent = pointGuest;
}


//reset points
function resetPoints(){
   pointHome = 0
   pointGuest = 0

   homeScoreEl.textContent = pointHome;
   homeScoreEl.textContent = pointGuest;
}