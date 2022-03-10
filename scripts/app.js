const navHamburgerIcon = document.getElementById("hamburger-icon");
const navMenuExitElement = document.getElementById("hamburger-exit-icon");
const navDropdownElement = document.getElementById("hamburger-menu");

const janHeaderElement = document.getElementById("jan-calendar-header");
const febHeaderElement = document.getElementById("feb-calendar-header");
const marHeaderElement = document.getElementById("mar-calendar-header");

const janCalendar = document.getElementById("jan-calendar");
const febCalendar = document.getElementById("feb-calendar");
const marCalendar = document.getElementById("mar-calendar");

navMenuExitElement.addEventListener("click", closeHamburgerMenu);
navHamburgerIcon.addEventListener("click", openHamburgerMenu);

janHeaderElement.addEventListener("click", showJan);
febHeaderElement.addEventListener("click", showFeb);
marHeaderElement.addEventListener("click", showMar);

function openHamburgerMenu() {
  navHamburgerIcon.style.visibility = "hidden";
  navDropdownElement.style.visibility = "visible";
  navMenuExitElement.style.visibility = "visible";
  console.log("clicked");
}

function closeHamburgerMenu() {
  navHamburgerIcon.style.visibility = "visible";
  navDropdownElement.style.visibility = "hidden";
  navMenuExitElement.style.visibility = "hidden";
}

function showJan() {
  janCalendar.style.visibility = "visible";
  console.log("clicked jan");
}

function showFeb() {
  febCalendar.style.visibility = "visible";
  console.log("clicked feb");
}

function showMar() {
  marCalendar.style.visibility = "visible";
  console.log("clicked mar");
}

// const drawerTransitioner = transitionHiddenElement({
//   element: document.querySelector(".calendar"),
//   visibleClass: "is-open",
// });

// document.querySelector(".right-nav-arrows").addEventListener("click", () => {
//   drawerTransitioner.show();
// });

// document.querySelector(".left-nav-arrows").addEventListener("click", () => {
//   drawerTransitioner.hide();
// });

/**
 * Library code
//  * Using https://www.npmjs.com/package/@cloudfour/transition-hidden-element
//  */

// function transitionHiddenElement({
//   element,
//   visibleClass,
//   waitMode = "transitionend",
//   timeoutDuration,
//   hideMode = "hidden",
//   displayValue = "block",
// }) {
//   if (waitMode === "timeout" && typeof timeoutDuration !== "number") {
//     console.error(`
//       When calling transitionHiddenElement with waitMode set to timeout,
//       you must pass in a number for timeoutDuration.
//     `);

//     return;
//   }

// //   // Don't wait for exit transitions if a user prefers reduced motion.
// //   // Ideally transitions will be disabled in CSS, which means we should not wait
// //   // before adding `hidden`.
// //   if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// //     waitMode = "immediate";
// //   }

//   /**
//    * An event listener to add `hidden` after our animations complete.
//    * This listener will remove itself after completing.
//    */
//   const listener = (e) => {
//     // Confirm `transitionend` was called on  our `element` and didn't bubble
//     // up from a child element.
//     if (e.target === element) {
//       applyHiddenAttributes();

//       element.removeEventListener("transitionend", listener);
//     }
//   };

//   const applyHiddenAttributes = () => {
//     if (hideMode === "display") {
//       element.style.display = "none";
//     } else {
//       element.setAttribute("hidden", true);
//     }
//   };

//   const removeHiddenAttributes = () => {
//     if (hideMode === "display") {
//       element.style.display = displayValue;
//     } else {
//       element.removeAttribute("hidden");
//     }
//   };

//   return {
//     /**
//      * Show the element
//      */
//     show() {
//       /**
//        * This listener shouldn't be here but if someone spams the toggle
//        * over and over really fast it can incorrectly stick around.
//        * We remove it just to be safe.
//        */
//       element.removeEventListener("transitionend", listener);

//       /**
//        * Similarly, we'll clear the timeout in case it's still hanging around.
//        */
//       if (this.timeout) {
//         clearTimeout(this.timeout);
//       }

//       removeHiddenAttributes();

//       /**
//        * Force a browser re-paint so the browser will realize the
//        * element is no longer `hidden` and allow transitions.
//        */
//       const reflow = element.offsetHeight;

//       element.classList.add(visibleClass);
//     },

//     /**
//      * Hide the element
//      */
//     hide() {
//       if (waitMode === "transitionend") {
//         element.addEventListener("transitionend", listener);
//       } else if (waitMode === "timeout") {
//         this.timeout = setTimeout(() => {
//           applyHiddenAttributes();
//         }, timeoutDuration);
//       } else {
//         applyHiddenAttributes();
//       }

//       // Add this class to trigger our animation
//       element.classList.remove(visibleClass);
//     },

//     /**
//      * Toggle the element's visibility
//      */
//     toggle() {
//       if (this.isHidden()) {
//         this.show();
//       } else {
//         this.hide();
//       }
//     },

//     /**
//      * Tell whether the element is hidden or not.
//      */
//     isHidden() {
//       /**
//        * The hidden attribute does not require a value. Since an empty string is
//        * falsy, but shows the presence of an attribute we compare to `null`
//        */
//       const hasHiddenAttribute = element.getAttribute("hidden") !== null;

//       const isDisplayNone = element.style.display === "none";

//       const hasVisibleClass = [...element.classList].includes(visibleClass);

//       return hasHiddenAttribute || isDisplayNone || !hasVisibleClass;
//     },

//     // A placeholder for our `timeout`
//     timeout: null,
//   };
// }
