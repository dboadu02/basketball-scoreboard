let pointHome = 0
let pointGuest = 0



//increase point by 1
//home team
function plusOneHome(){
 pointHome += 1 
 console.log(pointHome)

 document.getElementById("homescore-el").textContent = pointHome;
}

//guest team
function plusOneGuest() {
  pointGuest += 1;
  console.log(pointGuest);

  document.getElementById("guestscore-el").textContent = pointGuest;
}


//increase point by 2
//home team
function plusTwoHome(){
 pointHome += 2 
 console.log(pointHome)

 document.getElementById("homescore-el").textContent = pointHome;
}

//guest team
function plusTwoGuest() {
  pointGuest += 2;
  console.log(pointGuest);

  document.getElementById("guestscore-el").textContent = pointGuest;
}


//increase point by 3
//home team
function plusThreeHome(){
 pointHome += 3 
 console.log(pointHome)

 document.getElementById("homescore-el").textContent = pointHome;
}

//guest team
function plusThreeGuest() {
  pointGuest += 3;
  console.log(pointGuest);

  document.getElementById("guestscore-el").textContent = pointGuest;
}


//reset points
function resetPoints(){
   pointHome = 0
   pointGuest = 0

   document.getElementById("homescore-el").textContent = pointHome;
   document.getElementById("guestscore-el").textContent = pointGuest;
}