window.onload = startDice;

document.body.onkeyup = function spaceRoll(e) {
  if (e.keyCode == 32) {
    changeDice();
  } else {
    return;
  }
};

var dicePics = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

function startDice() {
  var randomNum1 = Math.floor(Math.random() * dicePics.length);
  document.querySelector("img.img1").src = dicePics[randomNum1];
  console.log(randomNum1);

  var randomNum2 = Math.floor(Math.random() * dicePics.length);
  document.querySelector("img.img2").src = dicePics[randomNum2];
  console.log(randomNum2);
}

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

function resetText() {
  document.querySelector("#buttonReset").textContent = "Click to Reset";
  document.querySelector("#buttonReset").setAttribute("onclick", "resetDice()");
  document.body.onkeyup = function spaceRoll(e) {
    if (e.keyCode == 32) {
      resetDice();
    } else {
      return;
    }
  };
}

function resetDice() {
  location.reload();
}
