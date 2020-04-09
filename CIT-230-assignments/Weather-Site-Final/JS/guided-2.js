// Lesson 9 Prophets JSON FETCH API

// We are going to use the fetch() (Links to an external site.)
// method which requires at least one argument, the path to the resource,
// which in our case is the latter-day-prophets JSON file. fetch()
// then returns an asynchronous Promise (Links to an external site.)
// that provides a generic Response (Links to an external site.) to the request. fetch()
// has built in error handling. With the string data retrieved, we can run a .json()
// method on the Response to convert it into a JavaScript object, which is easy to work with.
// Let's get started on your JavaScript! The following lines of code should be written
// in your prophets.js file.

// Let's store the resource, the URL of the JSON file into a const variable to start.
const requestURL = "./guides.json";

// We will use a basic fetch() method and feed it the required argument, the URL and use the .then()
// method that returns a Promise which response we will work with as an argument to an anonymous function.
// We need to extract the JSON content from the noise of the full HTTP response by using the json() method.
// The second .then() method is then setup for us to work with the converted response data in
// JavaScript object format.  Initially we will test to see if we get a valid, parsed response using
// a console.table() method to output the results to the console.

$(document).ready(function () {
  $.getJSON("./guides.json", function (result) {
    var guidesObj = result;
// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject); // temporary checking for valid response and data parsing
     guidesObj.guides = jsonObject["guides"];
    for (let i = 0; i < guides.length; i++) {
      let card = document.createElement("section");
      let name = document.createElement("h2");
      let certification = document.createElement("p");
      let experience = document.createElement("p");
      let image = document.createElement("img");

      name.textContent = guides[i].name;
      certification.textContent = "Certification: " + guides[i].cert;
      experience.textContent = "Years of Experience: " + guides[i].exp;
      image.setAttribute("src", guides[i].picture);
      image.setAttribute("alt", guides[i].name);

      card.appendChild(name);
      card.appendChild(certification);
      card.appendChild(experience);
      card.appendChild(image);

      document.querySelector("div.guide-cards").appendChild(card);
    }
  });

// Now we will store the results of the converted response into an array since the data source
// is a neatly packed array of records named "prophets". See JSON source.

// const prophets = jsonObject['prophets'];

// As you guessed, in order to produce the output as shown in the screenshots, we need to loop
// through every record and process them into their own 'cards' (HTML output), one at a time.
// This is easily done using a for loop, something that you are familiar with as you process
// each element of an array. Remember? We will use the variable i as our control variable in
// the loop as we iterate through the prophets array.

// IMPORTANT: Put this line of code directly after the console.table() l
// ine and before you close the .then() method }); .

// for (let i = 0; i < prophets.length; i++ ) {

///////////////////////////////////////////////////////////////

// Now we just build the HTML of the prophet card using the createElement(), textContent(),
// and appendChild() methods on the document. We will place all of these prophet 'cards' in
// already marked up, generic division div element on the page that has a class attribute value
// of "cards". Let's go ahead and make each card a <section> element with standard heading <h2>
// and paragraphs <p> for field items and an image <img>. This code snippet, which resides in the
// for loop, adds the <h2> element only.

let card = document.createElement("section");
let name = document.createElement("h2");

name.textContent = guides[i].name;

card.appendChild(h2);

document.querySelector("div.guide-cards").appendChild(card);
