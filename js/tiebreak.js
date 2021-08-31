// Get random dice pic on screen load
window.onload = startDice;

// Allow roll button to be triggered by hitting space
document.body.onkeyup = function spaceRoll(spaceStart) {
  if (spaceStart.keyCode == 32) {
    changeDice();
  } else {
    return;
  }
};

// Array of dice images
var dicePics = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

// Get random image of dice for both players // called on window.load
function startDice() {
  var randomNum1 = Math.floor(Math.random() * dicePics.length);
  document.querySelector("img.img1").src = dicePics[randomNum1];
  console.log(randomNum1);

  var randomNum2 = Math.floor(Math.random() * dicePics.length);
  document.querySelector("img.img2").src = dicePics[randomNum2];
  console.log(randomNum2);
}

// Change dice on button click // Identify winner // Run reset function
function changeDice() {
  var randomNum1 = Math.floor(Math.random() * dicePics.length);
  document.querySelector("img.img1").src = dicePics[randomNum1];
  console.log(randomNum1);

  var randomNum2 = Math.floor(Math.random() * dicePics.length);
  document.querySelector("img.img2").src = dicePics[randomNum2];
  console.log(randomNum2);

  if (randomNum1 > randomNum2) {
    document.querySelector("#results").textContent = "Winner: Player 1 wins!";
  } else if (randomNum1 < randomNum2) {
    document.querySelector("#results").textContent = "Winner: Player 2 wins!";
  } else {
    document.querySelector("#results").textContent = "Winner: It's a tie!";
  }
  return resetText();
}

// Change roll button to reset button // Reload page on clck
function resetText() {
  document.querySelector("#buttonReset").textContent = "Click to Reset";
  document
    .querySelector("#buttonReset")
    .setAttribute("onclick", "location.reload()");
  document.body.onkeyup = function spaceRoll(spaceReset) {
    if (spaceReset.keyCode == 32) {
      location.reload();
    } else {
      return;
    }
  };
}
