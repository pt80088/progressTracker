const topRightNavArrow = document.getElementsByClassName("right-nav-arrows")[0];
const topLeftNavArrow = document.getElementsByClassName("left-nav-arrows")[0];

const bottomRightNavArrow =
  document.getElementsByClassName("right-nav-arrows")[1];
const bottomLeftNavArrow =
  document.getElementsByClassName("left-nav-arrows")[1];

topRightNavArrow.addEventListener("click", rightArrowClick);
topLeftNavArrow.addEventListener("click", leftArrowClick);
bottomRightNavArrow.addEventListener("click", rightArrowClick);
bottomLeftNavArrow.addEventListener("click", leftArrowClick);

function rightArrowClick(event) {
  console.log("clicked right");
}

function leftArrowClick(event) {
  console.log("clicked left");
}
