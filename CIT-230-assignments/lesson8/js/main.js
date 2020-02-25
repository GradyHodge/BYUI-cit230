// LESSON 7 PRESTON TOWN CENTER

// TODO: POP-UP ALERT BASED ON DATE

var date = new Date();
var day = date.getDay();
if (day != 5) {
  document.getElementById("popup").style.display = "none";
}

//////////////////////////////////////////////////////////////////

// TODO: nav toggle:display/hide

function toggleMenu() {
  document.getElementById("navUl").classList.toggle("hide");
}

///////////////////////////////////////////////////////////////////////////

function toggleForecast() {
  document.getElementById("weatherDetails").classList.toggle("hide");
}

///////////////////////////////////////////////////////////////////////////

// TODO: weather API

///////////////////////////////////////////////////////////////////////////

// FOOTER: Todays Current Date Formatted as Day, Date Month, Year

//DAY Full Name Array
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// Month Full Name Array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const todaysDate = new Date();
const dayName = dayNames[todaysDate.getDay()];
const monthName = months[todaysDate.getMonth()];
const today =
  dayName +
  ", " +
  todaysDate.getDate() +
  " " +
  monthName +
  ", " +
  todaysDate.getFullYear();

document.getElementById("today").textContent = today;

///////////////////////////////////////////////////////////////////////////

// WEATHER SUMMARY: Todays Current Date Formatted as Day, Date Month, WITHOUT YEAR

//DAY Full Name Array
// const dayNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// ];

// // Month Full Name Array
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December"
// ];

const todaysDate1 = new Date();
const dayName1 = dayNames[todaysDate.getDay()];
const monthName1 = months[todaysDate.getMonth()];
const today1 = dayName + ", " + todaysDate.getDate() + " " + monthName;

document.getElementById("todaySummary").textContent = today1;

///////////////////////////////////////////////////////////////////////////

//FOOTER: Last Modified date

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
};
document.getElementById("fullDate").textContent = new Date(
  document.lastModified
).toLocaleDateString("en-US", options);

///////////////////////////////////////////////////////////////////////////

//footer update Last Modified time stamp

document.getElementById("time").textContent = new Date(
  document.lastModified
).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

///////////////////////////////////////////////////////////////////////////

//footer update copyright year

document.getElementById("updateYear").textContent = new Date().getFullYear();
