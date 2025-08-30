let secret = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  let guess = parseInt(document.getElementById("guessInput").value);
  let result = document.getElementById("result");

  if (isNaN(guess)) {
    result.innerText = "Введи число!";
  } else if (guess > secret) {
    result.innerText = "Менше!";
  } else if (guess < secret) {
    result.innerText = "Більше!";
  } else {
    result.innerText = "Ви вгадали!";
  }
}