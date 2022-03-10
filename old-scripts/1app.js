let today = Date();
let month = today.innerHTML;
console.log(today);

let rightArrow = document.getElementById("left-arrow");

let arrows = document.getElementsById();

console.log(arrows);

let leftArrow = document.arrows.firstChild;

addEventListener("click", leftArrow);

// $(document).ready(function () {
//   $("a[href*=\\#]").on("click", function (e) {
//     e.preventDefault();
//     var fullTargetLink = this.href;
//     var targetLink = fullTargetLink.substr(0, fullTargetLink.indexOf("#"));
//     var fullCurrentLink = window.location.href;
//     if (fullCurrentLink.indexOf("#") > -1) {
//       var currentLink = fullCurrentLink.substr(0, fullCurrentLink.indexOf("#"));
//     } else {
//       var currentLink = fullCurrentLink;
//     }
//     if (targetLink !== currentLink) {
//       window.location.href = fullTargetLink;
//     } else {
//       $("html, body").animate(
//         {
//           scrollTop: $(this.hash).offset().top,
//         },
//         500
//       );
//     }
//   });
// });
