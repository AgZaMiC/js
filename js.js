const rockBtn = document.querySelector(".rock > button");
const paperBtn = document.querySelector(".paper > button");
const scissorsBtn = document.querySelector(".scissors > button");
const botScore = document.querySelector(".bot-score");
const playerScore = document.querySelector(".player-score");
const positions = ["rock", "paper", "scissors"];

rockBtn.addEventListener("click", () => {
    const bot = positions[Math.floor(Math.random() * 3)];

    if (bot === "paper") {
        botScore.textContent = Number(botScore.textContent) + 1;
    }

    if (bot === "scissors") {
        playerScore.textContent = Number(playerScore.textContent) + 1;
    }
    console.log(bot);
});

paperBtn.addEventListener("click", () => {
    const bot = positions[Math.floor(Math.random() * 3)];

    if (bot === "scissors") {
        botScore.textContent = Number(botScore.textContent) + 1;
    }

    if (bot === "rock") {
        playerScore.textContent = Number(playerScore.textContent) + 1;
    }
    console.log(bot);
});

scissorsBtn.addEventListener("click", () => {
    const bot = positions[Math.floor(Math.random() * 3)];

    if (bot === "scissors") {
        botScore.textContent = Number(botScore.textContent) + 1;
    }

    if (bot === "paper") {
        playerScore.textContent = Number(playerScore.textContent) + 1;
    }
    console.log(bot);
});