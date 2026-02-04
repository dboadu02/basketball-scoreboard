//declare variables to hold scores
let pointHome = 0
let pointGuest = 0

//variables for countdown
const startingTime = 12;
let time = startingTime * 60;
let countdownInterval = null; 


//interact with DOM elements
let homeScoreEl = document.getElementById("homescore-el");
let guestScoreEl = document.getElementById("guestscore-el");
let countdownEl = document.getElementById("timer");


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
  pointHome = 0;
  pointGuest = 0;

  time = startingTime * 60  
  clearInterval(countdownInterval); // Clear any existing interval
  updateCountdown(); // Update display immediately
  

  homeScoreEl.textContent = pointHome;
  guestScoreEl.textContent = pointGuest;
  console.log("Game reset");
}


//timer

function updateCountdown(){
  const minutes = Math.floor(time / 60)
  let seconds = time % 60

  seconds = String(seconds).padStart(2, "0"); 

  countdownEl.innerHTML = `${minutes}:${seconds}`
  time--
  time = Math.max(time, 0)
}

//used addEventListener to check if the function works when clicked without making it global
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("playBtn").addEventListener("click", play);

function pauseTimer(){
  clearInterval(countdownInterval)
  countdownInterval = null
  console.log('paused')
}

function play(){
  countdownInterval = setInterval(updateCountdown, 1000);
  console.log('start game')
}



// Make functions globally accessible
globalThis.addPoints = addPoints;
globalThis.resetPoints = resetPoints;