// document.body.children[1].children[0].href = "https://google.com";

// // console.dir(document);

// // alert();
// //

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

// anchorElement = document.querySelector("p a"); //like in CSS  p a {color: red}
// anchorElement.href = "https://academind.com";

// Add an element
// 1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = " This leads to Google!";

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent

firstParagraph.append(newAnchorElement);

//Remove Element

// 1. select the element

let firstH1Element = document.querySelector("h1");

// 2. remove it

// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // for older browsers (IE)

// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

console.log(firstParagraph.innerHTML);
// console.log(firstParagraph.textContent);

firstParagraph.innerHTML =
  "This is another <a href=https://google.com> link <a/>";

// EVENTs
