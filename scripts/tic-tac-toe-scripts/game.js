function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOverElement.firstElementChild.innerHTML =
    'You won, <span id="winner-name">PLAYER NAME!</span>';
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    playerConfigNameError.style.display = "block";
    backdropElement.style.display = "block";
    return;
  }

  resetGameStatus();
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
  scoreCounter.style.display = "block";
}

function resetScore() {
  players[0].score = 0;
  players[1].score = 0;
  player1ScoreElement.textContent = players[0].score;
  player2ScoreElement.textContent = players[1].score;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    selectEmptyFieldErrorModal.style.display = "block";
    backdropElement.style.display = "block";
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  console.log(gameData);

  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
    // if (winnerId == 1) {
    //   const cumulativePlayer1Score = player1Score++;
    //   console.log(cumulative1PlayerScore);
    // }
  }

  currentRound++;
  switchPlayer();
}

function closeSelectEmptyFieldModal() {
  selectEmptyFieldErrorModal.style.display = "none";
  backdropElement.style.display = "none";
}

function checkForGameOver() {
  // checking rows for equality (enacts below commented out code through a loop)
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  //Checking columns
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  // Checking diagonals
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][0] > 0 &&
      gameData[0][0] === gameData[1][1] &&
      gameData[1][1] === gameData[2][2]
    ) {
      return gameData[0][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[2][0] > 0 &&
      gameData[2][0] === gameData[1][1] &&
      gameData[1][1] === gameData[0][2]
    ) {
      return gameData[2][0];
    }

    // checking draw
    if (currentRound === 9) {
      return -1;
    }
    return 0;
  }
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverElement.style.display = "block";
  gameBoardElement.classList.remove("game-board");
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;

    //score counter adding to players array

    function updatePlayerScore() {
      if (winnerId === 1) {
        const player1Score = players[0].score + 1;
        players[0].score = player1Score;
      } else if (winnerId === 2) {
        const player2Score = players[1].score + 1;
        players[1].score = player2Score;
      }
      player1ScoreElement.textContent = players[0].score;
      player2ScoreElement.textContent = players[1].score;
    }
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
  updatePlayerScore();
}
