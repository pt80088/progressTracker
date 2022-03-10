// my attempt

console.dir(document);
let inputElement = document.querySelector("input");

let counterElement = document.querySelector("p");

function getUserData() {
  let getUserData = inputElement.value;
  let userDataLength = getUserData.length;
  let remainingCharacters = 60 - userDataLength;
  console.log(remainingCharacters);
  counterElement.innerText = 60 - remainingCharacters + "/60";
}

inputElement.addEventListener("input", getUserData);
