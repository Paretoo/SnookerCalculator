
// Variables
var score = 0;
var score2 = 0;

// Defalut value
document.getElementById("counter1").value = score;
document.getElementById("counter2").value = score2;


// Counter 1 functions
function redButton() {
  document.getElementById("counter1").value = score += 1;
}

function yellowButton() {
  document.getElementById("counter1").value = score += 2;
}

function greenButton() {
  document.getElementById("counter1").value = score += 3;
}

function brownButton() {
  document.getElementById("counter1").value = score += 4;
}

function blueButton() {
  document.getElementById("counter1").value = score += 5;
}

function pinkButton() {
  document.getElementById("counter1").value = score += 6;
}

function blackButton() {
  document.getElementById("counter1").value = score += 7;
}

// Counter 2 functions
function redButton2() {
  document.getElementById("counter2").value = score2 += 1;
}

function yellowButton2() {
  document.getElementById("counter2").value = score2 += 2;
}

function greenButton2() {
  document.getElementById("counter2").value = score2 += 3;
}

function brownButton2() {
  document.getElementById("counter2").value = score2 += 4;
}

function blueButton2() {
  document.getElementById("counter2").value = score2 += 5;
}

function pinkButton2() {
  document.getElementById("counter2").value = score2 += 6;
}

function blackButton2() {
  document.getElementById("counter2").value = score2 += 7;
}

document.getElementById("reset").addEventListener("click", resetScore);
function resetScore() {
  document.getElementById("counter1").value = score = 0;
  document.getElementById("counter2").value = score2 = 0;
  alert("The game has been restarted!");
}



