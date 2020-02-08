// LESSON 4 PRESTON TOWN CENTER BASIC LAYOUT

//ALL JS files are rolled into one for performance

// TODO: nav toggle:display/hide

function toggleMenu() {
  document.getElementById("navUl").classList.toggle("hide");
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
