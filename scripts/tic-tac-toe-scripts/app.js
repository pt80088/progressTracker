// defines js elements -- must come first
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
// let player1Score = 0;
// let player2Score = 0;

const players = [
  { name: "", symbol: "X", score: 0 },
  { name: "", symbol: "O", score: 0 },
];

// const playerScores = [
//   {name: '', score = 0},
//   {name: '', score = 0},
// ];

const playerConfigOverlayElement = document.getElementById("config-overlay");

const playerConfigNameError = document.getElementById("warning-custom-name");
const selectEmptyFieldErrorModal =
  document.getElementById("select-empty-field");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");
const scoreCounter = document.getElementById("score-counter");
// const player1Score = document.getElementById("player-1-score");
const player1NameScoreElement = document.getElementById("player-1-name");
const player2NameScoreElement = document.getElementById("player-2-name");
const player1ScoreElement = document.getElementById("player-1-score");
const player2ScoreElement = document.getElementById("player-2-score");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-button");
const startNewGameBtn = document.getElementById("start-game-btn");
const resetScorebtn = document.getElementById("reset-score-btn");
// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

playerConfigNameError.addEventListener("click", closePlayerConfigNameError);
selectEmptyFieldErrorModal.addEventListener(
  "click",
  closeSelectEmptyFieldModal
);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtn.addEventListener("click", startNewGame);
resetScorebtn.addEventListener("click", resetScore);
``;

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }

gameBoardElement.addEventListener("click", selectGameField);

// score counter

// editPlayer1BtnElement.addEventListener("click", updatePlayerName);
// editPlayer2BtnElement.addEventListener("click", updatePlayerName);
