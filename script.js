const randomNumber1 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img1")
  .setAttribute("src", `images/dice${randomNumber1}.png`);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img2")
  .setAttribute("src", `images/dice${randomNumber2}.png`);

let message;
if (randomNumber1 > randomNumber2) message = "🏆 Player 1 wins!";
else if (randomNumber1 < randomNumber2) message = "🏆 Player 2 wins!";
else message = "It's a draw!";
document.querySelector("h1").textContent = message;
