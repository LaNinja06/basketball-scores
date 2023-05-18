
let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")
let newGameEl = document.getElementById("new-game-el")

let scoreHome = 0
let scoreGuest = 0

// HOME SCORES 

function add1PointH() {
    scoreHome += 1 
    scoreHomeEl.textContent = scoreHome
}

function add2PointH() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function add3PointH() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

// GUEST SCORES 

function add1PointG() {
    scoreGuest += 1 
    scoreGuestEl.textContent = scoreGuest
}

function add2PointG() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function add3PointG() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}

// NEW GAME

function newGame() {
    scoreHome = 0
    scoreGuest = 0
    scoreHomeEl.textContent = 0
    scoreGuestEl.textContent = 0
    
}
 
// SAVE GAME 
    