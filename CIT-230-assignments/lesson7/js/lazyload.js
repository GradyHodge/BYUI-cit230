// LESSON 7 LAZY LOADING IMAGES

// THE OLD WAY
// Loading via JavaScript THE OLD WAY
// The app.js file processes the data-src attributes like so:

let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = image => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
// // The imagesToLoad variable contains references to all the images,
// // while the loadImages function moves the path from data-src to src.
// // When each image is actually loaded, we remove its data-src attribute
// // as it's not needed anymore. Then we loop through each image and load it:

imagesToLoad.forEach(img => {
  loadImages(img);
});
// ABOVE, THE OLD WAY TO LOAD IMAGES

// Loading on demand
// The image loading mechanism discussed in the above section works OK — it loads the images after rendering the HTML structure, and applies a nice transition effect in the process. The problem is that it still loads all the images at once, even though the user will only see the first two or three upon page load.

// This problem can be solved with the new Intersection Observer API — using this we can ensure that images will be loaded only when they appear in the viewport.

// Intersection Observer
// This is a progressive enhancement to the previously working example — Intersection Observer will load target images only when the user scrolls down, causing them to display in the viewport.

// Here's what the relevant code looks like:

// if ("IntersectionObserver" in window) {
//   const observer = new IntersectionObserver((items, observer) => {
//     items.forEach(item => {
//       if (item.isIntersecting) {
//         loadImages(item.target);
//         observer.unobserve(item.target);
//       }
//     });
//   });
//   imagesToLoad.forEach(img => {
//     observer.observe(img);
//   });
// } else {
//   imagesToLoad.forEach(img => {
//     loadImages(img);
//   });
// }

// If the IntersectionObserver object is supported,
// the app creates a new instance of it.
// The function passed as a parameter is handling the case when one or more items
// are intersecting with the observer (i.e. is appearing inside the viewport).
// We can iterate over each case and react accordingly — when an image is visible,
// we load the correct image and stop observing it as we no longer need to observe it.

// Let's reiterate our earlier mention of progressive enhancement —
// the code is written so that the app will work whether Intersection Observer
// is supported or not. If it's not, we just load the images using the
// more basic approach covered earlier.
