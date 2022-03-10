// configuring player names

function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;

  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function closePlayerConfigNameError() {
  playerConfigNameError.style.display = "none";
  backdropElement.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  // player1Name.lastChild.textContent = players[0].name;
  // player2Name.lastChild.textContent = players[1].name;
  // counterNameField.firstElementChild.firstElementChild.textContent =
  //   enteredPlayername;
  // counterNameField.children[1].textContent = enteredPlayername;

  //   if (editedPlayer === 1) {
  //     players[0].name = enteredPlayername;
  //   } else {
  //     players[1].name = enteredPlayername;
  //   }

  players[editedPlayer - 1].name = enteredPlayername;
  player1NameScoreElement.lastChild.textContent = players[0].name;
  player2NameScoreElement.lastChild.textContent = players[1].name;
  player1ScoreElement.textContent = players[0].score;
  player2ScoreElement.textContent = players[1].score;

  closePlayerConfig();
}

// function updatePlayerName() {
//   const counterNameField =
//     document.getElementById("score-counter").nextElementChild;
//   console.dir(counterNameField);
//   counterNameField.textContent = enteredPlayername;
// }
